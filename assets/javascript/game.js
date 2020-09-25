let shotsTakenteam1 = document.querySelector ("#teamone-numshots")
let buttonTeam1 = document.querySelector ("#teamone-shoot-button")
let teamOneGoals = document.querySelector("#teamone-numgoals");

buttonTeam1.addEventListener("click", function () {
    console.log("fdsbihndjasvdas")
    let newCounterValue = Number(shotsTakenteam1.innerHTML) + 1; 
    shotsTakenteam1.innerHTML = newCounterValue;
    if (Math.random() * 100 < 70) {
        console.log ("ello")
        let newCounterValue = Number(teamOneGoals.innerHTML) + 1;
        teamOneGoals.innerHTML = newCounterValue;
    } 
})

let shotsTakenteam2 = document.querySelector ("#teamtwo-numshots")
let buttonTeam2 = document.querySelector ("#teamtwo-shoot-button")
let teamTwoGoals = document.querySelector("#teamtwo-numgoals")

buttonTeam2.addEventListener("click", function () {
    console.log("anvufjd dvnljfkc afdnjkm")
    let newCounterValue = Number(shotsTakenteam2.innerHTML) + 1
    shotsTakenteam2.innerHTML = newCounterValue;
    if (Math.random() * 100 < 65) {
        console.log ("mojo")
        let newCounterValue = Number(teamTwoGoals.innerHTML) + 1;
        teamTwoGoals.innerHTML = newCounterValue;
    }
})
let reset = document.querySelector("#reset-container") 
let resetbutton = document.querySelector ("#reset-button")
let numberOfResets = document.querySelector ("#num-resets")
resetbutton.addEventListener("click", function() { 
    console.log("Brick!")
    let newCounterValue = Number(numberOfResets.innerHTML) + 1
    numberOfResets.innerHTML = newCounterValue
})
reset.addEventListener ("click", function() {
    if (Math.random() * 100 < 0) {
        console.log ("erase")
        let newCounterValue = Number(reset.innerHTML) + 1
        reset.innerHTML = newCounterValue
    }
}) 
