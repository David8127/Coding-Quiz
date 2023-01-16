var quiz = document.getElementById("quiz");
var initialTime = 60;
var time = document.getElementById("time");

var questions = [
    {
        title: ' Which of the items in this array has an index value of 1?\nvar westeros = ["Harrenhall", "Dragonstone", "Winterfell", "Lannisport", "Highgarden", "Yronwood"]',
        answers: [
            {
                answer: 'Harrenhall',
                correct: false
            },
            {
                answer: 'Dragonstone',
                correct: true
            },
            {
                answer: 'Highgarden',
                correct: false
            },
            {
                answer: 'Lannisport',
                correct: false
            },
        ]
    },
    {
        title: 'Which of the following is NOT a real command in Javascript?',
        answers: [
            {
                answer: 'console.log',
                correct: false
            },
            {
                answer: 'console.count',
                correct: false
            },
            {
                answer: 'console.insert',
                correct: true
            },
            {
                answer: 'console.clear',
                correct: false
            },
        ]
    },
    {
        title: 'If you run ``console.log("5" + "6")`` , what will the result be?',
        answers: [
            {
                answer: '11',
                correct: false
            },
            {
                answer: 'Undefined',
                correct: false
            },
            {
                answer: '56',
                correct: true
            },
            {
                answer: ' "5"+"6" ',
                correct: false
            },
        ]
    },
    {
        title: 'Which of the following is NOT a keyword used to declare a variable?',
        answers: [
            {
                answer: 'var',
                correct: false
            },
            {
                answer: 'const',
                correct: false
            },
            {
                answer: 'obj',
                correct: true
            },
            {
                answer: 'let',
                correct: false
            },
        ]
    },

]



var currentQuestion = 0;

function homePage() {
    quiz.innerHTML = /*html*/ `
    <header>
        <h1>JavaScript Quiz!!</h1>
    </header>
    <div class="container">
        <div>
            <h2>Ready to test your JavaScript skills?</h2>
        </div>
        <button id="startQuiz">Start Quiz!</button>
    </div>
    `
    document
    .getElementById('startQuiz')
    .addEventListener(
        'click',
        function () {
            setTime()
            questionPage(questions[currentQuestion])
        })
        // document.addEventListener('click', setTime())
        // document.addEventListener('click', questionPage(questions[currentQuestion]))
}

function questionPage(question) {
    quiz.innerHTML = /*html*/`
    <P>
        ${question.title}
    </p>
    <ul>
        <li><button id="answerOne">${question.answers[0].answer}</button></li>
        <li><button id="answerTwo" data-correct="${question.answers[1].correct}">${question.answers[1].answer}</button></li>
        <li><button id="answerThree">${question.answers[2].answer}</button></li>
        <li><button id="answerFour">${question.answers[3].answer}</button></li>
    </ul>

    <div id="timer">Time left: <span id="time">0</span> seconds</div>
    `
    document.getElementById("answerTwo")
    document.addEventListener(
        'click',
        function (event) {
            currentQuestion++
            questionPage(questions[currentQuestion])
        }
    )
}

//document
//.getelementByClassName('choice')
//.addEventListener (
// 'click',
//     function () {

//     }
// )

//give ID for whichever is the correct answer this.value = choice, then say go to next question, then subtract from time. 

// function timeChange() {
//     initialTime = initialTime - 15
// }

function setTime() {
    // Sets interval in variable
    var timerInterval = setInterval(function () {
        initialTime--;
        timer.textContent = initialTime;

        if (initialTime === 0) {
            clearInterval(timerInterval);
        }

    }, 1000);
}
homePage()

