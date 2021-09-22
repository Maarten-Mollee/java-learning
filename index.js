
let player = {
    name: "Riznir",
    chips: 145
}
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips

let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.querySelector("#cards-el")

function getRamdonCard () {
    let number = Math.ceil(Math.random() * 11)
    if (number === 1) {
        return 11
    } else if (number > 10) {
        return 10
    }
    return number
}

function startGame () {
    let firstCard = getRamdonCard()
    let secondCard = getRamdonCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    isAlive = true
    hasBlackJack = false
    renderGame ()
}

function renderGame () {
    cardsEl.textContent = "cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    if (sum <= 20) {
        message = "do you want to draw a new card?"
    } else if (sum === 21) {
        message = "you've got blackjack!"
        hasBlackJack = true
    } else {
        message = "you're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
    sumEl.textContent = "Sum: " + sum
}

function newCard () {
    if (isAlive === true && hasBlackJack === false) {
        let newCard = getRamdonCard()
        cards.push(newCard)
        sum += newCard
        renderGame ()
    }
}
