
     
      // Task Eleven 
      

     function char_count(str1, letter) 
      {
     var letter_Count = 0;
     for (var position = 0; position < str1.length; position++) 
      {
     if (str1.charAt(position) == letter) 
      {
     letter_Count += 1;
      }
      }
     return letter_Count;
      }

     console.log(char_count('kabelomg@gmail.com', 'g'));


     

