function createCard(init)
{
	var crd=document.createElement('div')
	crd.init=init; //this is who made me
	setElementClass(crd,'cardholder');
	crd.main=document.createElement('div');	
    setElementClass(crd.main,'cardmain');
	
	if (crd.init.cssClass) setElementClass(crd,crd.init.cssClass);    
	//load up the space init info
	for (var i=0;i<init.content.length;i+=1) {
	    //go through the init and create internal sections
		var bit=init.content[i];
	    var el=document.createElement('div');
		     
		el.content=createSFunction(bit.content);
		el.image=createSFunction(bit.image);
		el.innerHTML=micromarkdown.parse(el.content(layoutManager.game));
		        
		setElementClass(el,'carditem');
		crd.main.appendChild(el);
		if (bit.cssClass) setElementClass(el,bit.cssClass);
	}
	//also add a dismiss button
	var dismiss=document.createElement('div');
	setElementClass(dismiss,'carddismiss');
	dismiss.onclick=function(evt)
	{
		crd.parentNode.removeChild(crd);
	}	
	crd.main.appendChild(dismiss);
	
	crd.appendChild(crd.main);
	return crd;	
}

function openCard(root,cardInit)
{
	var card=createCard(cards[cardInit]);
	root.appendChild(card);
	return card;
}