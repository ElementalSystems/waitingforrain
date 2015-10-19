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
	    "top": 81,
	    "bottom": 89,
	    "left":4,
		"right": 20,
		"cssClass": "display",
		"content": "Wood Store  \n**22 tons**",		
	  },
	  {
		"left": 60,
		"right": 96,
		"top": 60,
		"bottom": 82,
	    "cssClass": "display",
		"content": "Progress **82%**  \n28 years behind schedule"		
	  },
	  { 
	    "content": "Site Management",
		"cssClass": "qLabel",
		"left": 45,
		"top": 55,
		"autoWidth": true,
		"autoHeight": true,
		"actionList": "arkyard"
		
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
		"left": 75,
		"top": 55,
		"autoWidth": true,
		"autoHeight": true,
		"actionList": "sina"
		
	  },
	  { 
	    "content": "Money Lender",
		"cssClass": "qLabel",
		"left": 75,
		"top": 70,
		"autoWidth": true,
		"autoHeight": true,
		"actionList": "sina"
		
	  },
	  { 
	    "content": "Market",
		"cssClass": "qLabel",
		"left": 45,
		"top": 55,
		"autoWidth": true,
		"autoHeight": true,
		"actionList": "market"		
	  },
	  { 
	    "content": "Mountain Road",
		"cssClass": "qLabel",
		"left": 25,
		"top": 15,
		"autoWidth": true,
		"autoHeight": true,
		"actionList": "sina"		
	  },
	  { 
	    "content": "Coast Road",
		"cssClass": "qLabel",
		"left": 65,
		"top": 25,
		"autoWidth": true,
		"autoHeight": true,
		"actionList": "sina"		
	  },
	  { 
	    "content": "Timbermill",
		"cssClass": "qLabel",
		"left": 5,
		"top": 48,
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
	  }	,
      { 
	    "content": "###Current Usage\n | \n-|-:\nOlives|60%\nGrain|25%\nMeat|50%\n###Workers\n | \n-|-:\nRequired|220\nCurrent|120\n ",
		"cssClass": "display",
		"left": 67,
		"top": 7,
		"autoWidth": true,
		"autoHeight": true,
		"actionList": "sina"
	   },
      { 
	    "content": "Zoo",
		"cssClass": "qLabel",
		"left": 7,
		"top": 75,
		"autoWidth": true,
		"autoHeight": true,
		"actionList": "sina"
	   },
	   { 
	    "content": "Farm",
		"cssClass": "qLabel",
		"left": 45,
		"top": 45,
		"autoWidth": true,
		"autoHeight": true,
		"actionList": "sina"
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
		"content": "###{g.year} Years until the Rains\n* Ark Progress **82%** \n* Animals Collected **0%**"		
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
	  },
	  { 
	    "content": "Noah",
		"cssClass": "qLabel",
		"left": 25,
		"top": 55,
		"autoWidth": true,
		"autoHeight": true,
		"actionList": "noah"		
	  },
	  { 
	    "content": "Naarah",
		"cssClass": "qLabel",
		"left": 30,
		"top": 65,
		"autoWidth": true,
		"autoHeight": true,
		"actionList": "naarah"		
	  },
	  { 
	    "content": "Ham",
		"cssClass": "qLabel",
		"left": 50,
		"top": 70,
		"autoWidth": true,
		"autoHeight": true,
		"actionList": "sina"		
	  },
	  { 
	    "content": "Huldah",
		"cssClass": "qLabel",
		"left": 55,
		"top": 80,
		"autoWidth": true,
		"autoHeight": true,
		"actionList": "sina"		
	  },
	  { 
	    "content": "Shem",
		"cssClass": "qLabel",
		"left": 75,
		"top": 65,
		"autoWidth": true,
		"autoHeight": true,
		"actionList": "sina"		
	  },
	  { 
	    "content": "Shelomit",
		"cssClass": "qLabel",
		"left": 85,
		"top": 50,
		"autoWidth": true,
		"autoHeight": true,
		"actionList": "sina"		
	  },
	  { 
	    "content": "Japheth",
		"cssClass": "qLabel",
		"left": 50,
		"top": 40,
		"autoWidth": true,
		"autoHeight": true,
		"actionList": "sina"		
	  },
	  { 
	    "content": "Jemima",
		"cssClass": "qLabel",
		"left": 65,
		"top": 40,
		"autoWidth": true,
		"autoHeight": true,
		"actionList": "sina"		
	  }
	  
	  
	  
	  
	  		
   ]
}

