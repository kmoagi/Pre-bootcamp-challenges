
     
     // Task Ten
       
     function vowel_count(str)
     {
     var vowel_list = 'aeiouAEIOU';
     var vcount = 0;
  
     for(var x = 0; x < str.length ; x++)
     {
     if (vowel_list.indexOf(str[x]) !== -1)
     {
      vcount += 1;
     }
  
     }
      return vcount;
     }
      console.log(vowel_count("I am trying my best and loving it"));

     
     