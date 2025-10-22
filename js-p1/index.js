// let myage = 27
// let humanDogRatio = 7  

// let myDogAge = myage * humanDogRatio
// console.log(myDogAge)

// let bounusPoints = 50

// bounusPoints = bounusPoints - 25
// console.log(bounusPoints)

// bounusPoints = bounusPoints + 70
// console.log(bounusPoints)

let count = 0

function increment() {
    console.log("The button was clicked!")

    count = count + 1
    document.getElementById("count-el").innerText = count
}