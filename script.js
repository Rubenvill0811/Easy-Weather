const weatherApp = {
    initialize: function() {
        console.log('initialize');
        this.getWeatherData(this.numberOfDaysToShow);
    },

    getWeatherData: function (){
        console.log();
        const data = fetch("http://api.weatherapi.com/v1/forecast.json?key=1307cbf4acfb47bca2964553240903&q=Beaverton&days=5&aqi=no&alerts=no", {
            method: 'GET',
          })
            .then(function (response) {
              return response.json();
            })
            .then(function (data) {
              // console.log(data.forecast);
              window.weatherApp.renderWeatherData(data);
              
            });
                   
          },
        
    renderWeatherData: function (data) {
      let output = '';
      
      // console.log(data.forecast.forecastday);
      const items = data.forecast.forecastday.map(function(item) {
        const output = '<div class="card">' + item.date + '<div/>';
        console.log(output);
        return output;
      });

      // console.log(output);
    },

    onSearch: function() {
        console.log();
        this.getWeatherData();
    },

    numberOfDaysToShow: 5
  }

  window.weatherApp = weatherApp;

  
  weatherApp.initialize();

  // async function logMovies() {
  //   const response = await fetch("http://example.com/movies.json");
  //   const movies = await response.json();
  //   console.log(movies);
  // }

  