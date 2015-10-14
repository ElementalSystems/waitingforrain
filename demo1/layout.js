
var layout_frame={
   portrait: false,
   mainSpace: {left: 0, width: 600, top:0, height:600 },
   smallSpace: [{left: 610, width:100, top: 5, height: 100 },{left: 610, width:100, top: 110, height: 100 },{left: 610, width:100, top: 220, height: 100 }]   
}

function calculateLayoutFrame(n)
{
	var w=window.innerWidth;
	var h=window.innerHeight;
	var xoff=0;
	var yoff=0;
	if (!n) n=1;	
	//first work out the biggest square
	layout_frame.portrait=(h>w);
	if (layout_frame.portrait) {
		layout_frame.mainSpace={left: 0, width: w, top:0, height:w };
		yoff=w;		
	} else {
		layout_frame.mainSpace={left: 0, width: h, top:0, height:h };
		xoff=h;
	}
	//now work out the biggest set of n squares we can fit in the rest of the space

	var sw=w-xoff;
	var sh=h-yoff;
	var maxcol=0;
	var maxsz=-1;
	for (var col=1;col<=n;col+=1) {
		var rows=Math.ceil(n/col);
		var sz=Math.min(sw/col,sh/rows);
		if (sz>maxsz) {
			maxcol=col;
			maxsz=sz;
		}
	}
	
	layout_frame.smallSpace=[];
	for (var c=0;c<maxcol;c+=1)
		for (var r=0;r<Math.ceil(n/maxcol);r+=1) {
			var sp={left: xoff+c*maxsz, width: maxsz, top:yoff+r*maxsz, height:maxsz };
			layout_frame.smallSpace.push(sp);
		}
	
	
	
}



function setSpacePosition(el,pos)
{
	el.style.left=pos.left+"px";
	el.style.width=layout_frame.mainSpace.width+"px";
	el.style.top=pos.top+"px";
	el.style.height=layout_frame.mainSpace.height+"px";	
    var fp=pos.width/layout_frame.mainSpace.width;
	el.style.transform="scale("+fp.toFixed(3)+","+fp.toFixed(3)+")";
}

function selectSpace(evt)
{	    
	var sel=evt.currentTarget.layoutIndex;
	var oldsel=layoutManager.selected;		
    layoutManager.showActionList();
	if (sel==oldsel) return true; //pass it down the chain
			
	evt.preventDefault();
	
    var s=layout_frame.smallSpace[sel];
    var e=layout_frame.mainSpace;
	var s2=layout_frame.smallSpace[oldsel];

	callEachFrame(1000,
	  function(r) {
		  setSpacePosition(layoutManager.spaces[sel],
			  { 
				left: inter(r,s.left,e.left,siso),
				top: inter(r,s.top,e.top,siso),
				width: inter(r*2-1,s.width,e.width,siso),
				height: inter(r*2-1,s.height,e.height,siso),
			  }
		  );
    	  setSpacePosition(layoutManager.spaces[oldsel],
			  { 
				left: inter(r,e.left,s2.left,siso),
				top: inter(r,e.top,s2.top,siso),
				width: inter(r*2,e.width,s2.width,siso),
				height: inter(r*2,e.height,s2.height,siso),
			  }
		  );		  
	  },
	  function(){
		layoutManager.selected=sel;
		layoutManager.refresh();  
	  }
	);	
	return false;
}

function createActionHandler(action)
{
	return function(evt) {
		layoutManager.showActionList();
		openCard(document.body,action);		
	}
}

var layoutManager={
	spaces: [],
	selected: 0,
	game: null,
	actionListDisplay: null,
	open: function(init) {
		this.game=init;
		for (var i=0;i<init.spaces.length;i+=1) 
			this.addSpace(init.spaces[i]);
		this.refresh();
	},
	addSpace: function(spaceInit) {
		var s=addSpace(document.body,spaceInit);		
		s.layoutIndex=this.spaces.length;
		s.onclick=selectSpace;
		this.spaces.push(s);
		return s;
	},
	refreshSpaces: function() {
		for (var i=0;i<this.spaces.length;i+=1)
			updateSpace(this.spaces[i],this.game.state);
	},
	refresh: function() {
		calculateLayoutFrame(this.spaces.length);
		//go through each force them to the main or small position depending on whether they are selected or not
		for (var i=0;i<this.spaces.length;i+=1) 
		  if (i==this.selected)  {  //position it main
             setSpacePosition(this.spaces[i],layout_frame.mainSpace);			  
			 setElementClass(this.spaces[i],'active');
	      } else {
		     setSpacePosition(this.spaces[i],layout_frame.smallSpace[i]);			  
			 unsetElementClass(this.spaces[i],'active');
		  }
        this.refreshSpaces();		 
	},
    showActionList: function(el,listname) {
		//do we need to get rid of the old on
		if (this.actionListDisplay) {
			var kill=this.actionListDisplay;
			var fh=kill.offsetHeight;
		    callEachFrame(250,
	           function(r) { kill.style.height=inter(r,fh,0)+"px"; },
			   function() { kill.parentNode.removeChild(kill);},
			   siso
		    );		  	    	
			this.actionListDisplay=null;
		}
		if (listname) {
			var list=this.game.actionLists[listname];		
			var ald=document.createElement('div');
			setElementClass(ald,'actionlist');
			
			ald.style.left=el.offsetLeft+"px";
			ald.style.top=(el.offsetTop+el.offsetHeight)+"px";		
			//for every element in the list create a div
			for (var i=0;i<list.length;i+=1) {
			  var act=list[i];
			  var cmd=document.createElement('div');
			  cmd.innerHTML=act.title;
			  cmd.onclick=createActionHandler(act.action);
			  ald.appendChild(cmd);
			}
			document.body.appendChild(ald);		
			var targeth=ald.offsetHeight;
			callEachFrame(300,
			   function(r) { ald.style.height=inter(r,0,targeth)+"px"; },
			   null,
			   so
			);		  
			this.actionListDisplay=ald;
		}
	
		
	}		
}
