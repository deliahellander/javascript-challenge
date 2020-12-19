// set var = data array from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the data from data.js
console.log(data);

// loopiing through data array and appending rows to javascript table
data.forEach(function(UFOSighting) {
    console.log(UFOSighting);
    var row = tbody.append("tr");
    Object.entries(UFOSighting).forEach(function([key, value]){
        row.append("td").text(value);
        console.log(key, value);
    });
});
// Select the button from html code
var button = d3.select("#filter-btn");

// create button function to filter on datetime entr 
button.on("click", function() {
    // clear current data to display filtered data        
    tbody.html("");
    d3.event.preventDefault();
    var inputField = d3.select("#datetime");
    var inputElement = inputField.property("value");
    //console.log(inputElement);
    // filter on the inputed date
    var filteredData = data.filter(sighting => sighting.datetime === inputElement);   
    console.log(filteredData)

    
    // Distplay filtered table
    filteredData.forEach((selection) => {
        var row = tbody.append("tr");
        Object.entries(selection).forEach(([key,value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });      
});