/** Constants for calling rules, and the about section of the homepage. */

const ourRules = document.getElementById("callRules")
const rules = document.getElementById("rules")
const aboutUs = document.getElementById("callAbout")
const about = document.getElementById("about")

/** Function to push the content to the rules and about buttons */

ourRules.addEventListener("click", rulesFunction)

function rulesFunction() {
    if (rules.innerHTML === ""){
    rules.innerHTML = `
   <ol>
    <li>Try to get at least 50% of answers correct</li>
    <li>Beat the timer in order to keep playing</li>
    <li>Have fun!</li> 
   </ol>
   `;} else {
    rules.innerHTML = ""
   } 
}

aboutUs.addEventListener("click", aboutUsFunction)

function aboutUsFunction(){
    if (about.innerHTML === "") {
    about.innerHTML = `
    <form>
        <h3>Submit Your Feedback!</h3>
        <label for="fname">First Name</label>
        <input type="text" id="fname" required>
        <label for="lname">Last Name</label>
        <input type="text" id="lname" required>
        <label for="feedback">Feedback;</label>
        <input type="text" id="feedback" required>
    </form>
<button>Submit Your Feedback</button>
    `;} 
    else {
        about.innerHTML = ""
    }
}