function createCheckBoxHandler(crd,el)
{
	return function(evt) {
		if (crd.source.context[el.name]) {
			crd.source.context[el.name]=0;
			el.offscript(crd.source.game,null,crd.source.context);
		}
		else {
			crd.context[el.name]=1;
			el.onscript(crd.source.game,null,crd.source.context);
		}
		crd.refresh();
	}	
}

function createRadioHandler(crd,el)
{
	return function(evt) {
		//go thro all except this guy and turn them off
		for (var i=0;i<crd.content.length;i+=1)
		{
			var it=crd.content[i];
			if (it==el) continue; //not for this one
			if ((!it.behaviour)||(it.behaviour!='radio')) continue;
			if (!it.name) continue;
			if (crd.source.context[it.name]) {
			  crd.source.context[it.name]=0;
              it.offscript(crd.source.game,null,crd.source.context);			  
			}		
		}
		if (!crd.source.context[el.name]) {
			crd.source.context[el.name]=1;
			el.onscript(crd.source.game,null,crd.source.context);
		}
		crd.refresh();
	}	
}

function refreshCard()
{
	for (var i=0;i<this.content.length;i+=1) 
		refreshCardItem(this,this.content[i]);
	
	//do the validations and enabling here
	var error=null;
	for (var i=0;i<this.source.validations.length;i+=1) 
		if (this.source.validations[i].exp(this.source.game,0,this.source.context)) {
			error=this.source.validations[i].error(this.source.game,0,this.source.context);
			break;
		}
		
	if (error) {
		this.message.innerHTML=error;
		unsetElementClass(this.accept,"disable");
	} else {
		this.message.innerHTML="";
		setElementClass(this.accept,"disable");
	} 	
}

function refreshCardItem(crd,el)
{
	el.innerHTML=micromarkdown.parse(el.content(crd.source.game,0,crd.source.context));
	if ((el.behaviour=="check")||(el.behaviour=="radio")) {
		if (crd.source.context[el.name]) setElementClass(el,"set");
		else unsetElementClass(el,"set");
	}	
}

function createCard(source)
{
	var crd=document.createElement('div')
	crd.source=source;
	setElementClass(crd,'cardholder');
	crd.main=document.createElement('div');	
    setElementClass(crd.main,'cardmain');
	crd.content=[];
	crd.refresh=refreshCard;
	if (crd.source.init.cssClass) setElementClass(crd,crd.source.init.cssClass);    
	var contentdiv=document.createElement('div');	    
	setElementClass(contentdiv,'cardcontent');
	//load up the space init info
	for (var i=0;i<crd.source.init.content.length;i+=1) {
	    //go through the init and create internal sections
		var bit=crd.source.init.content[i];
	    var el=document.createElement('div');
		     
		el.content=createSFunction(bit.content);
		el.image=createSFunction(bit.image);
		el.name=bit.name;
        el.behaviour=bit.behaviour;         
		el.onscript=createVoidFunction(bit.onscript);
		el.offscript=createVoidFunction(bit.offscript);
		
		setElementClass(el,'carditem');
		contentdiv.appendChild(el);
		if (bit.cssClass) setElementClass(el,bit.cssClass);
		if (el.behaviour=="check") { //bind the check box handler to italics
		   el.onclick=createCheckBoxHandler(crd,el);
		} else if (el.behaviour=="radio") { //bind the check box handler to italics
		   el.onclick=createRadioHandler(crd,el);
		}
		crd.content.push(el);		
	}
	crd.main.appendChild(contentdiv);	
	
	//also add a dismiss button and control bar
	var dismiss=document.createElement('div');
	setElementClass(dismiss,'carddismiss');
	dismiss.onclick=function(evt)
	{
		crd.parentNode.removeChild(crd);
	}	
	crd.accept=document.createElement('div');
	setElementClass(crd.accept,'cardaccept');
	crd.accept.onclick=function(evt)
	{
		crd.parentNode.removeChild(crd);
	}	
	
	crd.message=document.createElement('div');
	setElementClass(crd.message,'cardmessage');
	
	crd.controlbar=document.createElement('div');
	setElementClass(crd.controlbar,'cardbar');
	crd.controlbar.appendChild(dismiss);
	crd.controlbar.appendChild(crd.accept);	
	crd.controlbar.appendChild(crd.message);
	crd.main.appendChild(crd.controlbar);	
	crd.appendChild(crd.main);
	return crd;	
}

function openCard(root,cardsource)
{
	var card=createCard(cardsource);
	root.appendChild(card);
	card.refresh();
	callEachFrame(500,
	  function(r) {
		card.style.opacity=inter(r*2,0,1,siso);
		card.main.style.opacity=inter(r,0,1,siso);		
	  },
	  function() {
		card.style.opacity=1;
		card.main.style.opacity=1;
	  }
    );
	return card;
}

function createCardInstance(gameL,cardName,param)
{
	var card={ 
	  init: cards[cardName],
	  game: gameL  
	};
	card.context=createShadowStore(card.init.context);
	card.title=createSFunction(card.init.title);
	card.display=createNFunction(card.init.display,1);
	card.urgent=createNFunction(card.init.urgent,1);
	card.remove=createNFunction(card.init.remove,1);
	card.ondismiss=createVoidFunction(card.init.ondismiss);
	card.onaccept=createVoidFunction(card.init.onaccept);	
	//check out the validations
	card.validations=[];		
	if (card.init.validations) {
		for (var i=0;i<card.init.validations.length;i+=1) {
			var cpy=card.init.validations[i];
			var newI={
			   exp: createNFunction(cpy.exp,0),
			   error: createSFunction(cpy.error,"ERROR")			   
			}
			card.validations.push(newI);
		}
	}
	return card;
}
