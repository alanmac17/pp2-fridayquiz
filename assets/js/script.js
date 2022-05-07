// todays date
const issueDate = document.getElementById('todays-date')

// questions & answers
const questionIndexEl = document.getElementById('current-question-no')
const currentQuestionEl = document.getElementById('questionArea')
const currentAnswerOptionsEl = document.getElementById('answers-area')
const progressSectionEl = document.getElementById('progress')

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
var messageBoardEl = document.getElementById('story-text')

// Variables

let currentIndex = 0;
let quizScore = 0;

// Questions
let questions = [{
        question: "What is the Capital of Nigeria?",
        a: "Cape Town",
        b: "Lagos",
        c: "Kano",
        d: "Zaria",
        correct: "answerB",
        usersAnswer: null,
    },
    {
        question: "Who collaborated with Elton John on Cold Hearts",
        a: "Justin Beiber",
        b: "Phil Collins",
        c: "Robyn",
        d: "Dua Lipa",
        correct: "answerD",
        usersAnswer: null,
    },
    {
        question: "Which actor played the Joker in the 2022 film, The Batman?",
        a: "Colin Farrell",
        b: "Barry Keoghan",
        c: "Peter MacDonald",
        d: "Andy Serkins",
        correct: "answerA",
        usersAnswer: null,
    },
    {
        question: "The Premier of which islands was accused of cocaine trafficing?",
        a: "The Soloman Islands",
        b: "The Maldives",
        c: "The Cook Islands",
        d: "The British Virgin Islands",
        correct: "answerD",
        usersAnswer: null,
    },

]


// functions

//Function to create a question by passing question index and pulling rel data from question array
function createQuestion(questionIndex) {

    questionIndexEl.innerHTML = questionIndex + 1;
    currentQuestionEl.innerText = questions[questionIndex].question;

    answer0El.innerText = questions[questionIndex].a;
    answer1El.innerText = questions[questionIndex].b;
    answer2El.innerText = questions[questionIndex].c;
    answer3El.innerText = questions[questionIndex].d;

}

createQuestion(currentIndex);

//Function to populate next question with incremental currentIndex value that is then passed to CreateQuestion

function nextQuestion() {
    currentIndex++
    createQuestion(currentIndex)

    if (currentIndex === questions.length - 1) {
        submitQuizEl.classList.remove("hide")
        nextQuestionEl.classList.add("disabled")
    } else if (currentIndex > 0) {
        previousQuestionEl.classList.remove("hide")
    }
}

//Function to populate previous question with decreased currentIndex value that is then passed to CreateQuestion

function previousQuestion() {
    currentIndex--
    createQuestion(currentIndex)
    submitQuizEl.classList.add("hide")
    nextQuestionEl.classList.remove("disabled")
}

//Function to calculate the final score
function showFinalScore() {

    for (let i = 0; i < questions.length; i++) {
        if (questions[i].usersAnswer === questions[i].correct) {
            quizScore++
        }
            }
            submitQuizEl.classList.add("disabled")
            progressSectionEl.innerText = `You scored ${quizScore} / ${questions.length}`
            currentQuestionEl.innerText = "Answers"
            currentAnswerOptionsEl.innerText = `"Here we go"`
            
}
//Function to add the users selected or clicked answer to the questions array by using the target id from the event that was passed through, 

function addAnswer(event) {
    const buttonEl = event.target
    questions[currentIndex].usersAnswer = buttonEl.id
    console.log(questions[currentIndex])
}



// Event Listeners
submitQuizEl.addEventListener("click", showFinalScore);
previousQuestionEl.addEventListener("click", previousQuestion);
nextQuestionEl.addEventListener("click", nextQuestion);

// Event Listeners to capture the click action and run addAnswer
answer0El.addEventListener("click", addAnswer);
answer1El.addEventListener("click", addAnswer);
answer2El.addEventListener("click", addAnswer);
answer3El.addEventListener("click", addAnswer);