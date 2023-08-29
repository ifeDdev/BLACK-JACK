
let startBtn = document.querySelector(".start")
let popupInfo = document.querySelector(".info-box")
let exitBtn =  document.querySelector(".exit")
let main = document.querySelector(".main")

startBtn.onclick = () => {
    popupInfo.classList.add('active');    //shows the popup ifo//
    main.classList.add('active')
   
}
exitBtn.onclick = () => {
    popupInfo.classList.remove('active');
    main.classList.remove('active')
}

let cards = []
let sum = 0
let hasBlackJack = false;
let isAlive = false;
let message = ""
let display = document.getElementById("message")
let sumEl= document.getElementById("sum-el")
let cardsEl= document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")


function getRandomCard() {
   let randomNumber = Math.floor(Math.random() * 13) + 1;
    if (randomNumber > 10){
        return 10
    } else if(randomNumber === 1){
        return 11
    }else{
        return randomNumber;
    }
}

function startGame() {
    isAlive = true;
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards =[firstCard , secondCard]
    sum = firstCard + secondCard;
    renderGame()
}

function renderGame() {
    sumEl.textContent = "Sum: " + sum;
    //Render our firstcard and second card
    cardsEl.textContent = "Cards: " ;
    for(let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }

    if(sum <= 20) {
    message = "Do you want to draw a new card"
   
} else if(sum === 21) {
    message = " You've Got Black Jack"
    hasBlackJack = true;
    
} else{
    message = "You are out of the game"
    isAlive = false;

}
display.textContent = message;


    function newFunction() {
        return playerEl.textContent = player.name + " " + "$" + player.chips
    }
}
function newCard() {
    if(isAlive == true && hasBlackJack === false) {
    let card = getRandomCard()
    sum += card;
    cards.push(card)
        renderGame()
}
}