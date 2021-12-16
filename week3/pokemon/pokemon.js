// The following exercise should be completed in vanilla JavaScript. 
// Use https://pokeapi.co/api/v2/ (Links to an external site.) as your url for your XHR request to get the big list of Pokemon. Please follow this link (Links to an external site.) for the full API documentation. It will be easiest to do this in steps:

// Step 1 - get the data

// Write a function that gets the JSON and parses the JSON to create an array of objects that look like this:

// {
//     name: 'Charmander',
//     resource_uri: 'api/v1/pokemon/8/'
// },
// {(Another pokemon object)},
// {(Another pokemon object)},
// {(Another pokemon object)},
// ...
// etc.
// You can see this using the console or the sources tab in the Chrome Developer Tools.

// Step 2 - display the data
// Make each Pokemon's name show up on a separate line in an HTML document. You will be using a for loop to iterate through each Pokemon object, and some DOM manipulation to add nodes for each Pokemon.
// Extra Credit
// Display details about each Pokemon.
// Hints
// You'll need to manually create an XML HTTP Request and handle the readyState with onReadyStateChange.
// You'll need to use the built-in JavaScript JSON object to change the JSON into a useable JavaScript object. Check out the W3Schools JSON Howto for more information and examples.
// The data that comes from the url endpoint above is complex. You will have to think how to access nested properties from complex structures. A concept and skill that is incredibly common and valuable as a modern web developer. Head to google if you get stuck.
// You'll need to use pure JavaScript to create and add an element to your HTML (Links to an external site.).

const xhr = new XMLHttpRequest();

xhr.open("GET", "https://api.vschool.io/pokemon", true)
xhr.send()
xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
        const jsonData = xhr.responseText
            //(property) XMLHttpRequest.responseText: string
            // Returns response as text.
            // Throws an "InvalidStateError" DOMException if responseType is not the empty string or "text".
        const info = JSON.parse(jsonData)
        pokeList(info.objects[0]) //function pokeList(arr: any): void
    }
};

function pokeList(arr) {
    for (let i = 0; i < arr.pokemon.length; i++) {
        const pokeName = document.createElement('h1')
        pokeName.textContent = arr.pokemon[i].name
        document.body.appendChild(pokeName)
        const apiInfo = document.createElement('h3')
        apiInfo.textContent = arr.pokemon[i].resource_uri
        document.body.appendChild(apiInfo)
    }
};