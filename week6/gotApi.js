
const getData = async () => {
    let response;

    try{
        response = await axios.get("https://anapioficeandfire.com/api/characters/1303")
    
        const name = response.data.name
        const books = await axios.get(response.data.books)
        const titles = response.data.titles
        const aliases = response.data.aliases
        const allegiances = await axios.get(response.data.allegiances)
        
        displayToDom(name, books, titles, aliases, allegiances)

    }
    catch(error){
    console.log(error)
    }
}
//--------------------------------------------------------------------------------
const boxDiv = document.getElementById("boxDiv")

function displayToDom(name, books, titles, aliases, allegiances){
    console.log( name, books, titles, aliases,  allegiances)

   
    const dany = document.createElement('h2')
    dany.textContent = name
    boxDiv.append(dany)

    const h3 = document.createElement("h3")
    h3.textContent = allegiances.data.name
    boxDiv.append(h3)

    const h2 = document.createElement('h4')
    h2.textContent = "Book: " + books.data.name
    boxDiv.append(h2)
    
   const h4 = document.createElement('ul')
   h4.textContent = "Titles: " + titles
   boxDiv.append(h4)

   const h5 = document.createElement('ol')
   h5.textContent = "Aliases: " + aliases
   boxDiv.append(h5)

   

}
getData()

//----------------PROMISE CHAIN----------------------------------------------------------------
async function getAll(){
    const allThree = await axios.get("https://anapioficeandfire.com/api/")
    const pendingBooksPromises = []
    const pendingCharacterPromises = []
    const pendingHousesPromises = []

    for( let i = 0; i < allThree.length; i++){
        
    }
    
    console.log(allThree.data)
   
    Promise.all(pendingBooksPromises, pendingCharacterPromises, pendingHousesPromises)
    
    .then(res => boxDiv2.append(res))
    .catch(err => console.log(err))
}



getAll()

//----------------CHARACTER BUTTON----------------------------------------------------------------

const button = document.getElementById("button");
button.addEventListener("click", function() {
    axios.get("https://anapioficeandfire.com/api/characters")
    .then(response => {
        console.log(response)
        for (let i = 0; i < response.data.length; i++) {
        const names = document.createElement("p");
        names.textContent = "alias: " + response.data[i].aliases;
        boxDiv2.appendChild(names);
        }
    })
    .catch(error => console.log(error))
});
//----------------BOOKS BUTTON----------------------------------------------------------------
const button2 = document.getElementById("button2");

button2.addEventListener("click", function() {
    axios.get("https://anapioficeandfire.com/api/books")
    .then(response => {
        console.log(response)
        for (let i = 0; i < response.data.length; i++) {
        const names = document.createElement("p");
        names.textContent = "Book Title: " + response.data[i].name + "Book Author: " + response.data[i].authors;
        boxDiv2.appendChild(names);
        }
    })
    .catch(error => console.log(error))
});
//----------------HOUSES BUTTON----------------------------------------------------------------
const button3 = document.getElementById("button3");
button3.addEventListener("click", function() {
    axios.get("https://anapioficeandfire.com/api/houses")
    .then(response => {
        console.log(response)
        for (let i = 0; i < response.data.length; i++) {
        const names = document.createElement("p");
        names.textContent = "House Name: " + response.data[i].name + "Region: " + " " + response.data[i].region
        boxDiv2.appendChild(names);
        }
    })
    .catch(error => console.log(error))
});


//---------------BOOKS--------------------------------------
// .then(bookRes => {
//     const booksUrl = bookRes.data.books
//     console.log(booksUrl)
//     return axios.get(booksUrl)
//  })
//  .then(bookRes => console.log(bookRes.data[1]))


// ---------------CHARACTERS---------------------------------------
// axios.get("https://anapioficeandfire.com/api/")
// .then(characterRes => {
//     const charactersUrl = characterRes.data.characters
//     console.log(charactersUrl)
//     return axios.get(charactersUrl)
// })
// .then(characterRes => console.log(characterRes.data))


 //----------------HOUSES--------------------------------------
// axios.get("https://anapioficeandfire.com/api/")
// .then(houseRes => {
//     const housesUrl = houseRes.data.houses
//     console.log(housesUrl)
//     return axios.get(housesUrl)
// })
// .then(houseRes => console.log(houseRes.data[1]))

//---------------ERROR---------------------------------------
// .catch(err => console.log(err))

