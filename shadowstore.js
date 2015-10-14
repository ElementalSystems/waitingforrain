function createShadowProperty(target,propname,textid,store,defaultval)
{
  Object.defineProperty(target,propname,{
	    get: function() {
		   if (store.hasOwnProperty(textid)) return store[textid];
		   return defaultval;
		},
		set: function(v) {
		   store[textid]=v;
		}
	  });
}

function buildShadow(nameprefix,source,target,store)
{
  var keys=Object.keys(source);
  for (var i=0;i<keys.length;i+=1) {
    var ob=source[keys[i]];
	if (typeof ob === 'object') {
	  target[keys[i]]={};
	  buildShadow(nameprefix+keys[i]+"_",ob,target[keys[i]],store);
	} else {
	  createShadowProperty(target,keys[i],nameprefix+keys[i],store,ob)	  
	}	
  }
}

function createShadowStore(underlying)
{
  var st={store: {}};
  buildShadow("",underlying,st,st.store);  
  return st;
}