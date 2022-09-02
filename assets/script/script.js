// Quiz content constant; questions, answers and the correct answer variable. 
const quizData = [
    {
        Question: "When was Ratchet and Clank for the Playstation 2 Released?",
        a: "2001",
        b: "2000",
        c: "2002",
        d: "1999",
        Correct: "c",
    },
    {
        Question: "In which galaxy does the original Ratchet and Clank take place?",
        a: "Luna Galaxy",
        b: "Solana Galaxy",
        c: "Bogon Galaxy",
        d: "Jatau Galaxy",
        Correct: "b",
    },
    {
        Question: "In Ratchet and Clank 2, who runs MegaCorp?",
        a: "Mr Abercrombie Fizzwidget",
        b: "Mr Jebidiah Appletop",
        c: "Madam Delilah Crackbolt",
        d: "Madam Katlin Penquil",
        Correct: "a",
    },
    {
        Question: "In Ratchet and Clank 2, where does the first area battle take place?",
        a: "Nebula G34",
        b: "Mnemonic Station",
        c: "Xepher X-1",
        d: "Maktar Resort",
        Correct: "d",
    },
    {
        Question: "At the start of Ratchet and Clank 3, who attacks Ratchets home?",
        a: "Captain Qwark",
        b: "The Tyhrranoids",
        c: "Thugs-4-Less",
        d: "A Unknown Space Phenomenon",
        Correct: "b",
    },
    {
        Question: "Who is the leader of the Galaxtic Rangers?",
        a: "Skid McMarks",
        b: "Courtney Gears",
        c: "Sasha Phyronix",
        d: "Helga Von Stresisenburgen",
        Correct: "c",
    },
    {
        Question: "What is the name of the main villan of Ratchet and Clank 3?",
        a: "The Tyhrranoids",
        b: "Dr Nefarious",
        c: "Thugs-4-Less",
        d: "Big Al",
        Correct: "b",
    },
    {
        Question: "At the end of Ratchet and Clank 3, who from Ratchet and Clank 2 is sitting in the crowd?",
        a: "Captain Qwark",
        b: "Lawrence",
        c: "Skrunch",
        d: "Angela Cross",
        Correct: "d",
    },
    {
        Question: "In Ratchet: Deadlocked what is the name of the game Ratchet gets kidnapped to play in?",
        a: "DreadZone",
        b: "KillMap",
        c: "VoxCross",
        d: "Lifeless",
        Correct: "a",
    },
    {
        Question: "Who tells Ratchet to not end up like them near the ending of the game?",
        a: "Reactor",
        b: "Captain Starshield",
        c: "Slugha",
        d: "Ace Hardlight",
        Correct: "d",
    }
]


// The constants to set up the text push for each question cycle
const quiz = document.getElementById("quiz")
const answerEls = document.querySelectorAll(".answer")
const questionEl = document.getElementById("question")
const a_text = document.getElementById("a_text")
const b_text = document.getElementById("b_text")
const c_text = document.getElementById("c_text")
const d_text = document.getElementById("d_text")
const submitBtn = document.getElementById("submit")

let currentQuiz = 0
let score = 0 

loadQuiz()
/**
 * The load quiz function pushes text to the quizz.html file
 */
function loadQuiz() {

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.Question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}
/**
 * Deselects each of the radio buttons between questions
 */
function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}
/**
 * Returns each of the selected answers
 */
function getSelected(){
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked){
            answer = answerEl.id
        }
    })
    return answer
}
/**
 * adds an event listener to the submit button, checking if the answer
 * is correct and itterating the score if it is; then loading the next question
 * also propts a pair of buttons to reload the quiz to retry or to go back to the landing page.
 */
submitBtn.addEventListener("click", () =>{
    const answer = getSelected()
    if(answer) {
        if (answer === quizData[currentQuiz].Correct) {
            ++score
        }

        currentQuiz++

        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML= `
            <h2>You answered ${score}/${quizData.length} questions correctly</h2>
            
            <button onclick = "location.reload()">Retry?</button>
            <button><a href="index.html">Return To Homepage</a></button>
            `
        }
    }
}
)
/** Constants and functions for the timer */
const startingMinutes = 10
let time = startingMinutes * 60

const countdownEl = document.getElementById("timer")

setInterval(updateCountdown, 1000);

function updateCountdown() {
    const minutes = Math.floor(time/60);
    let second = time % 60;
    second = second < 10 ? '0' + second : second

    countdownEl.innerHTML = `${minutes}:${second}`
    time --;
}