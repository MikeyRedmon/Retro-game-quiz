/** Constants for calling rules, and the about section of the homepage. */

const ourRules = document.getElementById("callRules");
const rules = document.getElementById("rules");
const aboutUs = document.getElementById("callAbout");
const about = document.getElementById("about");

/** Function to push the content to the rules and about buttons */

ourRules.addEventListener("click", rulesFunction);

function rulesFunction() {
    if (rules.innerHTML === ""){
    rules.innerHTML = `
   <ol style = "text-align:center" font-family: inherit>
    <li>Try to get at least 50% of answers correct</li>
    <li>No Googling in an alternative tab</li>
    <li>Beat the Quiz in the alotted time</li>
    <li>Have fun!</li> 
   </ol>
   `;} else {
    rules.innerHTML = "";
   } 
}

aboutUs.addEventListener("click", aboutUsFunction);

function aboutUsFunction(){
    if (about.innerHTML === "") {
    about.innerHTML = `
    <form style="text-align:center" font-family: inherit>
        <h3>Submit Your Feedback!</h3>
        <div>
        <label for="fname">First Name</label>
        <input type="text" id="fname" required>
        </div>
        <div>
        <label for="lname">Last Name</label>
        <input type="text" id="lname" required>
        </div>
        <div>
        <label for="feedback">Feedback</label>
        <input type="text" id="feedback" required>
        </div>
        <input type="submit" value="Submit Your Feedback!" style= "background-color: #03cae4; color: #fff; border: none; display: block; width: 100%; cursor: pointer; font-size: 1.1rem;font-family: inherit">
    </form>
    `;} 
    else {
        about.innerHTML = "";
    }
}