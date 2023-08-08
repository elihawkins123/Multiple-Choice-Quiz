var startButton=document.querySelector(".startBtn")
var timer=document.querySelector(".timer")
var startContainer=document.querySelector(".startContainer")
var questionContainer=document.querySelector(".questionContainer")
var answerContainer=document.querySelector(".answerContainer")
//create var for h2
//create var for the collections for all the questions and answers and correct
//create an array var multiple question objects
//create an var for question index and set to zero 
function startQuestion(){
   //use text content method or inner text to display the first question value to the h2 var
//look to the answers of the first question and create a button for each answer and add the text to each button and apend to each button into the section with the class answer contaienr
//use the question index to access each question inside the question array

//check if the answer is correct when answer is clicked
//regardless if question is incorrect or correct increases question index by 1 and call start question again
}
startButton.addEventListener("click", function(){
    startQuestion()
})
//creating a var, declaring a funtion, and creating an event listener 