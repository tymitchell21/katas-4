const gotCitiesCSV = "King's Landing,Braavos,Volantis,Old Valyria,Free Cities,Qarth,Meereen";
const lotrCitiesArray = ["Mordor","Gondor","Rohan","Beleriand","Mirkwood","Dead Marshes","Rhun","Harad"];
const bestThing = "The best thing about a boolean is even if you are wrong you are only off by a bit";

let gotCitiesArray = gotCitiesArray.split(",")
for (let i=0; i < gotCitiesArray.length; i++) {
    display (`${gotCitiesArray[i]} `, 'one', 'span')
}

function display (value, id, element) {
    // creates p element and adds x to it 
    var newElement = document.createElement(element);
    var newText = document.createTextNode(value);
    newElement.appendChild(newText);
    // adds p element to ans div
    var destination = document.getElementById(id);
    destination.appendChild(newElement);
}