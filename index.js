let hScore = 0
let gScore = 0
let score = 0

let homeScoreEl = document.getElementById("homeScore")
let guestScoreEl = document.getElementById("guestScore")

console.log(homeScoreEl, guestScoreEl)



function addOnePointH() {
    hScore += 1
    homeScoreEl.textContent = hScore
}

function addTwoPointsH() {
    hScore += 2
    homeScoreEl.textContent = hScore
}

function addThreePointsH() {
    hScore += 3
    homeScoreEl.textContent = hScore
}


function addOnePointG() {
    gScore += 1
    guestScoreEl.textContent = gScore
    }
    
function addTwoPointsG() {
    gScore += 2
    guestScoreEl.textContent = gScore
    }
    
function addThreePointsG() {
    gScore += 3
    guestScoreEl.textContent = gScore
    }


function resetScores() {
    gScore = 0
    hScore = 0
    homeScoreEl.textContent = hScore
    guestScoreEl.textContent = gScore
}