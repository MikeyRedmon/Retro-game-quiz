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
    }
]

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

function loadQuiz() {

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.Question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected(){
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked){
            answer = answerEl.id
        }
    })
    return answer
}

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
            
            <button conclick = "location.reload()">Retry?</button>`
        }
    }
}
)