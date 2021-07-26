'use strict';

let q1= prompt("Did you know that Our eyes can detect sound?y/n").toLocaleLowerCase();
let q2= prompt("Are Our eyes the same size from birth?y/n").toLocaleLowerCase();//yes the same
let q3= prompt("Is Fingernails grow faster than toenails?y/n").toLocaleLowerCase();//yes it is grow nearly 4 times than toenails
let q4= prompt("Is the Amazon rain forest produces half the world’s oxygen supply?y/n").toLocaleLowerCase();//yes
let q5= prompt("Is Cabir.A the first cell phone virus?y/n").toLocaleLowerCase();//yes it is in 2004


//let questions =[q1,q2,q3,q4,q5];

//for (i=0;i<5;i++){
switch(q1) {
    case 'y':
       console.log('yes, your answer is right!');
      alert("You are right!");
      break;
    case 'n':  
      break;
    default:
      console.log('you have a problem');
      break;
    }// end of switch 
//}//end of for loop

if (q2 = 'y') {
    console.log('yes, your answer is right!');
      alert("yes it is grow nearly 4 times than toenails!");
} else if (q3 = 'y') {
    console.log('yes, your answer is right!');
      alert("yes, your answer is right!");
} else if (q4 = 'y') {
    console.log('yes, your answer is right!');
      alert("yes, your answer is right!");
} else if (q5 = 'y') {
    console.log('yes, your answer is right!');
      alert("yes, your answer is right!");
    
}

let user = prompt("Kindly what is your name?").toLocaleUpperCase();
alert("You are welcome " + user + ' Nice to meet you. I hope to see you again here!');