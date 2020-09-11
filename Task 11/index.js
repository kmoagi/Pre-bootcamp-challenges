
     
      // Task Eleven 
      

     function commonCharactors(str1,str2){

      var str1 = "kabelo";
      var str2 = "karabo";    

      var one = str1.replace(/ /g, "");
      var two = str2.replace(/ /g, "");

     var result = [];

      for (var i = 0; i < one.length; i++  ){

           if(two.indexOf(one[i]) !== -1 && result.indexOf(one[i]) === -1){


            result.push(one[i]);
           }

      }
      console.log(result);
     
     }


 commonCharactors();


     

