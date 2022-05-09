// questions & answers
const questionIndexEl = document.getElementById('current-question-no')
const currentQuestionEl = document.getElementById('questionArea')
const currentAnswerOptionsEl = document.getElementById('answers-area')
const progressSectionEl = document.getElementById('progress')


// answers
const answer0El = document.getElementById('a')
const answer1El = document.getElementById('b')
const answer2El = document.getElementById('c')
const answer3El = document.getElementById('d')

// navigation
const previousQuestionEl = document.getElementById('previous')
const nextQuestionEl = document.getElementById('next')
const submitQuizEl = document.getElementById('submit')


// Initial message
var messageSectionEl = document.getElementById('message-section')
var modalContentEl = document.getElementsByClassName('modal-content')


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
        correct: "Lagos",
        usersAnswer: null,
        story: "Legend has it a man known only as Peter created a quiz",
    },
    {
        question: "Who collaborated with Elton John on Cold Hearts",
        a: "Justin Beiber",
        b: "Phil Collins",
        c: "Robyn",
        d: "Dua Lipa",
        correct: "Dua Lipa",
        usersAnswer: null,
        story: "Part man - part machine, Peter was a certified genius",
    },
    {
        question: "Which actor played the Joker in the 2022 film, The Batman?",
        a: "Colin Farrell",
        b: "Barry Keoghan",
        c: "Peter MacDonald",
        d: "Andy Serkins",
        correct: "Barry Keoghan",
        usersAnswer: null,
        story: "Every Friday like a your local chinese Peter would make you wait another 45 minutes for delivery!",
    },
    {
        question: "The Premier of which islands was accused of cocaine trafficing?",
        a: "The Soloman Islands",
        b: "The Maldives",
        c: "The Cook Islands",
        d: "The British Virgin Islands",
        correct: "The British Virgin Islands",
        usersAnswer: null,
        story: "But once sent it spread like wildfire across the inboxes of Ireland",
    },

    {
        question: "Queen guitarist Brian May is also an expert in what scientific field?",
        a: "Zoology",
        b: "Astrophysics",
        c: "Geology",
        d: "Mathematics",
        correct: "Astrophysics",
        usersAnswer: null,
        story: "It became a symbol of hope for the underpaid and despressed",
    },


    {
        question: "How many time zones are there in Russia?",
        a: "One",
        b: "Two",
        c: "Five",
        d: "Eleven",
        correct: "Eleven",
        usersAnswer: null,
        story: "However neither quiz nor Peter have been seen in over 2 years",
    },

    {
        question: "What country has the most islands in the world?",
        a: "France",
        b: "USA",
        c: "Sweden",
        d: "Russia",
        correct: "Sweden",
        usersAnswer: null,
        story: "After a lot of training montages, I have decided to take up the mantel of Peter",
    },
    {
        question: "Ireland ended their Women's Six Nations with a win over Scotland. Where was the game played?",
        a: "RDS",
        b: "Musgrave Park",
        c: "Kingspan Stadium",
        d: "Scotstoun Stadium",
        correct: "Kingspan Stadium",
        usersAnswer: null,
        story: "Using the powers of Javascript, I intend to craft a quiz out of the workshop of life",
    },


    {
        question: "Who invented the World Wide Web?",
        a: "Elon Musk",
        b: "Sergey Brin",
        c: "Tim Berners-Lee",
        d: "Peter Thiel",
        correct: "Tim Berners-Lee",
        usersAnswer: null,
        story: "Behold the Friday Quiz!",
    },

    {
        question: "Kane Tanaka of Japan was the worlds oldest person when she died last month at 119. Which of the following is NOT true of her long life?",
        a: "She experienced two pandemics",
        b: "She lived through two world wars",
        c: "She was born the year Japanese women won the right to vote",
        d: "The Model T, airplane and personal computer were all invented in her lifetime",
        correct: "She was born the year Japanese women won the right to vote",
        usersAnswer: null,
        story: "May the questions forever be in your favour",
    },


    {
        question: "When was Netflix founded?",
        a: "1997",
        b: "2001",
        c: "2003",
        d: "2014",
        correct: "1997",
        usersAnswer: null,
        story: "Peter would have never have said that.",
    },

    {
        question: "Ronnie O'Sullivan claimed his seventh World Snooker Championship this week, but in what year did he win his first?",
        a: "2000",
        b: "2001",
        c: "2002",
        d: "2003",
        correct: "2001",
        usersAnswer: null,
        story: "My wife told me that Alexa & Siri ask Peter questions",
    },
    {
        question: "In Greek mythology who was the mother of the gods?",
        a: "Aphrodite",
        b: "Athena",
        c: "Rhea",
        d: "Hera",
        correct: "Rhea",
        usersAnswer: null,
        story: "A photon is going through airport security. The officer asks if he has any luggage. The photon says, No, Im traveling light.",
    },
    {
        question: "What were crisps flavoured with before Tayto revolutionised the process?",
        a: "Veal",
        b: "Vinegar",
        c: "Smokey Bacon",
        d: "Nothing but a salt sachet",
        correct: "Nothing but a salt sachet",
        usersAnswer: null,
        story: "Man, Peter would loved that one.",
    },
    {
        question: "Jim Sheridan directed a hip hop crime drama about the life of which US rapper?",
        a: "Eminem",
        b: "50 Cent",
        c: "Puff Daddy",
        d: "Dr Dre",
        correct: "50 Cent",
        usersAnswer: null,
        story: "The last question, well done good sir and senioritas ",
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

    messageSectionEl.innerText = questions[questionIndex].story

    if (questions[currentIndex].usersAnswer != "") {
        if (questions[currentIndex].usersAnswer === questions[questionIndex].a) {
            answer0El.classList.add('btnSelected')
            answer1El.classList.remove('btnSelected')
            answer2El.classList.remove('btnSelected')
            answer3El.classList.remove('btnSelected')
        } else if (questions[currentIndex].usersAnswer === questions[questionIndex].b) {
            answer1El.classList.add('btnSelected')
            answer0El.classList.remove('btnSelected')
            answer2El.classList.remove('btnSelected')
            answer3El.classList.remove('btnSelected')
        } else if (questions[currentIndex].usersAnswer === questions[questionIndex].c) {
            answer2El.classList.add('btnSelected')
            answer0El.classList.remove('btnSelected')
            answer1El.classList.remove('btnSelected')
            answer3El.classList.remove('btnSelected')
        } else if (questions[currentIndex].usersAnswer === questions[questionIndex].d) {
            answer3El.classList.add('btnSelected')
            answer0El.classList.remove('btnSelected')
            answer1El.classList.remove('btnSelected')
            answer2El.classList.remove('btnSelected')
        } else {
            answer0El.classList.remove('btnSelected')
            answer1El.classList.remove('btnSelected')
            answer2El.classList.remove('btnSelected')
            answer3El.classList.remove('btnSelected')
        }
    }

}

