//sample space
var yard={
   "name": "arkyard",
   "cssClass": "a1",
   "content" :[
      { 
	    "display" : 1,
        "image": "wftr_art/ark_base.png",
		"content": "#The Ark Yard"		
	  },
	  { 
	    "top": 5,
	    "left":60,
		"cssClass": "display",
		"content": "Resource|Qty\n:-|-:\nTimber| 45\nShekels| 38\nMeat| 20\nGrain| 20",
		"autoWidth": true,
		"autoHeight": true
		
	  }
	  
   ]
}

var town={
   "name": "town",
   "content" :[
      { 
	    "content": "#The Town",		
		"image": "wftr_art/town.png"
	  },
	  { 
	    "content": "Townsfolk",
		"cssClass": "qLabel",
		"left": 25,
		"top": 68,
		"autoWidth": true,
		"autoHeight": true,
		"actionList": "sina"
		
	  },
	  { 
	    "content": "Olive Grove",
		"cssClass": "qLabel",
		"left": 75,
		"top": 55,
		"autoWidth": true,
		"autoHeight": true,
		"actionList": "sina"
		
	  }
      	  
   ]
}

var family={
   "name": "family",
   "content" :[
      { 
	    "content": "#Family",	
        "image": "wftr_art/fam_base.png"
	  },
      { 
	    "image": "wftr_art/fam_1.png",
	  },
	  { 	
        "image": "wftr_art/fam_2.png",
	  },
	  { 	
        "image": "wftr_art/fam_3.png",
	  },
	  { 
	    "content": "Noah __(5)__ 5",
		"cssClass": "qLabel",
		"left": 40,
		"top": 1,		
		"autoWidth": true,
		"autoHeight": true
		
	  },
      { 
	    "content": "Han __(0)__ 1",
		"cssClass": "qLabel",
		"left": 15,
		"top": 15,
		"autoWidth": true,
		"autoHeight": true,
		"actionList": "sina"
		
	  },
      { 
	    "content": "Sina __(0)__ 1",
		"cssClass": "qLabel",
		"left": 70,
		"top": 5,
		"autoWidth": true,
		"autoHeight": true,
		"actionList": "sina"
	   }
   ]
}


var animals={
   "name": "animals",
   "content" :[
      { 
	    "content": "#The Animals",
		"image": "wftr_art/ani_base.png"
	  }	  
   ]
}


var study={
   "name": "study",
   "content" :[
      { 
	    "content": "#The Study",
		"image": "wftr_art/study.png"		
	  },
      {
		"left": 42,
		"right": 90,
		"top": 3,
		"bottom": 15,
	    "cssClass": "board",
		"content": "##How are we doing?  \nArk Progress **82%**  \nAnimals Collected **0%**"		
	  },
      { 
	    "content": "Journal",
		"cssClass": "qLabel",
		"left": 20,
		"top": 65,
		"autoWidth": true,
		"autoHeight": true,		
		}	  
   ]
}

var wftr={
	"spaces": [yard,town,family,study,animals],
	"state": {
		time: 666,
		year: 0
	},
    "actionLists": {
       "sina": [ { "title": "What's your status?", "action": "statusCard"}, {"title":"I've got a new Job for you.", "action": "assignCard"}, {"title":"Next time round...", "action": "nextCard"}]
	}	
}

var cards={
	statusCard: {
		content: [
		  {
			  content: "#This is a Card"			  
		  },
		  {
			  content: "Which is the basic interface unit of the game which can contain controls and scripts of various sorts but is mostly scripted in mark down sp it can do tables and bullet points"			  			  
		  },
		  {
			  content: "This is part of an option that could be selected",
			  behaviour: "radio",
			  cssClass: "option",
			  name: "option1",
			  onscript: "c.s_val=10; c.v_val=20;",
			  offscript: "c.s_val=0; c.v_val=0;"			  
		  },
		  { 
	        "cssClass": "display",
		    "content": "Resource|Qty\n:-|-:\nTimber| 45\nShekels| 38\nMeat| 20\nGrain| 20"
	      }
		]
		
	}
		
};
