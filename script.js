var startButton=document.querySelector(".startBtn")
var timer=document.querySelector(".timer")
var startContainer=document.querySelector(".startContainer")
var questionContainer=document.querySelector(".questionContainer")
var answerContainer=document.querySelector(".answerContainer")
var correctOrIncorrect=document.querySelector(".correctOrIncorrect")
var initialContainer=document.querySelector(".initialContainer")
var initialInput=document.querySelector(".initialInput")
var initialBtn=document.querySelector(".initialBtn")
var questionTitle=document.querySelector(".questionTitle")

//create var for h2
//create var for the collections for all the questions and answers and correct
//create an array var multiple question objects
var questionArr=[
    {
        question:"What is 1+1?", 
        choices: [5, 2, 3, 2], 
        correct: 2
    },  
    {
        question:"What is 5-2?", 
        choices: [4, 5, 3, 6], 
        correct: 3
    }
]
//create an var for question index and set to zero 
var qIndex=0    
function startQuestion(){
    //unhide question container 
    questionContainer.classList.remove("hide")

   //use text content method or inner text to display the first question value to the h2 var
questionTitle.textContent=questionArr[qIndex].question
//console.log(questionArr);
// console.log(questionArr[0]);
// console.log(questionArr[1]);
// console.log(questionArr[1].question);
// console.log(questionArr[1].choices);
// console.log(questionArr[0].choices[2]);


   //look to the answers of the first question and create a button for each answer and add the text to each button and apend to each button into the section with the class answer contaienr
//use the question index to access each question inside the question array
var questionChoices=questionArr[qIndex].choices
answerContainer.textContent=""
for (let index = 0; index < questionChoices.length; index++) {
    var answerBtn=document.createElement("button")
answerBtn.textContent=questionChoices[index]   
answerContainer.appendChild(answerBtn) 
}
//check if the answer is correct when answer is clicked
//regardless if question is incorrect or correct increases question index by 1 and call start question again
}
startButton.addEventListener("click", function(){
    startQuestion()
})
//creating a var, declaring a funtion, and creating an event listener 