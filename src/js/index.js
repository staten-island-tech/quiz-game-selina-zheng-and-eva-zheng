
(function(){
  //const express = require('express');
//npm install -g parcel-bundler
//npm init -y
//npm i parcel-bundler --save-dev
//questions array, array of objects

 
const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');


let shuffleQuestions, currentQuestionIndex ;//^will default the values to undefine which is good for now. the let is used instead of const cause it will be redefined which const wouldn't allow

//in the variable startButton if you click it, it would perform the action of starting the Game
startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  //shuffles all our questions for us, gives us a question between 1 and 0 (Math.random) and the .5 would gives us a number less than 0 or above zero 50% of the time
  currentQuestionIndex = 0
  //starting on the very first question
  questionContainerElement.classList.remove('hide')
  //the variable questionCOntainerElement used document search and brought in the div for question-container. Here we use JS to remove the class of hide and thus unhide the element
  setNextQuestion()
}

function setNextQuestion(){
  resetState()
  //will add a function in a function
  showQuestion(shuffledQuestions[currentQuestionIndex])
};

function showQuestion(question){
  questionElement.innerText = question.question
  question.answersArr.forEach(answer => {
    const button = document.createElement('buttons')
    button.innerText = answer.content
    button.classList.add('btn')
    if (answer.correct){
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
};

function resetState(){
  nextButton.classList.add('hide')
  //now want to loop through all the children for the answers
  while (answerButtonsElement.firstChild){
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}
function selectAnswer(e){
  const selectedButton = e.target
  //for wahtever we clicked on
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  nextButton.classList.remove('hide')
};
function setStatusClass(element, correct){
  clearStatusClass(element)
  if(correct){
    element.classList.add('correct')
  }else{
    element.classList.add('wrong')
  }
}
function clearStatusClass(element){
  element.classList.remove('correct')
  element.classList.remove('wrong')
}
const questions = [
  //question {} should contain the following
  //the question: "String" (remeber your comma!!!),
  //answers Array written like so: answersArray[];
  //answer object with answer value, answer content, right/wrong, true/false, 

  //aswer is string or object with question or letter?
  {
    question: "Find x: -3 + 2x = 11",
    answersArr: [
      { position: "A", content: "8", correct:false,},
      { position: "B", content: "-1", correct:false,},
      { position: "C", content: "7",correct: true,},
      { position: "D", content: "6",correct:false,},
    ]
  },
    {
    question: "Find x: 4x + 6 = -10",
    answersArr: [
      { position: "A", content: "4",correct:false,},
      { position: "B", content: "2",correct:false,},
      { position: "C", content: "-4",correct: true,},
      { position: "D", content: "-2",correct:false,},
    ]
  },
    {
    question: "Find x: x + 9 = 18 - 2x",
    answersArr: [
      { position: "A", content: "2",correct:false,},
      { position: "B", content: "1",correct:false,},
      { position: "C", content: "3",correct: true,},
      { position: "D", content: "-2",correct:false,},
    ]
  },
    {
    question: "Find x: 2x + 6 = 4x - 2",
    answersArr: [
      { position: "A", content: "3",correct:false,},
      { position: "B", content: "-4",correct:false,},
      { position: "C", content: "4",correct: true,},
      { position: "D", content: "1",correct:false,},
    ]
  },
    {
    question: "Find x: -x - 1 = 221 + 2x",
    answersArr: [
      { position: "A", content: "64",correct:false,},
      { position: "B", content: "74",correct:false,},
      { position: "C", content: "-74",correct: true,},
      { position: "D", content: "-64",correct:false,},
    ]
  },
      {
    question: "Find x: 15 + 5x = 0",
    answersArr: [
      { position: "A", content: "0",correct:false,},
      { position: "B", content: "1",correct:false,},
      { position: "C", content: "-3",correct: true,},
      { position: "D", content: "-2",correct:false,},
    ]
  },
  {
      question: "Find x: 17x - 12 = 114 + 3x",
    answersArr: [
      { position: "A", content: "8",correct:false,},
      { position: "B", content: "-8",correct:false,},
      { position: "C", content: "9",correct: true,},
      { position: "D", content: "7",correct:false,},
    ]
  },
  {
      question: "Find x: 2x - 10 = 10 - 3x",
    answersArr: [
      { position: "A", content: "2",correct:false,},
      { position: "B", content: "3",correct:false,},
      { position: "C", content: "4",correct: true,},
      { position: "D", content: "-3",correct:false,},
    ]
  },
  {
      question: "Find x: 12x + 0 = 144",
    answersArr: [
      { position: "A", content: "-12",correct:false,},
      { position: "B", content: "11",correct:false,},
      { position: "C", content: "12", correct: true,},
      { position: "D", content: "-11",correct:false,},
    ]
  },
  {
      question: "Find x: -10x + 19 = - 8x - 19",
    answersArr: [
      { position: "A", content: "-20",correct:false,},
      { position: "B", content: "19",correct:false,},
      { position: "C", content: "-19",correct: true,},
      { position: "D", content: "20",correct:false,},
    ]
  },
];
const score = 0;

// //to get whether a question is correct or incorrect we use a "for loop"
//  for(){
//       let i=0,
//    i < questions.length,//to loop for as many questions are in the array (in the variable questions)
//    i++ ,//increment i The increment operator(i++) adds 1 to the operand and the decrement operator (i--) subtracts 1 from the operand
//  };
})();