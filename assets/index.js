var quiz = document.getElementById("quiz");
function homePage () {
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

homePage()
