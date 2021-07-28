'use strict';

let finalScore = 0;

// first question 

let q1= prompt("Did you know that Our eyes can detect sound?y/n").toLocaleLowerCase();

while(q1 !== 'yes' && q1 !== 'y' && q1 !== 'no' && q1 !== 'n') {
  q1= prompt("Did you know that Our eyes can detect sound?y/n").toLocaleLowerCase();
}
if(q1 === 'yes' || q1 === 'y') {
  finalScore++;
  alert('yes, your answer is right!');
}
else{
  console.log('no, your answer is incorrect!'); 

}
console.log(`finalScore ${finalScore}`);
 
// second question 

let q2= prompt("Are Our eyes the same size from birth?y/n").toLocaleLowerCase();//yes the same
// should the user enter yes or no 
while(q2 !== 'yes' && q2 !== 'y' && q2 !== 'no' && q2 !== 'n') {
  q2= prompt("Are Our eyes the same size from birth?y/n").toLocaleLowerCase();
}
if(q2 === 'yes' || q2 === 'y') {
  finalScore++;
  alert('yes, correct answer!');
}
else{
  console.log('no, your answer is incorrect!'); 

}
console.log(`finalScore ${finalScore}`);

// third question 

let q3= prompt("Is Fingernails grow faster than toenails?y/n").toLocaleLowerCase();//yes it is grow nearly 4 times than toenails
while(q3 !== 'yes' && q3 !== 'y' && q3 !== 'no' && q3 !== 'n') {
  q3= prompt("Is Fingernails grow faster than toenails?y/n").toLocaleLowerCase();//yes it is grow nearly 4 times than toenails
}
if(q3 === 'yes' || q3 === 'y') {
  finalScore++;
  alert('yes, correct answer. it is grow nearly 4 times than toenails!');
}
else{
  console.log('no, your answer is incorrect!'); 

}
console.log(`final Score is ${finalScore}`);

// fourth question 
let q4= prompt("Is the Amazon rain forest produces half the world’s oxygen supply?y/n").toLocaleLowerCase();//yes
while (q4 !== 'yes' && q4 !=='y' && q4 !== 'no' && q4 !== 'n'){
  q4= prompt("Is the Amazon rain forest produces half the world’s oxygen supply?y/n").toLocaleLowerCase()
}
if (q4 == 'y' || q4 == 'yes') {
  finalScore++;
    console.log('yes, your answer is right!');
      alert("yes, your answer is right!");
} else{
  console.log('no,your answer is incorrect!');
}
console.log(`final score is ${finalScore}`);

// fifth question 
let q5= prompt("Is Cabir.A the first cell phone virus?y/n").toLocaleLowerCase();//yes it is in 2004
while (q5 !== 'yes' && q5 !=='y' && q5 !== 'no' && q5 !== 'n'){
  q5= prompt("Is Cabir.A the first cell phone virus?y/n").toLocaleLowerCase();//yes it is in 2004
}
if (q5 == 'y' || q5 == 'yes') {
  finalScore++;
    console.log('yes, your answer is right!');
      alert("yes, your answer is right!");
} else{
  console.log('no,your answer is incorrect!');
}
console.log(`final score is ${finalScore}`);

// 6th question 
let holdingNumber= Math.floor((Math.random() * 100) + 1);
let guessingNumber= prompt("let's have fun! i have a number in my mind,Could you guess it?");

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
        guessingNumber= prompt("let's have fun! i have a number in my mind,Could you guess it?");

      }
} //end for loop for 4 attempts
console.log(`the final score is ${finalScore}`) 

// 7th question
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


let user = prompt("Kindly what is your name?");
user = user.toLocaleUpperCase();
alert(`You are welcome   ${user}  Nice to meet you. I hope to see you again here! your score is ${finalScore}`);
