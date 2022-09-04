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
    },
    {
        Question: "What Year did Jak and Daxter; The Precursor Legacy Release for PS2?",
        a: "1999",
        b: "2000",
        c: "2002",
        d: "2001",
        Correct: "d",
    },
    {
        Question: "How many Powercells did you need to finish Jak and Daxter?",
        a: "56",
        b: "77",
        c: "84",
        d: "101",
        Correct: "b",
    },
    {
        Question: "In Jak 2, what are Jaks first words?",
        a: "I'm gonna kill Praxis!",
        b: "D..Daxter? That you?",
        c: "What took you so long?",
        d: "Get me out of here, Dax",
        Correct: "a",
    },
    {
        Question: "What is revealed when Jak and Daxter find The Sacred Site?",
        a: "A Precursor Egg",
        b: "A Morph Gun upgrade",
        c: "Samos' Hut",
        d: "The Lost Heir of the city",
        Correct: "c",
    },
    {
        Question: "Who is revealed to be the metalhead leader?",
        a: "Torn",
        b: "Ashlin",
        c: "Count Vegar",
        d: "Kor",
        Correct: "d",
    },
    {
        Question: "Who finds Jak in the desert?",
        a: "Samos",
        b: "Kiera",
        c: "Torn",
        d: "Damas",
        Correct: "d",
    },
    {
        Question: "What is the name of Daxters Bar in Heaven City?",
        a: "The Little Weasel",
        b: "The Naughty Ottsel",
        c: "A Drop Of Poision",
        d: "The Lost Lizard",
        Correct: "b",
    },
    {
        Question: "What are Ottsels?",
        a: "The Precursors",
        b: "Hyper Intelligent creatures of unknowable origin",
        c: "They're just small fuzzballs",
        d: "No Ones sure",
        Correct: "a",
    },
    {
        Question: "Who does Jak beat to save the world?",
        a: "The Dark Makers",
        b: "Errol",
        c: "Damas",
        d: "Sig",
        Correct: "b",
    },
    {
        Question: "In Jak X; Combat Racing what does Mizo say to Jak at the end?",
        a: "You're a lot like Krew...",
        b: "When will you learn, Jak?",
        c: "You have a habit of leaving people to die, don't you?",
        d: "I'm above begging...",
        Correct: "c",
    },
    {
        Question: "In Sly Cooper, what is the name of the Rival gang?",
        a: "The Fiendish Five",
        b: "The Terrible Trio",
        c: "The Devilish Seven",
        d: "The Hateful Eight",
        Correct: "a",
    },
    {
        Question: "Whats the name of the Interpol Agent whos trying to catch the Cooper Gang?",
        a: "Tina Seal",
        b: "Carmelita Fox",
        c: "Cecelia Crow ",
        d: "Tristina Trip",
        Correct: "b",
    },
    {
        Question: "How is Clockwork alive after all this time?",
        a: "Their machinery and Hate",
        b: "Forming a deal with a demon",
        c: "Creating a replacement for their heart",
        d: "Living on a good diet on excercise",
        Correct: "a",
    },
    {
        Question: "In Sly 2: Band Of Thieves who is Carmelitas new Partner?",
        a: "Constable Reggie",
        b: "Constable Jacqueline",
        c: "Constable Neyla",
        d: "Constable Francis",
        Correct: "c",
    },
    {
        Question: "In Sly 2, what is the name of the Episode in which Bently must save the gang?",
        a: "Wrecking Ball",
        b: "Jailbreak",
        c: "Electric Escape",
        d: "Damp Dungeons",
        Correct: "b",
    },
    {
        Question: "In Sly 2, What iconic item has to be left behind before the final chapter?",
        a: "Slys Cane",
        b: "Bently's PC",
        c: "Murrys Gloves",
        d: "The Team van",
        Correct: "d",
    },
    {
        Question: "In Sly 2, Who helps Sly take down Clock-La?",
        a: "Mugshot",
        b: "Mz Ruby",
        c: "Carmelita",
        d: "Constable Reggie",
        Correct: "c",
    },
    {
        Question: "In Sly 3; Honour Among Thieves what does Sly Admit to being his biggest regret?",
        a: "Not being honest with Carmelita about his feelings",
        b: "Not being a better leader",
        c: "Not Finishing this job",
        d: "Not finding that one big score",
        Correct: "a",
    },
    {
        Question: "In Sly 3; Honour Among Thieves who is the character that is recruited from the first game?",
        a: "Mz Ruby",
        b: "Muggshot",
        c: "The Panda King",
        d: "Raleigh",
        Correct: "c",
    },
    {
        Question: "What does Sly do in the finally to get with Carmelita?",
        a: "He renouces his life of crime",
        b: "He 'pretends' to have amnesia",
        c: "Carmelita arrests him, but he convinces her of his feelings",
        d: "He doesn't, he gets away before he finds her",
        Correct: "b",
    }
];
// The constants to set up the text push for each question cycle
const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0 ;

loadQuiz();
/**
 * The load quiz function pushes text to the quizz.html file
*/
function loadQuiz() {

    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.Question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}
/**
 * Deselects each of the radio buttons between questions
 */
function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false);
}
/**
 * Returns each of the selected answers
 */
function getSelected(){
    let answer;
    answerEls.forEach(answerEl => {
        if(answerEl.checked){
            answer = answerEl.id;
        }
    });
    return answer;
}
/**
 * adds an event listener to the submit button, checking if the answer
 * is correct and itterating the score if it is; then loading the next question
 * also propts a pair of buttons to reload the quiz to retry or to go back to the landing page.
 */
submitBtn.addEventListener("click", () =>{
    const answer = getSelected();
    if(answer) {
        if (answer === quizData[currentQuiz].Correct) {
            ++score;
        }

        currentQuiz++;

        if(currentQuiz < quizData.length) {
            loadQuiz();
        } else if (score === 0) {
            quiz.innerHTML= `
            <h2>You answered ${score}/${quizData.length} questions correctly</h2>
            <h2>You got none of the answers right, we recommend playing the games to learn more!</h2>
            
            <button onclick = "location.reload()">Retry?</button>
            <button><a href="index.html">Return To Homepage</a></button>
            `; 
        }  else if (score < 15){
            quiz.innerHTML= `
            <h2>You answered ${score}/${quizData.length} questions correctly</h2>
            <h2>You got less than half the questions right, we would recommend a refresher!</h2>
            
            <button onclick = "location.reload()">Retry?</button>
            <button><a href="index.html">Return To Homepage</a></button>
            `;
        } else if (score <= 29){
            quiz.innerHTML= `
            <h2>You answered ${score}/${quizData.length} questions correctly</h2>
            <h2>You got over half the questions correct, just a few more for that 100%!</h2>
            
            <button onclick = "location.reload()">Retry?</button>
            <button><a href="index.html">Return To Homepage</a></button>
            `;
        } else if (score === 30){
            quiz.innerHTML= `
            <h2>You answered ${score}/${quizData.length} questions correctly</h2>
            <h2>You got all the answers correct! You're a true PS2 Aficionado.</h2>
        
         <button onclick = "location.reload()">Retry?</button>
          <button><a href="index.html">Return To Homepage</a></button>
          `;
    }
    }
});
/** Constants and functions for the timer */
const startingMinutes = 10;
let time = startingMinutes * 60;

const countdownEl = document.getElementById("timer");

setInterval(updateCountdown, 1000);

function updateCountdown() {
    const minutes = Math.floor(time/60);
    let second = time % 60;
    second = second < 10 ? '0' + second : second;

    countdownEl.innerHTML = `${minutes}:${second}`;
    time --;
}
