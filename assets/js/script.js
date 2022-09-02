// questions & answers
const questionIndexEl = document.getElementById('current-question-no');
const currentQuestionEl = document.getElementById('questionArea');
const currentAnswerOptionsEl = document.getElementById('answers-area');
const progressSectionEl = document.getElementById('progress');


// answers
const answer0El = document.getElementById('a');
const answer1El = document.getElementById('b');
const answer2El = document.getElementById('c');
const answer3El = document.getElementById('d');

// navigation
const navigationEl = document.getElementById('navigation');
const previousQuestionEl = document.getElementById('previous');
const nextQuestionEl = document.getElementById('next');
const submitQuizEl = document.getElementById('submit');


// Initial message
var messageSectionEl = document.getElementById('message-section');

// Variables

let currentIndex = 0;
let quizScore = 0;

// Questions
let questions = [{
        question: "Which premier league football club signed Manual Akanji this transfer window?",
        a: "Leeds United",
        b: "Manchester City",
        c: "Brighton",
        d: "Notts Forest",
        correct: "Manchester City",
        usersAnswer: null,
        story: "Football",
    },
    {
        question: "Who will headline next years Slane Concert",
        a: "Justin Beiber",
        b: "Niall Horan",
        c: "Ed Sheeran",
        d: "Harry Styles",
        correct: "Harry Styles",
        usersAnswer: null,
        story: "Music",
    },
    {
        question: "Which african nation has the most pyramids?",
        a: "Sudan",
        b: "Nigeria",
        c: "Libya",
        d: "Egypt",
        correct: "Sudan",
        usersAnswer: null,
        story: "Geography",
    },
    {
        question: "Where was the Lord of the Rings Filmed?",
        a: "New Zealand",
        b: "Ireland",
        c: "Malta",
        d: "Australia",
        correct: "New Zealand",
        usersAnswer: null,
        story: "Film",
    },
    {
        question: "In place of milk what is added to Russian Tea?",
        a: "Cream",
        b: "Lemon",
        c: "Water",
        d: "Spices",
        correct: "Lemon",
        usersAnswer: null,
        story: "Culture",
    },
    {
        question: "What is the only part of the body that cannot heal itself?",
        a: "The foot",
        b: "The ear",
        c: "The eye",
        d: "The teeth",
        correct: "The teeth",
        usersAnswer: null,
        story: "Fun fact",
    },
    {
        question: "Which has the widest diameter",
        a: "The moon",
        b: "Australia",
        c: "Boris Johnsons head",
        d: "A football",
        correct: "Australia",
        usersAnswer: null,
        story: "Random",
    },
    {
        question: "Which country's national anthem has no words?",
        a: "Italy",
        b: "Spain",
        c: "Germany",
        d: "France",
        correct: "Spain",
        usersAnswer: null,
        story: "Music",
    },
    {
        question: "Queen Elizabeth II is a trained what..?",
        a: "Ninja",
        b: "Mechanic",
        c: "Pilot",
        d: "Sniper",
        correct: "Mechanic",
        usersAnswer: null,
        story: "Fun Fact",
    },
    {
        question: "What record did Robert Downey Jr hold before losing it to Barack Obama who then lost it to Caitlyn Jenner?",
        a: "Most Magazine Covers",
        b: "Nobel Peace Prize winner",
        c: "Quickest to get 1million twitter followers",
        d: "Rear of the year award",
        correct: "Quickest to get 1million twitter followers",
        usersAnswer: null,
        story: "Random",
    },
    {
        question: "Which Irish player scored v Finland to secure Ireland a playoff spot for the womens world cup?",
        a: "Lily Agg",
        b: "Jess Ziu",
        c: "Katie McCabe",
        d: "Heather Payne",
        correct: "Lily Agg",
        usersAnswer: null,
        story: "Football",
    },
    {
        question: "What was the first animated Disney feature film that was not based on an existing story?",
        a: "Cars",
        b: "Dumbo",
        c: "The Lion King",
        d: "Mulan",
        correct: "The Lion King",
        usersAnswer: null,
        story: "Film",
    },
    {
        question: "Who was the mythical Greek hunter after whom a constellation is named?",
        a: "Paris",
        b: "Orion",
        c: "Hercules",
        d: "Hades",
        correct: "Orion",
        usersAnswer: null,
        story: "History..",
    },
    {
        question: "Which fast-food franchise has the largest number of restaurants in the world?",
        a: "McDonalds",
        b: "Burger King",
        c: "KFC",
        d: "Subway",
        correct: "Subway",
        usersAnswer: null,
        story: "Food",
    },
    {
        question: "Name the band that had these members: Gerry Cott, Simon Crowe, Johnny Fingers, Bob Geldof?",
        a: "The Police",
        b: "The Hot House Flowers",
        c: "The Boomtown Rats",
        d: "The Wanted",
        correct: "The Boomtown Rats",
        usersAnswer: null,
        story: "Music",
    },
];

