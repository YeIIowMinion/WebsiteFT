let hMenu = document.querySelector(".header__menu")
let hMenuBlack = document.querySelector(".header__menu-black")
let bDisplay = document.querySelector(".blackDisplay")
let boxUser = document.querySelector(".boxUser")
let hpBtnHome = document.querySelector(".home")
let hpBtnRules = document.querySelector(".rules")
let bG2 = document.querySelector(".background__2")

hMenu.addEventListener("click", function(){
    bDisplay.classList.add("show")
    bDisplay.classList.remove("hide")
})
hMenuBlack.addEventListener("click", function(){
    bDisplay.classList.add("hide")
    bDisplay.classList.remove("show")
})

fetch("https://random-data-api.com/api/v2/users?size=100")
.then(Response => {
    if(!Response.ok){
        console.log("ERROR")
    }
    return Response.json()
})
.then(value => {
    value.forEach(element => {
        let elem = document.createElement("li")
        console.log(element)
        elem.innerHTML = ` <img src="${element.avatar}" alt="User Image"> <p><strong>${element.first_name} ${element.last_name}</strong></p> <p>${element.email}</p> `
        boxUser.appendChild(elem)
    });
})
.catch(error => {
    console.log(error)
})
