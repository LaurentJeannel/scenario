exports.action = (data)=>{
						  //Scenario
        var Scenario=data.Scenario ; console.log(Scenario+" phrase recu du data")
		
 Scenario=Scenario.split('|') ; console.log(Scenario+ " phrase split")
  
  var TempScenario=-1000*1
  
  
  for(var compteurscenario=0;compteurscenario<Scenario.length;compteurscenario++){
	  
	  TempScenario=TempScenario+(1000*1)
	  
	  console.log(compteurscenario+" "+TempScenario)

	  ActionScenario(compteurscenario,TempScenario)
	  compteurscenario=compteurscenario+1
	}//fin for compteur

	function ActionScenario(compteurscenario,TempScenario){

		setTimeout(()=>{
//JarvisIARun(['bruitages','data.phrasebruitage="immite le chien"'])
	JarvisIaCall(Scenario[compteurscenario] , Scenario[compteurscenario+1])	
		;   }, TempScenario);//fin settimeout
		return 
    }
	
	           return 
}