const button1 = document.getElementById("button");
button1.addEventListener("click", function() {
    axios.get("http://hp-api.herokuapp.com/api/characters/staff")
    .then(response => {
        console.log(response)
        for (let i = 0; i < response.data.length; i++) {
        const names = document.createElement("h1");
        names.textContent = response.data[i].name;
        document.body.append(names);
        }
    })
    .catch(error => console.log(error))
});

