function createGame(init)
{
   var game={ 
      source: init,
	  cardQ: { },
   }
   //create a game state
   game.state=createShadowStore(init.state);
   //build up the queues from the init
   var ql=Object.keys(init.cardQ);
   for (var i=0;i<ql.length;i+=1) {
	   var q=init.cardQ[ql[i]];
	   var newQ=[];
	   for (var j=0;j<q.length;j+=1) {
		   var c=createCardInstance(game,q[j]);
		   newQ.push(c);
	   }
	   game.cardQ[ql[i]]=newQ;	   
   }
   //add some utility functions for scripts to the game state
   game.state.queueLength=function(name) {
	   var count=0;
	   for (var i=0;i<game.cardQ[name].length;i+=1)
		   if (game.cardQ[name][i].display(game.state)) count+=1;
	   return count;
   }
   
   game.state.queueLengthUrgent=function(name) {
	   var count=0;
	   for (var i=0;i<game.cardQ[name].length;i+=1)
		 if (game.cardQ[name][i].display(game.state))
		   if (game.cardQ[name][i].urgent(game.state)) count+=1;
	   return count;
   }
   
   return game;
}