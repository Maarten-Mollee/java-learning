let firstCard = 10
let secondCard = 4
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""

let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.querySelector("#cards-el")

function startGame () {
    renderGame()
}

function renderGame () {
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
    cardsEl.textContent = "Cards: " + cards[0] + " " + cards[1]
}

function newCard () {
    let newCard = 8
    cards.push(newCard)
    sum += newCard
    
    renderGame ()
}

let cardz = [7, 3, 9]

for (let i = 0; i < cardz.length; i++) {
    console.log(cardz[i])
}