// functions

//Function to create a question by passing question index and pulling rel data from question array
function createQuestion(questionIndex) {

    questionIndexEl.innerHTML = questionIndex + 1;

    currentQuestionEl.innerText = questions[questionIndex].question;

    answer0El.innerText = questions[questionIndex].a;
    answer1El.innerText = questions[questionIndex].b;
    answer2El.innerText = questions[questionIndex].c;
    answer3El.innerText = questions[questionIndex].d;

    messageSectionEl.innerText = questions[questionIndex].story;

    if (questions[currentIndex].usersAnswer != "") {
        if (questions[currentIndex].usersAnswer === questions[questionIndex].a) {
            answer0El.classList.add('btnSelected');
            answer1El.classList.remove('btnSelected', 'btn:focus');
            answer2El.classList.remove('btnSelected', 'btn:focus');
            answer3El.classList.remove('btnSelected', 'btn:focus');
        } else if (questions[currentIndex].usersAnswer === questions[questionIndex].b) {
            answer1El.classList.add('btnSelected');
            answer0El.classList.remove('btnSelected', 'btn:focus');
            answer2El.classList.remove('btnSelected', 'btn:focus');
            answer3El.classList.remove('btnSelected', 'btn:focus');
        } else if (questions[currentIndex].usersAnswer === questions[questionIndex].c) {
            answer2El.classList.add('btnSelected');
            answer0El.classList.remove('btnSelected', 'btn:focus');
            answer1El.classList.remove('btnSelected', 'btn:focus');
            answer3El.classList.remove('btnSelected', 'btn:focus');
        } else if (questions[currentIndex].usersAnswer === questions[questionIndex].d) {
            answer3El.classList.add('btnSelected');
            answer0El.classList.remove('btnSelected', 'btn:focus');
            answer1El.classList.remove('btnSelected', 'btn:focus');
            answer2El.classList.remove('btnSelected', 'btn:focus');
        } else {
            answer0El.classList.remove('btnSelected', 'btn:focus');
            answer1El.classList.remove('btnSelected', 'btn:focus');
            answer2El.classList.remove('btnSelected', 'btn:focus');
            answer3El.classList.remove('btnSelected', 'btn:focus');
        }
    }

}

createQuestion(currentIndex);

//Function to populate next question with incremental currentIndex value that is then passed to CreateQuestion

function nextQuestion() {
    currentIndex++;
    createQuestion(currentIndex);

    if (currentIndex === questions.length - 1) {
        submitQuizEl.classList.remove("hide");
        nextQuestionEl.classList.add("disabled");
        previousQuestionEl.classList.add("hide");
    } else if (currentIndex > 0) {
        previousQuestionEl.classList.remove("hide");
    }
}

//Function to populate previous question with decreased currentIndex value that is then passed to CreateQuestion

function previousQuestion() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = 0;
    }

    createQuestion(currentIndex);
    submitQuizEl.classList.add("hide");
    nextQuestionEl.classList.remove("disabled");
}

//Function to calculate the final score and push modal code to questions area
function showFinalScore() {

    for (let i = 0; i < questions.length; i++) {
        if (questions[i].usersAnswer === questions[i].correct) {
            quizScore++;
        }
    }
    submitQuizEl.classList.add("disabled");
    progressSectionEl.innerText = "Quiz Completed";
    currentQuestionEl.innerText = `You scored ${quizScore} / ${questions.length}`;
    currentAnswerOptionsEl.innerHTML = `<img src="assets/img/${quizScore}.gif" alt="based on score">`;
    currentAnswerOptionsEl.style.gridTemplateColumns = 'repeat(1, 1fr)';

    let betterHtml = `
    <button id="myBtn" class="btn">See Answers</button>
    <button id="btnrefresh" class="btn" value="Refresh" onClick="refresh(this)">Restart</button>
    <div id = "myModal"class= "modal">
    <div class = "modal-content">
    <span class = "close">&times;</span>
    `;
    for (let i = 0; i < questions.length; i++) {
        betterHtml +=
            `<ol>${parseInt([i]) + 1}: ${questions[i].question}</ol>
                <li>Submitted: ${questions[i].usersAnswer}</li>
                <li>Correct Answer: ${questions[i].correct}</li>
                <br>`;
    }

    betterHtml += '</div></div>';

    navigationEl.innerHTML = betterHtml;
    displayresultsModal();
}


function refresh() {
    window.location.reload("Refresh");
}
//Function to add the users selected or clicked answer to the questions array by using the target id from the event that was passed through, 

function addAnswer(event) {
    const buttonEl = event.target;
    questions[currentIndex].usersAnswer = buttonEl.innerText;
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
    };

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        modal.style.display = "none";
    };

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };
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