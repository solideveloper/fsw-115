axios.get("https://api.vschool.io/soli/todo")
.then(response => {
    for (let i = 0; i < response.data.length; i++) {
    const tasks = document.getElementsByClassName("list")[i]
    tasks.textContent = response.data[i].title
    if (response.data[i].completed === true) {
        tasks.style.textDecorationLine = "line-through" 
    }
    document.body.appendChild
    }
})
.catch(error => console.log(error))