window.onload = function(){
  var url = 'https://restcountries.eu/rest/v1/all';
  makeRequest(url, requestComplete);

  // new PieChart();
}

var makeRequest = function(url, callback){
    var request = new XMLHttpRequest();
    request.open("GET", url);
    request.onload = callback;
    request.send();
  }

function requestComplete() {
  if(this.status !== 200) return; 
  var jsonString = this.responseText;
  var countries = JSON.parse(jsonString);

  var names = countryNames(countries);
  var populations = countryPopulations(countries);
  var pieArray = [];
  for(country of countries) {
    pieArray.push({ name: country.name, y: country.population})
  }

  var container = document.getElementById('column-chart');
  var containerPie = document.getElementById('pie-chart');
  new ColumnChart(container, "Population by Country", populations, "Population", names);
  new PieChart(containerPie, "Population by Country", "Population", pieArray);
}

var countryNames = function(countries) {
  var nameArray = [];
  for ( var country of countries ){
    if (country.population > 50000000) {
    nameArray.push(country.name);
    }
  }
  return nameArray;
}

var countryPopulations = function(countries) {
  var populationArray = [];
  for ( var country of countries ){
    if (country.population > 50000000) {
    populationArray.push(country.population);
    }
  }
  return populationArray;
}