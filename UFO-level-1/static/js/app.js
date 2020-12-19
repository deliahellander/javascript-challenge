// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the UFO Sighting data from data.js
console.log(data);

// loop through data array and append rows to javascript table
data.forEach(function(UFOSighting) {
    console.log(UFOSighting);
    var row = tbody.append("tr");
    Object.entries(UFOSighting).forEach(function([key, value]){
        row.append("td").text(value);
        console.log(key, value);
    });
});
// Select the button
var button = d3.select("#filter-btn");

// implementing button fuction to 
button.on("click", function() {
    // clears the data of the current table        
    tbody.html("");
    d3.event.preventDefault();
    var inputField = d3.select("#datetime");
    var inputElement = inputField.property("value");
    //console.log(inputElement);
    // filter on selected date
    var filteredData = data.filter(sighting => sighting.datetime === inputElement);   
    console.log(filteredData)

    
    // Distplay filtered tbale
    filteredData.forEach((selection) => {
        var row = tbody.append("tr");
        Object.entries(selection).forEach(([key,value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });      
});