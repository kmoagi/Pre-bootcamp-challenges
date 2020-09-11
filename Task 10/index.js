
     
     // Task Ten
       
    
      function vowelCheck(string){

        
      var vowels = "aeiouAEIOU";
      var string = "Hello Umuzi";
      var arr = "";
      
      
      for (i = 0; i < string.length; i++) {
        if(vowels.indexOf(string[i]) >= 0) arr += string[i];
      }
      console.log(arr);

      }


      vowelCheck();
     
     
