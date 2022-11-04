// // document.getElementById("count-el").innerText = 5

// //let firstBatch = 5
// // let secondBatch = 7

// // let count = firstBatch + secondBatch

// // console.log(count)

// // let bonusPoints = 50
// // console.log(bonusPoints)

// // bonusPoints = bonusPoints + 50
// // console.log(bonusPoints)

// // bonusPoints = bonusPoints - 75
// // console.log(bonusPoints)

// // bonusPoints = bonusPoints + 45
// // console.log(bonusPoints)

// // function increment () {
// //     console.log("The button was clicked")
// // }
// // function countdown() {
// //     console.log(5)
// //     console.log(4)
// //     console.log(3)
// //     console.log(2)
// //     console.log(1)
// // }

// // countdown()

// // countdown()

// // function call42() {
// // console.log(42)
// // }

// // call42()

// // let lap1 = 34
// // let lap2 = 33
// // let lap3 = 36

// // function logLapTime () {
// //     let totalTime = lap1 + lap2 + lap3
// //     console.log(totalTime)
// // }

// // logLapTime ()

// // let lapsCompleted = 0 

// // function addLap() {
// //     lapsCompleted = lapsCompleted + 1
// // }

// // addLap()
// // addLap()
// // addLap()

// // console.log(lapsCompleted)

// let countEl = document.getElementById("count-el")

// console.log(countEl)

// let count = 0

// function increment() {
//     count = count + 1
//     countEl.innerText = count
//     console.log(count)
// }

// //Create a function, save() which logs out the count when its called

// function save() {
//     count = 0
//     console.log(count)
//     countEl.innerText = count
// }

let countEl = document.getElementById("count-el")
let count = 0

let saveEl = document.getElementById("save-el")

console.log(saveEl)

function increment() {
    count += 1
    countEl.innerText = count
    console.log(count)
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    count = 0
    countEl.textContent = 0
    console.log(count)
}