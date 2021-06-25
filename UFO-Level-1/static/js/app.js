// from data.js
var tableData = data;
var tbody = d3.select("tbody");

data.forEach(sighting =>{
    var row = tbody.append("tr");
    Object.entries(sighting).forEach(([key,value]) => {row.append("td").text(value);
    });
});


var button = d3.select("#filter-btn");

button.on("click", ev => {
    d3.event.preventDefault();
    tbody.html("");

    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");
    var filteredData = tableData.filter(tableData => tableData.datetime === inputValue);
    
    filteredData.forEach(matching =>{
        var row = tbody.append("tr");
        Object.entries(matching).forEach(([key,value]) => {tbody.append("td").text(value);
        });
    });
});