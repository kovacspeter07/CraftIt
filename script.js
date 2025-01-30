document.getElementById("play-button").onclick = function() {difficultyButtons()};

function difficultyButtons() {
    document.getElementById("menu-buttons").innerHTML = `<div id="play" class="menu-button">Easy</div>
    <div id="play" class="menu-button">Medium</div>
    <div id="play" class="menu-button">Hard</div>`;
}
