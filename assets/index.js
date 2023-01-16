var quiz = document.getElementById("quiz");
var time = document.getElementById("time");
var initialTime = 60;

var questions = [
    {
        title: 'Which of the items in this array has an index value of 1?\n<code>var westeros = ["Harrenhall", "Dragonstone", "Winterfell", "Lannisport", "Highgarden", "Yronwood"]</code>',
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
        title: 'If you run `<code>console.log("5" + "6")</code>` , what will the result be?',
        answers: [
            {
                answer: '56',
                correct: true
            },
            {
                answer: '11',
                correct: false
            },
            {
                answer: 'Undefined',
                correct: false
            },
            {
                answer: ' "5"+"6" ',
                correct: false
            },
        ]
    },
    {
        title: 'What are the correct brackets to use when defining an array?',
        answers: [
            {
                answer: '[ ]',
                correct: true
            },
            {
                answer: '{ }',
                correct: false
            },
            {
                answer: '( )',
                correct: false
            },
            {
                answer: '/ /',
                correct: false
            },
        ]
    },
    {
        title: 'Which of the following is a keyword tha can be used to declare a variable?',
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
                answer: 'let',
                correct: false
            },
            {
                answer: 'all of the above',
                correct: true
            },
        ]
    }
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
}

function questionPage(question) {
    quiz.innerHTML = /*html*/`
    <P>
        ${question.title}
    </p>
    <ul>
        <li><button id="answerOne" data-correct="${question.answers[0].correct}">${question.answers[0].answer}</button></li>
        <li><button id="answerTwo" data-correct="${question.answers[1].correct}">${question.answers[1].answer}</button></li>
        <li><button id="answerThree" data-correct="${question.answers[2].correct}">${question.answers[2].answer}</button></li>
        <li><button id="answerFour" data-correct="${question.answers[3].correct}">${question.answers[3].answer}</button></li>
    </ul>

    <p>Time Left:</p>
    <div id="timer"><span id="time">0</span> seconds</div>
    `

    document
        .getElementById("answerOne")
        .addEventListener(
            'click',
            function (event) {
                if (event.currentTarget.dataset.correct === 'true') {
                    alert('nice work')
                } else {
                    alert('false')
                    timeChange()
                }
                currentQuestion++
                if (questions.length === currentQuestion) {
                    highScore()
                }
                questionPage(questions[currentQuestion])
            }
        )

    document
        .getElementById("answerTwo")
        .addEventListener(
            'click',
            function (event) {
                if (event.currentTarget.dataset.correct === 'true') {
                    alert('nice work')
                } else {
                    alert('false')
                    timeChange()
                }
                currentQuestion++
                if (questions.length === currentQuestion) {
                    highScore()
                }
                questionPage(questions[currentQuestion])
            }
        )

    document
        .getElementById("answerThree")
        .addEventListener(
            'click',
            function (event) {
                if (event.currentTarget.dataset.correct === 'true') {
                    alert('nice work')
                } else {
                    alert('false')
                    timeChange()
                }
                currentQuestion++
                if (questions.length === currentQuestion) {
                    highScore()
                }
                questionPage(questions[currentQuestion])
            }
        )

    document
        .getElementById("answerFour")
        .addEventListener(
            'click',
            function (event) {
                if (event.currentTarget.dataset.correct === 'true') {
                    alert('nice work')
                } else {
                    alert('false')
                    timeChange()
                }
                currentQuestion++
                if (questions.length === currentQuestion) {
                    highScore()
                }
                questionPage(questions[currentQuestion])
            }
        )

}

function highScore() {
    quiz.innerHTML = /*html*/ `
    <header>
        <h1>Record your score!</h1>
    </header>
    <div class="container">
        <form name="myForm" action="/action_page.php" method="GET">
        <label for="initials">Your Initials:</label>
        <input type="text" id="initials" name="initials"><br><br>
        <label for="score">Score (out of 5):</label>
        <input type="text" id="score" name="score" value=""><br><br>
        <input type="button" value="Submit" onClick="quizResults(this.form)">
      </form>
    </div>
    `
}

function quizResults(form) {
    var input = form.score.value;
    alert("Your score of " + input + " has been recorded")
}

function timeChange() {
    initialTime = initialTime - 10
}

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

