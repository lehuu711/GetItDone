// //helper functions
function values(o) { return Object.keys(o).map(function(k){return o[k]}) }
// function get_previous_date(date){
//     date = date - 1000*60*60*24;
//     return date;
// }
function convert_to_label(d){
  var ls = d.split('/');
  if (ls[1] == 1) {
    return ls[0] + "/" + ls[1];
  }else{
    return ls[1];
  }
}

var test_data = {
  "Youtube":{
      "4/10/16": 100,
      "4/11/16": 90,
      "4/12/16": 80,
      "4/13/16": 55,
      "4/14/16": 15
    },
    "Facebook":{
        "4/10/16": 100,
        "4/11/16": 90,
        "4/12/16": 80,
        "4/13/16": 55,
        "4/14/16": 15
      }
  }

function website_over_month(data, elementID){
  var ctx = document.getElementById(elementID).getContext("2d");
  var X = Object.keys(data);
  for (var i in X){
    X[i] = convert_to_label(X[i]);
  }
  var Y = values(data);
  var data = {
      labels: X,
      datasets: [
          {
              label: "My First dataset",
              fillColor: "rgba(151,187,205,0.2)",
              strokeColor: "rgba(151,187,205,1)",
              highlightFill: "rgba(220,220,220,0.75)",
              highlightStroke: "rgba(220,220,220,1)",
              data: Y
          }
      ]
  };
  options={};
  var myLineChart = new Chart(ctx).Line(data, options);
}

function create_canvas(website){
  var str = '<div class="chart-div col-md-5"><h1>'+website+'</h1><canvas class="time-chart" id="'+website+'" width="400" height="400"></canvas></div>';
  return str;
}
var websites = Object.keys(test_data)
for(var i in websites){
  var website = websites[i];
  $('#charts').append(create_canvas(website));
}

var charts = $('.time-chart');
for (var i in charts){
  var chart = charts[i];
  website_over_month(test_data[chart.id], chart.id);
}
