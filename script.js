//play button changing the screen to the difficulty selection
document.getElementById("play-button").onclick = function() {difficultyScreen()};

function difficultyScreen() {
    document.getElementById("menu-title").innerHTML = "Choose difficulty"
    difficultyButtons()
    backButton()
}

function difficultyButtons() {
    document.getElementById("menu-buttons").innerHTML = `<div id="easy-button" class="menu-button">Easy</div>
    <div id="medium-button" class="menu-button">Medium</div>
    <div id="hard-button" class="menu-button">Hard</div>`;
}
//use this function to put a back button on the page
function backButton() {
    document.getElementById("back-button").innerHTML = `<button>Back</button>`
}

document.getElementById("back-button").onclick = function() {reloadScreen()};

function reloadScreen() {
    location.reload();
}
//this point forward it's gonna be something else(change this text)