//play button changing the screen to the difficulty selection
document.getElementById("play-button").onclick = function() {difficultyScreen()};

function difficultyScreen() {
    document.getElementById("menu-title").innerHTML = "Choose difficulty"
    document.getElementById("menu-title").style.fontSize = "clamp(3rem, 5.5vw, 12rem)"
    difficultyButtons()
}

function difficultyButtons() {
    document.getElementById("menu-buttons").innerHTML = `<div id="easy-button" class="menu-button">Easy</div>
    <div id="medium-button" class="menu-button">Medium</div>
    <div id="hard-button" class="menu-button">Hard</div>`;
}
//exit button (leaving the page)
document.getElementById("exit-button").onclick = function() {ExitPage()};

function ExitPage() {
    window.close()
}

