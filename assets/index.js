var quiz = document.getElementById("quiz");
var initialTime = 60;
var time = document.getElementById("time");

function homePage() {
    quiz.innerHTML = `
    <p>
        My Quiz
    </p>
    <button id="startQuiz">Start Quiz</button>
    `
    document
        .getElementById('startQuiz')
        .addEventListener(
            'click',
            function () {
                setTime()
                questionPage()
            })

}

function questionPage() {/*  */
    quiz.innerHTML = `
    <P>
        Question 1
    </p>
    <ul>
        Which of the items in this array has an index value of 1? 
    </ul>
    <ul>
        var westeros = ["Harrenhall", "Dragonstone", "Winterfell", "Lannisport", "Highgarden", "Yronwood"];
    </ul>
    <ul>
        <li><button>Harrenhall</button></li>
        <li><button>Winterfell</button></li>
        <li><button>Dragonstone</button></li>
        <li><button>Yronwood</button></li>
    </ul>
    
    `
}

//document
//.getelementByClassName('choice')
//.addEventListener (
'click',
    function () {

    }
)

//give ID for whichever is the correct answer this.value = choice, then say go to next question, then subtract from time. 

function timeChange() {
    initialTime = initialTime - 15
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

