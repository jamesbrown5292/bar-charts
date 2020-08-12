let optionsObject = {};
let dataArray = [12, 34, 56, 23, 67, 34, 56];
let graphContainers = 0;

//Check the document is ready - has no use - more of a jQuery demo for personal exp 
$(document).ready(function() {
  console.log("Document ready")
});

//Make a containing div for the graph and append it to the page
//has the dispay grid property and grid template set
let makeGraphContainer = function(){
  if (graphContainers < 1) { //only one per page
    let graphContainer = $('<div id="graphContainer" class="graphContainer"></div>');
  $('body').prepend(graphContainer);
  graphContainers = 1;
  } 
};

let 