createQuestion(currentIndex);

//Function to populate next question with incremental currentIndex value that is then passed to CreateQuestion

function nextQuestion() {
    currentIndex++
    createQuestion(currentIndex)

    if (currentIndex === questions.length - 1) {
        submitQuizEl.classList.remove("hide")
        nextQuestionEl.classList.add("disabled")
        previousQuestionEl.classList.add("hide")
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


//Function to calculate the final score and push modal code to questions area
function showFinalScore() {

    for (let i = 0; i < questions.length; i++) {
        if (questions[i].usersAnswer === questions[i].correct) {
            quizScore++
        }
    }
    submitQuizEl.classList.add("disabled")
    progressSectionEl.innerText = "Quiz Completed"
    currentQuestionEl.innerText = `You scored ${quizScore} / ${questions.length}`
    messageSectionEl.innerHTML = `<img src="assets/img/${quizScore}.jpg" alt="based on score">`

    let betterHtml = `
    <button id="myBtn" class="btn">See Answers</button>
    <div id = "myModal"class= "modal">
    <div class = "modal-content">
    <span class = "close">&times;</span>
    `
    for (let i = 0; i < questions.length; i++) {
        betterHtml +=
            `   <ol>${parseInt([i]) + 1}: ${questions[i].question}</ol>
                <li>Submitted: ${questions[i].usersAnswer}</li>
                <li>Correct Answer: ${questions[i].correct}</li>
                <br>    `
    }

    betterHtml += '</div></div>'

    currentAnswerOptionsEl.innerHTML = betterHtml;
    displayresultsModal();
}

//Function to add the users selected or clicked answer to the questions array by using the target id from the event that was passed through, 

function addAnswer(event) {
    const buttonEl = event.target
    questions[currentIndex].usersAnswer = buttonEl.innerText
}

// Function to display modal results 

function displayresultsModal() {
    // Get the modal
    var modal = document.getElementById("myModal");

    // Get the button that opens the modal
    var btn = document.getElementById("myBtn");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks the button, open the modal 
    btn.onclick = function () {
        modal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
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