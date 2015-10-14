//code to create a game space


function createActionListHandler(el,actionList)
{
  return function(evt) {	
	layoutManager.showActionList(el,actionList);  
	evt.preventDefault();
	evt.stopPropagation();
	return false;
  }	
}

//Builds a game space from a JSON description of that space
//This space IS a DIV but has dependancy on the game state
function createGameSpace(init)
{
	//create a div cls gamespace
	var gs=document.createElement('div')
	gs.init=init; //this is who made me
	setElementClass(gs,'gamespace');
    if (gs.init.cssClass) setElementClass(gs,gs.init.cssClass);    
	//load up the space init info
	for (var i=0;i<init.content.length;i+=1) {
	    //go through the init and create internal images and text boxes as absolutely positioned children
		var bit=init.content[i];
	    var el=document.createElement('div');
		     
		el.display=createNFunction(bit.display,1);
		el.left=createNFunction(bit.left,0);
		el.right=createNFunction(bit.right,100);
		el.top=createNFunction(bit.top,0);
		el.bottom=createNFunction(bit.bottom,100);
		el.content=createSFunction(bit.content);
		el.image=createSFunction(bit.image);
		el.zIndex=createNFunction(bit.zIndex,100);
		el.autoWidth=bit.autoWidth?true:false;
        el.autoHeight=bit.autoHeight?true:false;
		if (bit.actionList)  //this element opens an action list		  
		  el.onclick=createActionListHandler(el,bit.actionList);
		
        
		setElementClass(el,'gamespaceitem');
		gs.appendChild(el);
		if (bit.cssClass) setElementClass(el,bit.cssClass);
	}
	return gs;	
}

function addSpace(root,spaceInit)
{
	var space=createGameSpace(spaceInit);
	root.appendChild(space);
	return space;
}

function updateSpaceItem(el,game,data)
{
	//position
	el.style.left=el.left(game,data).toFixed(2)+"%";
	el.style.top=el.top(game,data).toFixed(2)+"%";
	if (!el.autoWidth) el.style.right=(100-el.right(game,data)).toFixed(2)+"%";
	if (!el.autoHeight) el.style.bottom=(100-el.bottom(game,data)).toFixed(2)+"%";
	el.style.visibility=el.display(game,data)?"visible":"hidden";
	el.style.zIndex=el.zIndex(game,data);
	el.innerHTML=micromarkdown.parse(el.content(game,data));	

	var im=el.image(game,data);
	if (im.length) el.style.backgroundImage="url("+im+")";
	
}

function updateSpace(space,game,data) 
{
	//every child of space will be a section that might want updating
	var list=space.children;
	//loop through the children
	for (var i=0;i<list.length;i+=1) 
		updateSpaceItem(list[i],game,data);				
}

