var links = ["bar1.html", "update1.html"];
var ul = d3.select("body").append("ul");

ul.selectAll("li")
  .data(links)
  .enter()
  .append("li")
  .append("a")
  .text(function(d) {return d;})
  .attr("href", function(d) {return d;});
