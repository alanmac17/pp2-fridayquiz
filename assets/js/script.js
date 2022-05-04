// todays date
const issueDate = document.getElementById('todays-date')

// questions & answers
var questionNo = document.getElementById('current-question-no')
var currentQuestion = document.getElementById('question-area')
var currentAnswerOptions = document.getElementById('answers-area')

// buttons
const button0 = getElementById('btn-answ0')
const button1 = getElementById('btn-answ1')
const button2 = getElementById('btn-answ2')
const button3 = getElementById('btn-answ3')

// answers
const answer0 = getElementById('answer0')
const answer1 = getElementById('answer1')
const answer2 = getElementById('answer2')
const answer3 = getElementById('answer3')

// navigation
const previousq = document.getElementById('previous')
const nextq = document.getElementById('next')
const submitQuiz = document.getElementById('submit')

// Initial message and scoreboard
var messageBoard = document.getElementById('story-text')

// scoring
var yourScore = document.getElementById("user-score");
var totalScore = document.getElementById("total-score");

let currentQuestion = 0;
let score = 0;
let totalScore = questionsList.length;

// functions
function createQuiz() {
const currentQuizFile = questionsList[currentQuestion]

currentQuestion.innerText = currentQuizFile.question
answer0.innerText = currentQuizFile.a
answer1.innerText = currentQuizFile.b
answer2.innerText = currentQuizFile.c
answer3.innerText = currentQuizFile.d

}

createQuiz();

function showFinalScore() {

}



// Event Listeners
submitQuiz.addEventListener('click', showFinalScore)
prevBtn.addEventListener("click", previousq);
nextBtn.addEventListener("click",nextq);
submitBtn.addEventListener("click",submitQuiz);


var questionsList[
    {
        question: "What is the Capital of Nigeria?",
        a: "Cape Town",
        b: "Lagos",
        c: "Kano",
        d: "Zaria",
        correct: "b",
    },
    {
        question: "Who collaborated with Elton John on Cold Hearts",
        a: "Justin Beiber",
        b: "Phil Collins",
        c: "Robyn",
        d: "Dua Lipa",
        correct: "d",
    },
    {
        question: "Which actor played the Joker in the 2022 film, The Batman?",
        a: "Colin Farrell",
        b: "Barry Keoghan",
        c: "Peter MacDonald",
        d: "Andy Serkins",
        correct: "a",
    },
    {
        question: "The Premier of which islands was accused of cocaine trafficing?",
        a: "The Soloman Islands",
        b: "The Maldives",
        c: "The Cook Islands",
        d: "The British Virgin Islands",
        correct: "d",
    },
]