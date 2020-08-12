let optionsObject = {};
let dataArray = [12, 34, 56, 23, 67, 34, 56];

//Check the document is ready - has no use - more of a jQuery demo for personal exp 
$(document).ready(function() {
  console.log("Document ready")
});

//Make a containing div for the graph and append it to the page
//has the dispay grid property and grid template set
let makeGraphContainer = function(){
    let graphContainer = $('<div id="graphContainer" class="graphContainer"></div>');
    $('body').append(graphContainer);
};

let makeYAxis = function(){
    let yAxisContainer = $('<div id="yAxisContainer" class="yAxis"></div>');
    $('#graphContainer').append(yAxisContainer);
}

let makeXAxis = function(){
  let xAxisContainer = $('<div id="xAxisContainer" class="xAxis"></div>');
  $('#graphContainer').append(xAxisContainer);
}