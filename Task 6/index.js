


// Task Six


function maxNum(arr){
    var max = arr[0];
    for(var i=1; i<arr.length; i++){
      if(arr[i] > max){
        max = arr[i];   
      }
     }
   return max;
   }
   
   maxNum([4,12,3]);








      ///////////////bonus/////////////////
      


function randomNum(arr){
    var random = arr[0];
    for(var i=1; i<arr.length; i++){
      if(arr[i] > random){
        random = arr[i];   
      }
     }
   return random;
   }
   
   randomNum([4,12,3]);
