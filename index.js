submit.addEventListener("click", (e) => {
    e.preventDefault()
    itemc = items.value
    descc = desc.value
    localStorage.setItem("todo", JSON.stringify([itemc, descc]))
    console.log(e)
    todo.innerHTML = `
    <h1>${itemc}</h1>
    <p1>${descc}</p1>
    `
})

deletebtn.addEventListener("click", (e) => {
    localStorage.removeItem("todo")
    todo.innerHTML = ""
})
