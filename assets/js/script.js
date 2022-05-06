// todays date
const issueDate = document.getElementById('todays-date')

// questions & answers
const questionIndexEl = document.getElementById('current-question-no')
const currentQuestion = document.getElementById('questionArea')
const currentAnswerOptions = document.getElementById('answers-area')

// answers
const answer0El = document.getElementById('answerA') 
const answer1El = document.getElementById('answerB') 
const answer2El = document.getElementById('answerC') 
const answer3El = document.getElementById('answerD')

// navigation
const previousQuestionEl = document.getElementById('previous')
const nextQuestionEl = document.getElementById('next')
const submitQuizEl = document.getElementById('submit')

// Initial message and scoreboard
var messageBoard = document.getElementById('story-text')

// Variables

let currentIndex = 0;
let addAnswer =[]; // array of answered question indexes
let Quizscore = 0;


// Questions
let questions = [
    {
        question: "What is the Capital of Nigeria?",
        a: "Cape Town",
        b: "Lagos",
        c: "Kano",
        d: "Zaria",
        correct: "answerB",
        usersAnswer:null,
    },
    {
        question: "Who collaborated with Elton John on Cold Hearts",
        a: "Justin Beiber",
        b: "Phil Collins",
        c: "Robyn",
        d: "Dua Lipa",
        correct: "answerD",
        usersAnswer:null,
    },
    {
        question: "Which actor played the Joker in the 2022 film, The Batman?",
        a: "Colin Farrell",
        b: "Barry Keoghan",
        c: "Peter MacDonald",
        d: "Andy Serkins",
        correct: "answerA",
        usersAnswer:null,
    },
    {
        question: "The Premier of which islands was accused of cocaine trafficing?",
        a: "The Soloman Islands",
        b: "The Maldives",
        c: "The Cook Islands",
        d: "The British Virgin Islands",
        correct: "answerD",
        usersAnswer:null,
    },

]


// functions
function createQuestion(questionIndex) {

questionIndexEl.innerHTML = questionIndex + 1
currentQuestion.innerText = questions[questionIndex].question;

answer0El.innerText = questions[questionIndex].a
answer1El.innerText = questions[questionIndex].b
answer2El.innerText = questions[questionIndex].c
answer3El.innerText = questions[questionIndex].d

}

createQuestion(currentIndex)

function nextQuestion()
{
currentIndex++
createQuestion(currentIndex)
}

function previousQuestion()
{
currentIndex--
createQuestion(currentIndex)
}


function showFinalScore() {

}


function checkAnswer(buttonEl) {
    const correctButtonIdforQuestion = questions[currentIndex].correct
    // increment
    // push question in to answered questions array

    if (buttonEl.id === correctButtonIdforQuestion) {

    }
}


// Event Listeners
submitQuizEl.addEventListener("click", showFinalScore);
previousQuestionEl.addEventListener("click",previousQuestion);
nextQuestionEl.addEventListener("click", nextQuestion);

answer0El.addEventListener("click", checkAnswer);
answer1El.addEventListener("click", checkAnswer);
answer2El.addEventListener("click", checkAnswer);
answer3El.addEventListener("click", checkAnswer);
