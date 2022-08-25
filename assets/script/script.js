const quizData = [
    {
        Question: "When was Ratchet and Clank for the Playstation 2 Released?",
        A: "2001",
        B: "2000",
        C: "2002",
        D: "1999",
        Correct:"C",
    },
    {
        Question: "In which galaxy does the original Ratchet and Clank take place?",
        A: "Luna Galaxy",
        B: "Solana Galaxy",
        C: "Bogon Galaxy",
        D: "Jatau Galaxy",
        Correct: "B"
    },
    {
        Question: "In Ratchet and Clank 2, who runs MegaCorp?",
        A: "Mr Abercrombie Fizzwidget",
        B: "Mr Jebidiah Appletop",
        C: "Madam Delilah Crackbolt",
        D: "Madam Katlin Penquil",
        Correct:"A"
    },
    {
        Question: "In Ratchet and Clank 2, where does the first area battle take place?",
        A: "Nebula G34",
        B: "Mnemonic Station",
        C: "Xepher X-1",
        D: "Maktar Resort",
        Correct:"D"
    },
    {
        Question: "At the start of Ratchet and Clank 3, who attacks Ratchets home?",
        A: "Captain Qwark",
        B: "The Tyhrranoids",
        C: "Thugs-4-Less",
        D: "A Unknown Space Phenomenon",
        Correct:"B"
    }
]

const quiz = document.getElementById("quiz")
const answerEls = document.querySelectorAll(".answer")
const questionEls = document.getElementById("question")
const a_text = document.getElementById("a_text")
const b_text = document.getElementById("b_text")
const c_text = document.getElementById("c_text")
const d_text = document.getElementById("d_text")
const submitBtn = document.getElementById("submit")

