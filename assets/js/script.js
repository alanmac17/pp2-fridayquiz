// todays date
const issueDate = document.getElementById('todays-date')

// questions & answers
const questionindex = document.getElementById('current-question-no')
const currentQuestion = document.getElementById('questionArea')
const currentAnswerOptions = document.getElementById('answers-area')

// answers
const answer0 = document.getElementById('answer0') 
const answer1 = document.getElementById('answer1') 
const answer2 = document.getElementById('answer2') 
const answer3 = document.getElementById('answer3')

// navigation
const previousq = document.getElementById('previous')
const nextq = document.getElementById('next')
const submitQuiz = document.getElementById('submit')

// Initial message and scoreboard
var messageBoard = document.getElementById('story-text')

// Variables

let currentIndex = 0;
let answeredQuestions =[]; // array of anwered question indexes
let score = 0;


// Questions
let questions = [
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




// functions
function createQuiz() {

questionindex.innerHTML = currentIndex + 1
currentQuestion.innerText = questions[currentIndex].question;
answer0.innerText = questions[currentIndex].a
answer1.innerText = questions[currentIndex].b
answer2.innerText = questions[currentIndex].c
answer3.innerText = questions[currentIndex].d
currentIndex++
}

createQuiz()


function showFinalScore() {

}


function checkAnswer() {

}


// Event Listeners
submitQuiz.addEventListener("click", showFinalScore);
previousq.addEventListener("click", );
nextq.addEventListener("click", nextQuestion);