var wftr={
	"spaces": [study,yard,town,animals],
	"state": {
		"turn": 0,
		"year": 100,
		"wood": 30,
		"money": 100,
		"meat": 10,
		"grain": 10,
		"ark_plan_name": "none",
		"ark_plan_quality": .01,
		"family": {
			"noah": {
				"name": "Noah",
				"title": "Prophet of God",
				"description": "This 600 Year old is God's voice to this generation. He alone has been warned of the upcoming flood.",
				"skill_animal": 0.5,
				"skill_social": 1.9,
				"skill_farm": 0.5,
				"skill_build": 0.3,
				"work_description": "resting.",
				"work": "idle"
				
				
			},
			"naarah": {
				"name": "Naarah",
				"title": "Wife of Noah",
				"description": "Younger and more worldy than her husband she takes care of most of the practical stuff around the homestead.",
				"skill_animal": 1,
				"skill_social": 0.8,
				"skill_farm": 1.5,
				"skill_build": 0.8,
				"work_description": "resting.",
				"work": "idle"				
			}
			
			
			
			
		}
	},
    "cardQ": {
       "arkyard": [{ "cardName": "arkStatusCard" },{ "cardName": "buyWoodCard" }],
	   "noah": [{ "cardName": "statusCard", "name":"noah" },{ "cardName": "assignCard", "name":"noah" }],
	   "naarah": [{ "cardName": "statusCard", "name":"naarah" },{ "cardName": "assignCard", "name":"naarah" }],
	   "market": [{ "cardName": "sellOlivesCard" },{ "cardName": "sellGrainCard" },{ "cardName": "buyGrainCard" }],
	   "visitors": [{ "cardName": "sellOlivesCard" },{ "cardName": "sellGrainCard" },{ "cardName": "buyGrainCard" }]
	}	
}

var cards={
	statusCard: {
		title: "Who is {g.family[c.name].name}?",
		urgent: 0,
		context: {
			"name": ""
		},
		content: [
		  {
			  content: "#{g.family[c.name].name} : {g.family[c.name].title}"			  
		  },
		  {
			  content: "{g.family[c.name].description}"			  
		  }
		]
	},
	
	arkStatusCard: {
		title: "Project Status",
		urgent: 0,
		context: {},
		content: [
		  {
			  content: "#Ark Building Status  \n"
		  }
		]
	},	
	sellOlivesCard: {
		title: "Sell Olives",
		urgent: 0,
		context: {},
		content: [
		  {
			  content: "#Sell Olives  \n  You have **200 tons** of olives. The market price is currently **30 shekels per ton**."
		  }
		]
	},	
	sellGrainCard: {
		title: "Sell Grain",
		urgent: 0,
		context: {},
		content: [
		  {
			  content: "#Sell Grain  \n  You have **20 tons** of grain at the moment. You cn buy grain at **20 shekels per ton** at this time."
		  }
		]
	},	
	buyGrainCard: {
		title: "Buy Grain",
		urgent: 0,
		context: {},
		content: [
		  {
			  content: "#Buy Grain  \n  You have **20 tons** of grain at the moment. You can sell grain at **10 shekels per ton** at this time."
		  }
		]
	},	
	buyWoodCard: {
		title: "Acquire Wood",
		urgent: 0,
		context: {
			"wood": 0,
			"turns": 0,
			"money": 0
		},
		content: [
		  {
			  content: "#Acquire more wood for the Yard  \nYou currently have {g.wood} tons of wood."
		  },
		  {
			  content: "Buy wood from the local timber yard at 22 shekels per ton",
			  behaviour: "radio",
			  cssClass: "option",
			  name: "town",
			  onscript: "c.wood=23; c.turns=0;",			  
		  },
		  {
			  content: "Send a family member into the mountains to harvest wild growing trees.",
			  behaviour: "radio",
			  cssClass: "option",
			  name: "mountain",
			  onscript: "c.wood=50; c.turns=2; c.money=0;",			  
		  },
		  {
			  content: "Order 200 tons of timber from the coastal region for 1000 Shekels.",
			  behaviour: "radio",
			  cssClass: "option",
			  name: "coast",
			  onscript: "c.wood=50; c.turns=2; c.money=0;",			  
		  },
		  {
			  content: "Send a family member to the coast to trade for timber",
			  behaviour: "radio",
			  cssClass: "option",
			  name: "coasttrade",
			  onscript: "c.wood=50; c.turns=1; c.money=0;",			  
		  },
		  {
			  content: "You will get {c.wood} tons of wood {(c.turns==0)?'immediately':'in '+c.turns+' turns.'}."
		  }
		]
	},
	assignCard: {
		title: "Assign Work",
		context: {
			"name": "",
			"work":"",
			"work_description":""
			
		},
		
		content: [
		   {
			  content: "##New Instructions for {g.family[c.name].name}  \n{g.family[c.name].name} is currently **{g.family[c.name].work_description}**  \n ",			
		   },
		  {
			  content: "Send to work on the farm.",
			  behaviour: "radio",
			  cssClass: "option",
			  name: "farm",
			  onscript: "c.work='farm'; c.work_description='working on the farm'; ",			  
		  },
		  {
			  content: "Send to work with the animals.",
			  behaviour: "radio",
			  cssClass: "option",
			  name: "animals",
			  onscript: "c.work='animals'; c.work_description='looking after the animals'; ",			  
		  },
		  {
			  content: "Send to preach our cause to the town.",
			  behaviour: "radio",
			  cssClass: "option",
			  name: "town",
			  onscript: "c.work='town'; c.work_description='preaching in the town';",			  
		  },
		  {
			  content: "Send to work on building the ark.",
			  behaviour: "radio",
			  cssClass: "option",
			  name: "ark",
			  onscript: "c.work='ark'; c.work_description='building the ark'",			  
		  }
	   ],
	   onaccept: "g.family[c.name].work=c.work; g.family[c.name].work_description=c.work_description; ",
	   validations:[
	     { exp:"!(c.ark||c.town||c.animals||c.farm)", error: "Select the kind of work to assign." }
	   ]
		
	}
		
};
