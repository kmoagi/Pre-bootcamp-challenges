


var Numbers = [1, 2, 3, 4, 5];
var l = Numbers.length;
var max = -Infinity;
var i;
for (i = 0; l > i; i++) {

    if (Numbers[i] > max) {

        max = Numbers[i];

    }

}

console.log(max);

      ///////////////bonus/////////////////
      
      function random_item(items)
{
  
return items[Math.floor(Math.random()*items.length)];
     
}

var items = [1, 2, 3, 4];
console.log(random_item(items))
