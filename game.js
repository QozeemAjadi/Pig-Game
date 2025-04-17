 var scores, roundScore, activePlayer;
//  scores = [0,0];
//  roundScore = 0;
// activePlayer = 0;

init();




document.querySelector('.btn-roll').addEventListener('click', function(){
    
   var dice = Math.floor(Math.random() * 6) + 1;
     
     var diceDOM = document.querySelector('.dice');
     diceDOM.style.display = 'block';
     diceDOM.src = 'dice-' + dice + '.png';


//3. update the round score If the the rolled nunmber was NOT a 1
    if (dice !== 1){
      //add score
      roundScore += dice;
      document.querySelector('#current-' + activePlayer).textContent = roundScore; 

    } else{
      //next player
       nextPlayer();
    }
});



document.querySelector(".btn-hold").addEventListener('click', function(){
  //add current score to global score
   scores[activePlayer] += roundScore;


  //update the UI
  document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer]; 

  //check if player won the game
   if(scores[activePlayer] >= 20) {
    document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
    document.querySelector('.dice').style.display = 'none'; 
     document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
     document.querySelector('.player-' + activePlayer + '-panel').classList.remove ('active');
  } else{
    //next player
      nextPlayer();
   }
});

function nextPlayer(){

  //next player
  activePlayer === 0 ? activePlayer= 1 : activePlayer = 0;
  roundScore =0;  

  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';

  document.querySelector('.player-0-panel').classList.toggle('active');
  document.querySelector('.player-1-panel').classList.toggle('active'); 

 //  document.querySelector('.player-0-panel').classList.remove('active');
 //  document.querySelector('.player-1-panel').classList.add('active'); 
 
 document.querySelector('.dice').style.display = 'none';

}


document.querySelector('.btn-new').addEventListener('click', init);

function init(){
  scores = [0, 0];
 activePlayer = 0;
 roundScore = 0;


 
document.querySelector('.dice').style.display ="none";

document.getElementById('score-0').textContent ="0";
document.getElementById('score-1').textContent ="0";
document.getElementById('current-0').textContent ="0";
document.getElementById('current-1').textContent ="0";
document.getElementById('name-0').textContent = 'player 1';
document.getElementById('name-1').textContent = 'player 2';
document.querySelector('.player-0-panel').classList.remove('winner');
document.querySelector('.player-1-panel').classList.remove('winner');
document.querySelector('.player-0-panel').classList.remove('active');
document.querySelector('.player-0-panel').classList.remove('active');
document.querySelector('.player-1-panel').classList.add('active');



}

// document.querySelector('#current-' + activePlayer).textContent = dice; 


// dice = 6;

// dice = Math.floor(Math.random() * 6) + 1;
// console.log(dice);



// document.querySelector('#current-' + activePlayer).innerHTML = '< em>' + dice + '</em>';

// var x = document.querySelector('#score-0').textContent;
// console.log(x);