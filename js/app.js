'use strict';

// declerations

let finalScore = 0;
let questions = ["Did you know that Our eyes can detect sound?y/n", "Are Our eyes the same size from birth?y/n", "Is Fingernails grow faster than toenails?y/n" ,
"Is the Amazon rain forest produces half the world’s oxygen supply?y/n", "Is Cabir.A the first cell phone virus?y/n" ];
let responseAnswers = ['yes', 'y', 'no', 'n'];
let correctAnswers = ['yes, your answer is right!', 'yes, correct answer!', 'yes, correct answer. it is grow nearly 4 times than toenails!' ,"yes, your answer is right!"
, 'yes, your answer is right! it is in 2004'];
let ans = [];

// functions

// 1-5 questions 

function askUser(questions, responseAnswers, correctAnswers) {
  for (let i=0 ; i < questions.length ; i++){
     ans[i] = prompt (questions[i]).toLocaleLowerCase();

    while(ans[i] !== responseAnswers[0] && ans[i] !== responseAnswers[1] && ans[i] !== responseAnswers[2] && ans[i] !== responseAnswers[3]) {
        ans[i] = prompt (questions[i]).toLocaleLowerCase();
    }// end while

    if(ans[i] === responseAnswers[0] || ans[i] === responseAnswers[1]) {
      finalScore++;
      alert(correctAnswers[i]);
    }
    else{
      alert('no, your answer is incorrect!'); 
    
    }
    console.log(`finalScore ${finalScore}`);

  } // end of for loop 

}// end of askUser function


function guessingNumberGame(){

  let holdingNumber= Math.floor((Math.random() * 100) + 1);
let guessingNumber= Number(prompt("let's have fun! i have a number in my mind,Could you guess it?"));

let attempts;
for (attempts=1; attempts < 4; attempts++){
  if (guessingNumber == holdingNumber) {
    finalScore++;
    console.log('yes, your answer is right!');
      alert("yes, your answer is right!");
      break;
      } else if (guessingNumber > holdingNumber) {
        alert("It's too high!");
        guessingNumber= prompt("let's have fun! i have a number in my mind,Could you guess it?");
      } else {
        alert("It's too low!");
        guessingNumber= prompt("let's have fun! i have a number in my mind,Could you guess it?");      }
} //end for loop for 4 attempts
console.log(`the final score is ${finalScore}`) 
} // end of guessingNumberGame()

function guessingPlaceGame(){
  let myFavPlaces =['turkey','spain','palestine'];
let guessingPlace= prompt("Having fun! Could you guess one of my favorite place that want to visit?");

let opportunities;
outerLoop: for (opportunities = 1; opportunities < 6; opportunities++){
  for(let i = 0 ; i < myFavPlaces.length ; i++){ 
    console.log(myFavPlaces[i]);
    if (guessingPlace == myFavPlaces[i]){
    finalScore++;
    console.log('yes, your answer is right!');
      alert(`yes, your answer is right! ${myFavPlaces[i]}`);
    break outerLoop;}
        } // end of array loop
 
    guessingPlace= prompt("Having fun! Could you guess one of my favorite place that want to visit?");
   }//end for loop for 6 opportunities
}// end of guessingPlaceGame()

function informUser(){
  let user = prompt("Kindly what is your name?");
  user = user.toLocaleUpperCase();
alert(`You are welcome   ${user}  Nice to meet you. I hope to see you again here! your score is ${finalScore}`);

}  //end of informUser()

// main code 

askUser(questions,responseAnswers,correctAnswers);
guessingNumberGame();
guessingPlaceGame();
informUser();





  



