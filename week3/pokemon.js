const xhr = new XMLHttpRequest();

xhr.open("GET", "https://api.vschool.io/pokemon", true)
xhr.send()
xhr.onreadystatechange = function () {
if (xhr.readyState === 4 && xhr.status === 200) {
    const jsonData = xhr.responseText
    const info = JSON.parse(jsonData)
    pokeList(info.objects[0])
}
};

function pokeList(arr){
for (let i = 0; i < arr.pokemon.length; i++) {
    const pokeName = document.createElement('h1')
    pokeName.textContent = arr.pokemon[i].name
    document.body.appendChild(pokeName)
    const apiInfo = document.createElement('h3')
    apiInfo.textContent = arr.pokemon[i].resource_uri
    document.body.appendChild(apiInfo)
}
};