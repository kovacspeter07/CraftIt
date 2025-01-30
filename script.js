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
// setting button
var background_index = 0;
const background_variants = [
    {
        title:"Grass",
        layer_3:"dirt",
        layer_2:"dirt_path_side",
        layer_1:"short_grass",
    },
    {
        title:"Sand",
        layer_3:"sand",
        layer_2:"sand",
        layer_1: "",
    }
];

document.getElementById("settings-button").onclick = function() {settingsScreen()};

function settingsScreen() {
    document.getElementById("menu-title").innerHTML = ""
    document.getElementById("menu-buttons").innerHTML = `<div id="background-button" class="menu-button">Background: Grass</div>`;
    document.getElementById("background-button").onclick = function() {changeBackground()};
}



function changeBackground() {
    background_index += 1;
    document.getElementById("background-button").textContent = `Background: ${background_variants[background_index].title}`;
}


