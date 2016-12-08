var PieChart = function(container, text, seriesName, seriesData){
  var container = document.getElementById('pie-chart');
  var chart = new Highcharts.Chart({ // Chart constructor takes object as argument

    chart: {
      type: 'pie',
      renderTo: container //DOM element to render itself to
    },

    title: {
      text: text
    },

    series: [{
      name: seriesName,
      data: seriesData
    }]
  });
}