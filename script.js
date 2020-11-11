/*  
    Instructions:
GIVEN I am taking a code quiz
WHEN I click the start button
THEN a timer starts and I am presented with a question
WHEN I answer a question
THEN I am presented with another question
WHEN I answer a question incorrectly
THEN time is subtracted from the clock
WHEN all questions are answered or the timer reaches 0
THEN the game is over
WHEN the game is over
THEN I can save my initials and score */

//global variables for counting
let questionNo = 0
let score = 0

//array of multiple choice questions and their correct answers
const myQuestions = [
    {
        question: `Inside which HTML element do we put the JavaScript?`,
        answers:
        {
            a: `<script>`,
            b: `<js>`,
            c: `<javascript>`,
            d: `<scripting>`
        },
        correctAnswer: "a"
    },
    {
        question: `How do you write "Hello World" in an alert box?`,
        answers:
        {
            a: `msg("Hello World");`,
            b: `alertBox("Hello World");`,
            c: `msgBox("Hello World");`,
            d: `alert("Hello World");`
        },
        correctAnswer: "d"
    },
    {
        question: `How do you create a function in JavaScript?`,
        answers:
        {
            a: `function:myFunction()`,
            b: `function = muFunction()`,
            c: `function myFunction()`,
            d: `None of the above.`
        },
        correctAnswer: "c"
    },
    {
        question: `How to write an IF statement in JavaScript?`,
        answers:
        {
            a: `if i = 5 then`,
            b: `if i = 5`,
            c: `if i == 5 then`,
            d: `if (i == 5)`
        },
        correctAnswer: "d"
    },
    {
        question: `How can you add a comment in JavaScript?`,
        answers:
        {
            a: `'This is a comment`,
            b: `//This is a comment`,
            c: `<!--This is a comment-->`,
            d: `*~This is a comment~*`
        },
        correctAnswer: "b"
    },
];

//hide Welcome Page then display Questions Page
function startQuiz() {
    $('#startPage').addClass('hide')
    $('#question-container').removeClass('hide')
    showQuestion()
}

//display Quiz Complete page
function showResults() {
    $('#question-container').addClass('hide')
    $('#results').removeClass('hide')
}

//submit initials to show total score
function scoreTotal() {
    event.preventDefault()
    $('#question-container').addClass('hide')
    $('#results').removeClass('hide')
    let initials = $('input').val().trim()
    if (!initials) {
        alert("Please enter your initials.")
    }
    else {
        $(`<h4>Initials: ${initials} </h4> <br> <h4>Score: ${score} / 5</h4>`).appendTo('#results')
    }
}

//display question and choices
function showQuestion() {
    if (questionNo === 5) {
        showResults()
        return
    }
    let currentQuestion = myQuestions[questionNo]

    $('#displayQ').html(currentQuestion.question)
    $('#A').text(currentQuestion.answers.a)
    $('#B').text(currentQuestion.answers.b)
    $('#C').text(currentQuestion.answers.c)
    $('#D').text(currentQuestion.answers.d)

}

//compare clicked button value to answer
function checkAnswer(val) {
    let currentQuestion = myQuestions[questionNo]
    if (val === currentQuestion.correctAnswer) {
        $(`<h4>Correct!</h4>`).appendTo('#question-container')
        score++
        console.log("Current score:", score)
        questionNo++
        showQuestion()
    }
    else {
        $(`<h4>Incorrect!</h4>`).appendTo('#question-container')
        console.log("Current score:", score)
        questionNo++
        showQuestion()

    }
}

