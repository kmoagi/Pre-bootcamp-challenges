

      // Task seven


      function celsiusToFahrenheit(celsius) 
      {
        var celTemp = celsius;
        var celToFahr = celTemp * 9 / 5 + 32;
        var message = celTemp  + celToFahr  ;
          return message;
      }
      
      function fahrenheitToCelsius(fahrenheit) 
      {
        var fahrTemp = fahrenheit;
        var fahrToCel = (fahrTemp - 32) * 5 / 9;
        var message = fahrTemp + fahrToCel ;
          return message;
      } 
      celsiusToFahrenheit(5);
      fahrenheitToCelsius(10);
      
