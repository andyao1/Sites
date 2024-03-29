var w = 500;
var h = 100;
var barPadding = 1;
var dataset = [ 5, 10, 13, 19, 21, 25, 22, 18, 15, 13,
  11, 12, 15, 20, 18, 17, 16, 18, 23, 25
];

// Create SVG element
var svg = d3.select("body")
.append("svg")
.attr("width", w)
.attr("height", h);

svg.selectAll("rect")
.data(dataset)
.enter()
.append("rect")
.attr("x", 0)
.attr("y", 0)
.attr("width", 20)
.attr("height", 100)
.attr("x", function(d, i) {
  return i * (w / dataset.length);  //Bar width of 20 plus 1 for padding
})
.attr("y", function(d) {
  return h - d * 4;  //Height minus data value
})
.attr("height", function(d) {
  return d * 4;  // <-- Times four!
})
.attr("width", w / dataset.length - barPadding)
.attr("fill", function(d) {
  return "rgb(0, 0, " + (d * 10) + ")";
});

svg.selectAll("text")
.data(dataset)
.enter()
.append("text")
.text(function(d) {
  return d;
})
.attr("x", function(d, i) {
  return i * (w / dataset.length) + (w / dataset.length - barPadding) / 2;
})
.attr("y", function(d) {
  return h - (d * 4) + 14;  //15 is now 14
})
.attr("font-family", "sans-serif")
.attr("font-size", "11px")
.attr("fill", "white")
.attr("text-anchor", "middle");

