 var scores, roundScore, activePlayer;
 scores = [0,0];
 roundScore = 0;
activePlayer = 0;



document.querySelector('.dice').style.display ="none";

document.getElementById('score-0').textContent ="0";
document.getElementById('score-1').textContent ="0";
document.getElementById('current-0').textContent ="0";
document.getElementById('current-1').textContent ="0";

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
       activePlayer === 0 ? activePlayer= 1 : activePlayer = 0;
       roundScore =0;  

       document.getElementById('current-0').textContent = '0';
       document.getElementById('current-1').textContent = '0';

       document.querySelector('.player-0-panel').textContent.remove('active');
       document.querySelector('.player-0-panel').textContent.remove('active'); 
    }
});





// document.querySelector('#current-' + activePlayer).textContent = dice; 


// dice = 6;

// dice = Math.floor(Math.random() * 6) + 1;
// console.log(dice);



// document.querySelector('#current-' + activePlayer).innerHTML = '< em>' + dice + '</em>';

// var x = document.querySelector('#score-0').textContent;
// console.log(x);