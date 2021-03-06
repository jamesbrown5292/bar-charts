let optionsObject = {};
let dataArray = [12, 34, 56, 23, 67, 34, 56];
let graphTitle = "Demo Graph"

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

//Make the y axis
let makeYAxis = function(){
  let yAxisContainer = $('<div id="yAxisContainer" class="yAxisContainer"></div>');
  let yAxis = $('<div id="yAxis" class="yAxis"></div>')
  $('#graphContainer').append(yAxisContainer);
  yAxisContainer.append(yAxis);

}
//add line markers to y-axis
let addMarkers = function(){
  let markHeight = 0;
  let scaleMarkerContainer = $('<div class="scaleMarkerContainer"></div>');
  $('#yAxisContainer').append(scaleMarkerContainer);
  for(let i=0; i < 5; i++){
    let scaleMarker = scaleMarkerContainer.append($(`<div class="scaleMarker" id="scaleMarker${i}"></div>`))
    document.getElementById(`scaleMarker${i}`).style.top = `${markHeight}px`;
    markHeight += 60;
  };
};

//make the x axis
let makeXAxis = function(){
  let xAxisContainer = $('<div id="xAxisContainer" class="xAxisContainer"></div>');
  let xAxis = $('<div class="xAxis"></div>');
  $('#graphContainer').append(xAxisContainer);
  xAxisContainer.append(xAxis);
};

//add a title to the graph
let addTitle = function(){
  let titleContainer = $('<div id="titleContainer" class="titleContainer"></div>');
  $('#graphContainer').append(titleContainer);
  titleContainer.append($(`<h2 id="graphTitle">${graphTitle}</h2>`))
}
