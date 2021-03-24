const express = require('express');
//npm install -g parcel-bundler
//npm init -y
//npm i parcel-bundler --save-dev
//questions array, array of objects
const questionContainerElement = document.getElementById('question-container');
function setNextQuestion(){

}
function selectAnswer(){

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
      { position: "A", content: "8",},
      { position: "B", content: "-1",},
      { position: "C", content: "7",},
      { position: "D", content: "6",},
    ]
  },
    {
    question: "Find x: 4x + 6 = -10",
    answersArr: [
      { position: "A", content: "4",},
      { position: "B", content: "2",},
      { position: "C", content: "-4",},
      { position: "D", content: "-2",},
    ]
  },
    {
    question: "Find x: x + 9 = 18 - 2x",
    answersArr: [
      { position: "A", content: "2",},
      { position: "B", content: "1",},
      { position: "C", content: "3",},
      { position: "D", content: "-2",},
    ]
  },
    {
    question: "Find x: 2x + 6 = 4x - 2",
    answersArr: [
      { position: "A", content: "3",},
      { position: "B", content: "-4",},
      { position: "C", content: "4",},
      { position: "D", content: "1",},
    ]
  },
    {
    question: "Find x: -x - 1 = 221 + 2x",
    answersArr: [
      { position: "A", content: "64",},
      { position: "B", content: "74",},
      { position: "C", content: "-74",},
      { position: "D", content: "-64",},
    ]
  },
      {
    question: "Find x: 15 + 5x = 0",
    answersArr: [
      { position: "A", content: "0",},
      { position: "B", content: "1",},
      { position: "C", content: "-3",},
      { position: "D", content: "-2",},
    ]
  },
      question: "Find x: 17x - 12 = 114 + 3x",
    answersArr: [
      { position: "A", content: "8",},
      { position: "B", content: "-8",},
      { position: "C", content: "9",},
      { position: "D", content: "7",},
    ]
  },
      question: "Find x: 2x - 10 = 10 - 3x",
    answersArr: [
      { position: "A", content: "2",},
      { position: "B", content: "3",},
      { position: "C", content: "4",},
      { position: "D", content: "-3",},
    ]
  },
      question: "Find x: 12x + 0 = 144",
    answersArr: [
      { position: "A", content: "-12",},
      { position: "B", content: "11",},
      { position: "C", content: "12",},
      { position: "D", content: "-11",},
    ]
  },
      question: "Find x: -10x - 19 = 19 - 8x",
    answersArr: [
      { position: "A", content: "-20",},
      { position: "B", content: "19",},
      { position: "C", content: "-19",},
      { position: "D", content: "20",},
    ]
  },
];