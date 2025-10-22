// let username = "nick"
// let message = "You have three new notifications"

// let messageToUser = message + ", " + username + "!"
// console.log(messageToUser)


let welcomeEl = document.getElementById("welcome-el")

let username = "Nick"
let greeting = "Welcome Back"

welcomeEl.innerText = greeting+ " " + username

// welcomeEl.innerText = welcomeEl.innerText +" " + "👋"

welcomeEl.innerText += " "+ "👋"