/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, 
    a player rolls a dice as many times as he wishes. 
    Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. 
    After that, it's the next player's turn
- The player can choose to 'Hold', 
    which means that his ROUND score gets added to his GLBAL score. 
    After that, it's the next player's turn
- The first player to reach 100 points on 
    GLOBAL score wins the game
*/



var scores = [0, 0],
    roundScore = 0,
    activePlayer = 1;
    

// changes text in current score box
// document.querySelector('#current-' + activePlayer).textContent = dice;
// to change inner html
// document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>'

// read element and store to variable
    // getting the total score from player 0;
// var x = document.querySelector('#score-0').textContent;
// console.log(x);

// change the css of an element
    // hide the dice in the beginning
document.querySelector('.dice').style.display = 'none';

// sets all scores to 0 at beginning of game
document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';


// on click of dice roll button
document.querySelector('.btn-roll').addEventListener('click', function() {
    // 1. random number
    var dice = Math.floor(Math.random() * 6) + 1;
    // 2. display the random number
        // sets selector to variable to reuse easier
    var diceDOM = document.querySelector('.dice')
    diceDOM.style.display = 'block';
    // changes dice image to match random number rolled
    // changes the image src to dice-(random number).png
    diceDOM.src = 'dice-' + dice + '.png';
    // 3. Update the round score IF the rolled number was NOT a 1
})


    



