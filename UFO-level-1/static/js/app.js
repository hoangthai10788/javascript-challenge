// from data.js
var tableData = data;

// YOUR CODE HERE!
// Append table to the webpage and add new rows of data for each UFO sighting

function table(data) {
    var tbody = d3.select("tbody");
    tbody.html("");

    data.forEach((datarow) => {
        var t_r = tbody.append("tr");
        Object.entries(datarow).forEach(([key,value]) => {
            var t_d = t_r.append("td");
            t_d.text(value);
        });
    }); 
}


// Filter the data based on the date of interest

var button = d3.select("#filter-btn");

button.on("click", function() {
    
    var inputElement = d3.select("#datetime") ;

    var inputValue = inputElement.property("value");

    var filteredData = tableData;

    var filteredData = filteredData.filter(datetime => datetime.datetime === inputValue);

    console.log(filteredData);

    table(filteredData);
});

table(tableData);

