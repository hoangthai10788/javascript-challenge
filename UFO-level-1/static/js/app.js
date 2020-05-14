// from data.js
var tableData = data;

// YOUR CODE HERE!
// Append table to the webpage and add new rows of data for each UFO sighting

var tbody = d3.select("tbody");
tableData.forEach((data) => {
    var row = tbody.append("tr");
    Object.entries(data).forEach(([key,value]) => {
        var data = row.append("td");
        data.text(value);
    });
});


// Filter the data based on the date of interest

var button = d3.select("#filter-btn");

button.on("click", function() {
    
    var inputElement = d3.select("#datetime") ;

    var inputValue = inputElement.property("value");

    console.log(inputValue);

    console.log(tableData);

    var filteredData = tableData.filter(datetime => datetime.datetime === inputValue);

    console.log(filteredData);

    var tbody = d3.select("tbody");

    filteredData.forEach((record) => {
        
        var row = tbody.append("tr");

        Object.entries(record).forEach(([key, value]) => {
            var row_data = row.append("td");
            row_data.text(value);
        });
    });
});



