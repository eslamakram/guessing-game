'use strict';
let userInformation = ['Eslam', 'Jordan', 'Two', 'apple','Turkey'];

let q1= prompt("Do you search about Eslam?y/n").toLocaleLowerCase();
let q2= prompt("Do you know that Eslam lives in Jordan?y/n").toLocaleLowerCase();
let q3= prompt("Do you Know that Eslam has Two Girls?y/n").toLocaleLowerCase();
let q4= prompt("Do you know that Eslam loves apple?y/n").toLocaleLowerCase();
let q5= prompt("Do you know that places she would like to visit it?y/n").toLocaleLowerCase();


let questions =[q1,q2,q3,q4,q5];

for (i=0;i<= questions.length;i++){
switch(questions(i)) {
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
}//end of for loop

let user = prompt("Kindly what is your name?").toLocaleUpperCase();
alert("You are welcome" + user + 'Nice to meet you. I hope to see you again here!');