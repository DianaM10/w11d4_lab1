var ColumnChart = function(container, title, data, seriesName, categories){
  var dataObject = {
    chart: {
      type: 'column',
      renderTo: container
    },

    title: {
      text: title
    },

    series: [{
      name: seriesName,
      data: data
    }],

    xAxis: {
      categories: categories
    }
  };
  var chart = new Highcharts.Chart(dataObject);
}