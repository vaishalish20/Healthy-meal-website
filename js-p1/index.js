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
let countEl = document.getElementById("count-el")

function increment() {
    console.log("The button was clicked!")

    // count = count + 1
    count += 1
    // countEl.innerText = count
    countEl.textContent = count
}

let saveEle = document.getElementById("save-el")

function save() {
    console.log(count)
    let countStr = count + " - "
    // saveEle.innerText += countStr
    saveEle.textContent += countStr
    count = 0
    countEl.textContent = count
}

save()