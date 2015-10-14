//general utility code

  function setElementClass(e,cls)
  {
	  if (!e.classList.contains(cls))
		  e.classList.add(cls);
  }
  
  function unsetElementClass(e,cls)
  {
	  if (e.classList.contains(cls))
		  e.classList.remove(cls);
  }
  
//a general animation or slow effect utility
function callEachFrame(time,each,end)
{
	var startTime=0;
	var endTime=0;
	function func(t) {
		if (!startTime) {
			startTime=t;
			endTime=t+time;			
		}
		var r=(t-startTime)/(time);
		if (r<0) r=0;
		if (r>1) r=1;
		each(r);
		if (r<1)
			window.requestAnimationFrame(func);
		else {
			if (end) end();			
		}
	};	
	//call it the first time
	window.requestAnimationFrame(func);		
}

function siso(r) { return 3*r*r-2*r*r*r;}
function so(r) { return 2*r-r*r;}

function inter(r,st,end,func)
{
	if (r<0) r=0;
	if (r>1) r=1;	
	if (func) r=func(r);
	return (r*end)+((1-r)*st);
}



//utility code for this game space
function createBaseFunction(source)
{
	return new Function('g','d','c',source);
}

function createVoidFunction(source)
{
	if (source==null) return function(g,d,c) {};
	return createBaseFunction(source)	
}

function createGenericFunction(source)
{
	var body=source;
	if (body.charAt(0)!='{')  //we seem to not have a block a block so add an explicit return
	  body="return "+body;
	return createBaseFunction(body);
}

function createNFunction(source,defValue)
{
	if (source === undefined || source === null)  
		return function(g,d,c) { return defValue?defValue:0;};
	if (typeof source == 'number') 
		return function(g,d,c) { return source;};
	return createGenericFunction(source);	
}

function createLiteralFunction(lit)
{
	return function(g,d,c) { return lit;}
}
		

function createSFunction(source,defValue)
{
	if (source === undefined || source === null)  
		return function(g,d,c) { return defValue?defValue:"";};
	if (typeof source == 'number') 
		return function(g,d,c) { return source.toString();};
	//if we don't have any escaping codes it's just a string literal
	if (source.indexOf('{')<0)
		return function(g,d,c) { return source;};
	
	//otherwsie break it up with a regex!
	var reg = /{(.+?)}/g;
	var catlist=[];
	var lastMatch=0;
	while (true) {
	  var res=reg.exec(source);
	  if (res==null) {
		  var ft=source.substring(lastMatch,source.length);	    
		  if (ft.length)
		    catlist.push(createLiteralFunction(ft));	  
		  break;
	  }
	  //first add a std string and the expression following it
	  var freetext=source.substring(lastMatch,res.index);
	  if (freetext.length)
		  catlist.push(createLiteralFunction(freetext));
	  catlist.push(createGenericFunction(res[1]));
	  lastMatch=reg.lastIndex;		
	}
	return function(g,d,c) {
		var s="";
		for (var i=0;i<catlist.length;i+=1)
			s+=catlist[i](g,d,c);
		return s;
	}
}
