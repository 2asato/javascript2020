// /*
// GAME RULES:

// - The game has 2 players, playing in rounds
// - In each turn, 
//     a player rolls a dice as many times as he wishes. 
//     Each result get added to his ROUND score
// - BUT, if the player rolls a 1, all his ROUND score gets lost. 
//     After that, it's the next player's turn
// - The player can choose to 'Hold', 
//     which means that his ROUND score gets added to his GLBAL score. 
//     After that, it's the next player's turn
// - The first player to reach 100 points on 
//     GLOBAL score wins the game
// */


// var scores, roundScore, activePlayer, gamePlaying;

// // sets settings for new game
// init();

// // to change inner html
// // document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>'

// // read element and store to variable
//     // getting the total score from player 0;
// // var x = document.querySelector('#score-0').textContent;
// // console.log(x);

// // change the css of an element


// // on click of dice roll button
// document.querySelector('.btn-roll').addEventListener('click', function() {
//    if (gamePlaying) {


//         // 1. random number
//         var dice = Math.floor(Math.random() * 6) + 1;
//         // 2. display the random number
//             // sets selector to variable to reuse easier
//         var diceDOM = document.querySelector('.dice')
//         diceDOM.style.display = 'block';
//         // changes dice image to match random number rolled
//         // changes the image src to dice-(random number).png
//         diceDOM.src = 'dice-' + dice + '.png';
//         // 3. Update the round score IF the rolled number was NOT a 1
//         if (dice !== 1) {
//             // add score
//             roundScore += dice;
//             // displays round score
//             document.querySelector('#current-' + activePlayer).textContent = roundScore;
//         } else {
//             // next player
//             nextPlayer();
//         }
//     }
// });

// // on click of hold button
// document.querySelector('.btn-hold').addEventListener('click', function() {
//     if (gamePlaying) {
//         // add current score to players global score
//         scores[activePlayer] += roundScore;
//         // update global score
//         document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
//         // check if player won the game
//         if (scores[activePlayer] >= 100) {
//             document.querySelector('#name-' + activePlayer).textContent = 'WINNER!!!';
//             document.querySelector('.dice').style.display = 'none';
//             document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
//             document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
//             gamePlaying = false;
//         } else {
//             // change player
//             nextPlayer();
//         }
//     }
// })

// function nextPlayer() {
//     activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
//     // resets round score to 0
//     roundScore = 0;
//     document.getElementById('current-0'.textContent = '0');
//     document.getElementById('current-1'.textContent = '0');
//     // switches player background after round ends
//     document.querySelector('.player-0-panel').classList.toggle('active');
//     document.querySelector('.player-1-panel').classList.toggle('active');
//     // hides dice image on player switch
//     document.querySelector('.dice').style.display = 'none';
// }

// document.querySelector('.btn-new').addEventListener('click', init);

// function init() {
//     scores = [0, 0],
//     roundScore = 0,
//     activePlayer = 0;
//     gamePlaying = true;

//     // hide the dice in the beginning
//     document.querySelector('.dice').style.display = 'none';

//     // sets all scores to 0 at beginning of game
//     document.getElementById('score-0').textContent = '0';
//     document.getElementById('score-1').textContent = '0';
//     document.getElementById('current-0').textContent = '0';
//     document.getElementById('current-1').textContent = '0';
//     document.querySelector('#name-1').textContent = 'PLAYER 2';
//     document.querySelector('#name-0').textContent = 'PLAYER 1';
//     document.querySelector('.player-0-panel').classList.remove('winner');
//     document.querySelector('.player-1-panel').classList.remove('winner');
//     document.querySelector('.player-0-panel').classList.remove('active');
//     document.querySelector('.player-1-panel').classList.remove('active');
//     document.querySelector('.player-0-panel').classList.add('active');  

// }



/*
YOUR 3 CHALLENGES
Change the game to follow these rules:

1. A player looses his ENTIRE score when he rolls two 6 in a row. 
    After that, it's the next player's turn. (Hint: Always save the previous dice roll in a separate variable)
2. Add an input field to the HTML where players can set the winning score, so that they can change the predefined score of 100. 
    (Hint: you can read that value with the .value property in JavaScript. This is a good oportunity to use google to figure this out :)
3. Add another dice to the game, so that there are two dices now. 
    The player looses his current score when one of them is a 1. 
    (Hint: you will need CSS to position the second dice, so take a look at the CSS code for the first one.)
*/



var scores, 
    roundScore, 
    activePlayer, 
    gamePlaying, 
    winningScore,
    rolled6 = false;
    // winningScore = document.getElementById('winningScore').value;

// sets settings for new game
init();


function init() {
    scores = [0, 0],
    roundScore = 0,
    activePlayer = 0;
    gamePlaying = true;
    rolled6 = false;
    winningScore = 100;
    // hide the dice in the beginning
    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.dice2').style.display = 'none';

    // sets all scores to 0 at beginning of game
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.querySelector('#name-1').textContent = 'PLAYER 2';
    document.querySelector('#name-0').textContent = 'PLAYER 1';
    document.querySelector('.winning-score-display').textContent = 100;
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');  

}


function nextPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    // resets round score to 0
    roundScore = 0;
    rolled6 = false;
    document.getElementById('current-0'.textContent = '0');
    document.getElementById('current-1'.textContent = '0');
    // switches player background after round ends
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    // hides dice image on player switch
    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.dice2').style.display = 'none';
}


// on click of dice roll button
document.querySelector('.btn-roll').addEventListener('click', function() {
   if (gamePlaying) {
        // 1. random number
        var dice = Math.floor(Math.random() * 6) + 1;
        console.log('dice = ' + dice);

        var dice2 = Math.floor(Math.random() * 6) + 1;
        console.log('dice2 = ' + dice2);
        
        // 2. display the random number
        // sets selector to variable to reuse easier
        // dice
        var diceDOM = document.querySelector('.dice')
        diceDOM.style.display = 'block';
        // changes dice image to match random number rolled
        // changes the image src to dice-(random number).png
        diceDOM.src = 'dice-' + dice + '.png';
        // dice2
        var dice2DOM = document.querySelector('.dice2')
        dice2DOM.style.display = 'block';
        dice2DOM.src = 'dice-' + dice2 +'.png';
        // 3. Update the round score IF the rolled number was NOT a 1
        if (dice !== 1 && dice2 !== 1) {
            // add score
            roundScore += (dice + dice2);
            // displays round score
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
            if ((dice == 6 || dice2 == 6) && (rolled6)) {                
                scores[activePlayer] = 0;
                document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
                nextPlayer();
            } else if (dice == 6 || dice2 == 6) {
                rolled6 = true;
            }
        } else {
            // next player
            nextPlayer();
        }
        console.log(rolled6);
        
    }
});


// on click of hold button
document.querySelector('.btn-hold').addEventListener('click', function() {
    if (gamePlaying) {
        // add current score to players global score
        scores[activePlayer] += roundScore;
        // update global score
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
        // check if player won the game
        if (scores[activePlayer] >= winningScore) {
            document.querySelector('#name-' + activePlayer).textContent = 'WINNER!!!';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.dice2').style.display = 'none';          
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;
        } else {
            // change player
            nextPlayer();
        }
    }
})


function getWinningScore() {
    winningScore = document.querySelector('.winning-score').value;
    document.querySelector('.winning-score-display').textContent = winningScore;
    console.log(winningScore);
    
}


document.querySelector('.btn-new').addEventListener('click', init);





    



