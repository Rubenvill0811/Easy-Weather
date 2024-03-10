const weatherApp = {
  initialize: function() {
      console.log('initialize');
      this.getWeatherData();
  },
  
  getWeatherData: function() {
      $.ajax({
          url: "http://api.weatherapi.com/v1/forecast.json?key=1307cbf4acfb47bca2964553240903&q=Beaverton&days=5&aqi=no&alerts=no",
          method: 'GET',
          success: function(data) {
              window.weatherApp.renderWeatherData(data);
              console.log(data);
          }
      });
  },
  
  renderWeatherData: function(data) {
      const forecastDays = data.forecast.forecastday;
      const container = $('#weather-container');
      
      forecastDays.forEach(function(day) {
          const card = $('<div>').addClass('col').html(`<p>Date: ${day.date}</p><p>Temp: ${day.day.maxtemp_f}°F`);
          
          container.append(card); // Append the card to the weather-container row
      });
  },
  setupSearchForm: function() {
    const form = $('#search-form');
    
    form.on('submit', function(event) {
        event.preventDefault();
        const city = $('#city-input').val();
        weatherApp.getWeatherData(city);
    });
}
};

window.weatherApp = weatherApp;
weatherApp.initialize();
