//sample space
var yard={
   "name": "arkyard",
   "cssClass": "a1",
   "content" :[
      { 
	    "display" : 1,
        "image": "wftr_art/ark_base.png",
		"content": "#Yard"		
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
	    "content": "#Town",		
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
	    "content": "Sina __({g.queueLengthUrgent('sina')})__ ({g.queueLength('sina')})",
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
	    "content": "#Farm",
		"image": "wftr_art/ani_base.png"
	  }	  
   ]
}


var study={
   "name": "study",
   "content" :[
      { 
	    "content": "#Homestead",
		"image": "wftr_art/study.png"		
	  },
      {
		"left": 40,
		"right": 92,
		"top": 3,
		"bottom": 35,
	    "cssClass": "board",
		"content": "###{50} Years until the Rains\n* Ark Progress **82%** \n* Animals Collected **0%**"		
	  },
	  
      { 
	    "content": "Visitors __({g.queueLengthUrgent('visitors')})__ ({g.queueLength('visitors')})",
		"cssClass": "qLabel",
		"left": 1,
		"top": 65,
		"autoWidth": true,
		"autoHeight": true,		
		"actionList": "visitors"
		},
		{ 
	    "content": "Records",
		"cssClass": "qLabel",
		"left": 25,
		"top": 10,
		"autoWidth": true,
		"autoHeight": true,		
		"actionList": "visitors"
		},
      { 
	    "top": 7,
	    "bottom": 39,
	    "left":4,
		"right": 25,
		"cssClass": "wdisplay",
		"content": "Resource|Qty\n:-|-:\nTimber| 45\nShekels| 38\nMeat| 20\nGrain| 20",		
	  }		
   ]
}

var wftr={
	"spaces": [study,yard,town,animals],
	"state": {
		time: 666,
		year: 0
	},
    "cardQ": {
       "sina": ["statusCard","statusCard"],
	   "visitors": ["statusCard"]
	}	
}

var cards={
	statusCard: {
		title: "Who is Sina?",
		urgent: 0,
		context: {
			s_val: 0
		},
		content: [
		  {
			  content: "#This is a Card {c.s_val}"			  
		  },
		  {
			  content: "Which is the basic interface unit of the game which can contain controls and scripts of various sorts but is mostly scripted in mark down sp it can do tables and bullet points"			  
		  },
		  {
			  content: "This is part of an option that could be selected",
			  behaviour: "radio",
			  cssClass: "option",
			  name: "option1",
			  onscript: "c.s_val=10; ",
			  offscript: "c.s_val=0; "			  
		  },
		  {
			  content: "This is another part of the plan",
			  behaviour: "radio",
			  cssClass: "option",
			  name: "option2",
			  onscript: "c.s_val=220; c.v_val=20;",
			  offscript: "c.s_val=0; c.v_val=0;"			  
		  }
	   ],
	   validations:[
	     { exp:"!(c.option1||c.option2)", error: "Select at least one option" }
	   ]
		
	}
		
};
