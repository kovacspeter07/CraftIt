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
        layer_2:"grass_block_side",
        layer_1:"short_grass",
        color:"linear-gradient(180deg, rgba(135,206,235,1) 0%, rgba(139,69,19,1) 100%)"
    },
    {
        title:"Sand",
        layer_3:"sand",
        layer_2:"sand",
        layer_1: "",
        color:"linear-gradient(180deg, rgba(163,228,255,1) 0%, rgba(198,130,82,1) 100%)"
    },
    {
        title:"Snow",
        layer_3:"grass_block_snow",
        layer_2:"snow",
        layer_1: "",
        color:"linear-gradient(180deg, rgba(0,59,83,1) 0%, rgba(162,154,148,1) 100%)"
    },
    {
        title:"Nether",
        layer_3:"netherrack",
        layer_2:"netherrack",
        layer_1: "nether_wart_stage1",
        color:"linear-gradient(180deg, rgba(116,0,0,1) 0%, rgba(158,104,55,1) 100%)"
    },
    {
        title:"End",
        layer_3:"end_stone",
        layer_2:"end_stone",
        layer_1: "",
        color:"linear-gradient(180deg, rgba(57,0,82,1) 0%, rgba(221,114,246,1) 100%)"
    }

];

document.getElementById("settings-button").onclick = function() {settingsScreen()};

function settingsScreen() {
    document.getElementById("menu-title").innerHTML = ""
    document.getElementById("menu-buttons").innerHTML = `<div id="background-button" class="menu-button">Background: Grass</div>`;
    document.getElementById("background-button").onclick = function() {changeBackground()};
}

function changeBackgroundIndex() {
    background_index += 1;
    if (background_index == background_variants.length) {
        background_index = 0;
    }
}

function changeBackground() {
    changeBackgroundIndex()
    document.getElementById("background-button").textContent = `Background: ${background_variants[background_index].title}`;
    document.body.style.background = `${background_variants[background_index].color}`
    var layer_1 = document.getElementById("layer-1");
    var layer_2 = document.getElementById("layer-2");
    var layer_3 = document.getElementById("layer-3");
    layer_1.style.background = `url(background/${background_variants[background_index].layer_1}.png)`;
    layer_1.style.backgroundSize = "contain"
    layer_2.style.background = `url(background/${background_variants[background_index].layer_2}.png)`;
    layer_2.style.backgroundSize = "contain"
    layer_3.style.background = `url(background/${background_variants[background_index].layer_3}.png)`;
    layer_3.style.backgroundSize = "contain"
}


