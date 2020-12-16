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
// Getting a reference to the button on the page
var button = d3.select("filter-btn");

// Getting a reference to the input element on the page 
var inputField = d3.select("datetime");

function handleClick() {
    // We can use d3 to see the object that dispatched the event
    console.log(d3.event.target);
    d3.event.preventDefault();
    console.log(inputField.property("value"));
    var filtered_table = tableData.filter(UFOSighting => UFOSighting.datetime===inputField.property("value"))
    displayData(filtered_table)

};
button.on("click", handleClick)

// Input fields can trigger a change event when new text is entered.
inputField.on("change", handleClick)
  