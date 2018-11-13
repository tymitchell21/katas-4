const gotCitiesCSV = "King's Landing,Braavos,Volantis,Old Valyria,Free Cities,Qarth,Meereen";
const lotrCitiesArray = ["Mordor","Gondor","Rohan","Beleriand","Mirkwood","Dead Marshes","Rhun","Harad"];
const bestThing = "The best thing about a boolean is even if you are wrong you are only off by a bit";

// Displays an array from the cities in gotCitiesCSV
display (JSON.stringify(gotCitiesCSV.split(',')), 'one', 'span')
// Displays an array of words from the sentence in bestThing
display (JSON.stringify(bestThing.split(' ')), 'two', 'span')
// Displays a string separated by semi-colons instead of commas from gotCitiesCSV
display (gotCitiesCSV.split(',').join('; '), 'three', 'span')
// Displays a CSV string from the lotrCitiesArray
display (lotrCitiesArray.join(', '), 'four', 'span')
// Displays the first 5 cities in lotrCitiesArray
display (JSON.stringify(lotrCitiesArray.slice(0,5)), 'five', 'span')
// Displays the last 5 cities in lotrCitiesArray
display (JSON.stringify(lotrCitiesArray.slice(lotrCitiesArray.length-5)), 'six', 'span')
// Displays the 3rd to 5th city in lotrCitiesArray
display (`${JSON.stringify(lotrCitiesArray.slice(2,3))}, ${JSON.stringify(lotrCitiesArray.slice(4,5))}`, 'seven', 'span')
// Using Array.prototype.splice(), remove "Rohan" from lotrCitiesArray
lotrCitiesArray.splice(2,1)
display (JSON.stringify(lotrCitiesArray), 'eight', 'span')
// Removes all cities after "Dead Marshes" in lotrCitiesArray and displays lotrCitiesArray
lotrCitiesArray.splice(5)
display (JSON.stringify(lotrCitiesArray), 'nine', 'span')
// Adds "Rohan" back into lotrCitiesArray after "Gondor" and displays lotrCitiesArray
lotrCitiesArray.splice(2,0,"Rohan")
display (JSON.stringify(lotrCitiesArray), 'ten', 'span')
// Renames "Dead Marshes" to "Deadest Marshes" and displays lotrCitiesArray
lotrCitiesArray.splice(5,1,"Deadest Marshes")
display (JSON.stringify(lotrCitiesArray), 'eleven', 'span')
// Displays first 14 characters from bestThing
display (bestThing.slice(0,14), 'twelve', 'span')
// Diisplays the first 12 characters from bestThing
display (bestThing.slice(0,12), 'thirteen', 'span')
// Display the characters between the 23rd and 38th position of bestThing
display (bestThing.slice(22,38), 'fourteen', 'span')
// Displays 23rd through 38th characters using substring()
display (bestThing.substring(22,38), 'fifteen', 'span')
// repeat last kata using substr
display (bestThing.substr(23, 15), 'sixteen', 'span')
// finds and displays the index of "only" in bestThing
display (bestThing.indexOf("only"), 'seventeen', 'span')
// finds and displays the index of the last word in bestThing
display (bestThing.lastIndexOf(" ")+1, 'eighteen', 'span')
// finds and displays all cities from gotCitiesCSV that use double vowels ("aa", "ee", etc)
const doubleVowelCities = []
gotCitiesCSV.split(",").forEach (x => {
    if (x.indexOf('aa') > -1 || x.indexOf('ee') > -1 || x.indexOf('ii') > -1 || x.indexOf('oo') > -1 || x.indexOf('uu') > -1) {
        doubleVowelCities.push(x)
    }
})
display (JSON.stringify(doubleVowelCities), 'nineteen', 'span')
// finds and displays all cities from lotrCitiesArray that ends with "or"
const citiesEndOR = []
lotrCitiesArray.forEach (x => {
    if (x.lastIndexOf('or')===x.length-2) {
        citiesEndOR.push(x)
    }
})
display (JSON.stringify(citiesEndOR), 'twenty', 'span')
// finds and displays all the words in bestThing that starts with a "b"
bestThing.split(" ").forEach (x => {
    if (x[0].toLowerCase() == 'b') {
        display (`${x}, `, 'twenty-one', 'span')
    }
})
// displays "yes" or "no" if lotrCitiesArray includes "Mirkwood"
if (lotrCitiesArray.indexOf("Mirkwood") != -1) display('Yes', 'twenty-two', 'span')
else display('No', 'twenty-two', 'span')
// displays "yes" or "no" if lotrCitiesArray includes "Hollywood"
if (lotrCitiesArray.indexOf("Hollywood") != -1) display('Yes', 'twenty-three', 'span')
else display('No', 'twenty-three', 'span')
// displays the indexOf "Mirkwood" in lotrCitiesArray
display(lotrCitiesArray.indexOf('Mirkwood'),'twenty-four','span')
// fins and displays the first city in lotrCitiesArray that has more than one word
lotrCitiesArray.forEach (x => {
    if (x.indexOf(" ") > -1) {
        display(x, 'twenty-five', 'span')
    }
})
// Reverse the order in lotrCitiesArray
display(JSON.stringify(lotrCitiesArray.reverse()),'twenty-six','span')
// sorts lotrCitiesArray alphabetically
display(JSON.stringify(lotrCitiesArray.sort()), 'twenty-seven', 'span')
// sorts lotrCitiesArray by number of characters in city names
display(JSON.stringify(lotrCitiesArray.sort(function(a, b) {return a.length-b.length})), 'twenty-eight', 'span')
// using array.prototype.pop(), removes the last city from lotrCitiesArray
lotrCitiesArray.pop()
display(JSON.stringify(lotrCitiesArray), 'twenty-nine', 'span')
// adds back the city that was removed
lotrCitiesArray.push("Deadest Marshes")
display(JSON.stringify(lotrCitiesArray), 'thirty', 'span')
// removes the first city from lotrCitiesArray
lotrCitiesArray.shift()
display(JSON.stringify(lotrCitiesArray), 'thirty-one', 'span')
// adds back the city that was removed
lotrCitiesArray.unshift("Rohan")
display(JSON.stringify(lotrCitiesArray), 'thirty-two', 'span')

function display (value, id, element) {
    // creates p element and adds x to it 
    var newElement = document.createElement(element);
    var newText = document.createTextNode(value);
    newElement.appendChild(newText);
    // adds p element to ans div
    var destination = document.getElementById(id);
    destination.appendChild(newElement);
}