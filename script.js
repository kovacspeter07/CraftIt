//play button changing the screen to the difficulty selection
document.getElementById("play-button").addEventListener("click", function () {
  showMenu("difficulty-menu");
});

document.querySelectorAll(".back-button").forEach((button) => {
  button.addEventListener("click", function () {
    showMenu("main-menu");
  });
});

document.getElementById("easy-button").addEventListener("click", function () {
  showMenu("play-menu");
  easyPressed()
});

document.getElementById("medium-button").addEventListener("click", function () {
  showMenu("play-menu");
  mediumPressed()
});

document.getElementById("hard-button").addEventListener("click", function () {
  showMenu("play-menu");
  hardPressed()
});

document.querySelectorAll(".menu-button").forEach((button) => {
  button.onclick = function () {
    document.getElementById("button-sound").play();
  };
});

function showMenu(menuId) {
  document.querySelectorAll(".menu").forEach((menu) => {
    menu.classList.add("hidden");
  });
  document.getElementById(menuId).classList.remove("hidden");
}

//exit button (leaving the page)
document.getElementById("exit-button").addEventListener("click", function () {
  ExitPage();
});

function ExitPage() {
  window.close();
}
// setting button
document.getElementById("settings-button").addEventListener( "click", function () {
  showMenu("settings-menu");
});

document.getElementById("background-button").addEventListener( "click", function () {
  changeBackground();
});

///Background styles
var background_index = 0;
const background_variants = [
  {
    title: "Grass",
    layer_3: "dirt",
    layer_2: "grass_block_side",
    layer_1: "short_grass",
    color:
      "linear-gradient(180deg, rgba(135,206,235,1) 0%, rgba(139,69,19,1) 100%)",
  },
  {
    title: "Sand",
    layer_3: "sand",
    layer_2: "sand",
    layer_1: "",
    color:
      "linear-gradient(180deg, rgba(163,228,255,1) 0%, rgba(198,130,82,1) 100%)",
  },
  {
    title: "Snow",
    layer_3: "grass_block_snow",
    layer_2: "snow",
    layer_1: "",
    color:
      "linear-gradient(180deg, rgba(0,59,83,1) 0%, rgba(162,154,148,1) 100%)",
  },
  {
    title: "Nether",
    layer_3: "netherrack",
    layer_2: "netherrack",
    layer_1: "nether_wart_stage1",
    color:
      "linear-gradient(180deg, rgba(116,0,0,1) 0%, rgba(158,104,55,1) 100%)",
  },
  {
    title: "End",
    layer_3: "end_stone",
    layer_2: "end_stone",
    layer_1: "",
    color:
      "linear-gradient(180deg, rgba(57,0,82,1) 0%, rgba(221,114,246,1) 100%)",
  },
];

///background index change
function changeBackgroundIndex() {
  background_index += 1;
  if (background_index == background_variants.length) {
    background_index = 0;
  }
}
/// changeing the background
function changeBackground() {
  changeBackgroundIndex();
  document.getElementById(
    "background-button"
  ).textContent = `Background: ${background_variants[background_index].title}`;
  document.body.style.background = `${background_variants[background_index].color}`;
  var layer_1 = document.getElementById("layer-1");
  var layer_2 = document.getElementById("layer-2");
  var layer_3 = document.getElementById("layer-3");
  layer_1.style.background = `url(background/${background_variants[background_index].layer_1}.png)`;
  layer_1.style.backgroundSize = "contain";
  layer_2.style.background = `url(background/${background_variants[background_index].layer_2}.png)`;
  layer_2.style.backgroundSize = "contain";
  layer_3.style.background = `url(background/${background_variants[background_index].layer_3}.png)`;
  layer_3.style.backgroundSize = "contain";
}

// grid layout
// function calculateGridPosition(){
//     var picture = document.getElementById('crafting_img');
//     var cells = document.getElementById('cell-container');
//     var distance_top = picture.offsetTop;
//     var distance_left = picture.offsetLeft;
//     cells.style.marginTop = distance_top + "px";
//     cells.style.marginLeft = distance_left;
//     console.log(distance_left)
// }

// function reportWindowSize() {
//     calculateGridPosition()
//   }
  
//   window.onresize = reportWindowSize;

// changing the difficulty
//put the changed stats in these functions
function easyPressed() {
  console.log("easy")
  putItemDown()
}
function mediumPressed() {
  console.log("medium")
}
function hardPressed() {
  console.log("hard")
}

//drag and drop
let whereIsItem = {
  x: undefined,
  y: undefined,
  isDragged: false,
};
//This function is going to have to be changed further in the development
function putItemDown(){
  const item =`
      <img class="item" id="stick" src="item/stick.png" ${whereIsItem.isDragged? "grabbed": "not-grabbed"}"
      style="position: absolute; left: ${whereIsItem.x}px; top: ${whereIsItem.y}px;"
      onmousedown="dragStart()"
      onmouseup = dragEnd()
      onmousemove = dragMouseMove(window.event)
      >
  `;
  //the cell is going to have to be randomized
  document.getElementById('test').innerHTML = item;
}

function dragStart(){
  whereIsItem.isDragged = true
  putItemDown();
}

function dragEnd(){
  whereIsItem.isDragged = false
  gridSelect()
  putItemDown()
}

function dragMouseMove(event){
  if(whereIsItem.isDragged){
    const box = event.target.closest(".item")
    if (!box){
      return;
    }
    whereIsItem.x = document.getElementById("crafting_img").offsetLeft + event.clientX -box.offsetWidth /2
    whereIsItem.y = document.getElementById("crafting_img").offsetTop + event.clientY - box.offsetHeight /2
    putItemDown()
  }

}

//chooses which grid overlaps
function gridSelect(){
  var itemrect = document.getElementById("stick").getBoundingClientRect()
  var x11rect = document.getElementById("x11rect").getBoundingClientRect()
  var x39rect = document.getElementById("x39rect").getBoundingClientRect()
  var x33rect = document.getElementById("x33rect").getBoundingClientRect()
  var x19rect = document.getElementById("x19rect").getBoundingClientRect()
  if (itemrect.top > x11rect.top - 50 && itemrect.bottom < x11rect.bottom + 50 && itemrect.left > x11rect.left - 50 && itemrect.right < x11rect.right + 50){
    x11selected()
  }
  else if (itemrect.top > x39rect.top - 50 && itemrect.bottom < x39rect.bottom + 50 && itemrect.left > x39rect.left - 50 && itemrect.right < x39rect.right + 50){
    x39selected()
  }
  else if (itemrect.top > x33rect.top - 50 && itemrect.bottom < x33rect.bottom + 50 && itemrect.left > x33rect.left - 50 && itemrect.right < x33rect.right + 50){
    x33selected()
  }
  else if (itemrect.top > x19rect.top - 50 && itemrect.bottom < x19rect.bottom + 50 && itemrect.left > x19rect.left - 50 && itemrect.right < x19rect.right + 50){
    x19selected()
  }
}

function x11selected(){
  whereIsItem.x = document.getElementById("cell-10").getBoundingClientRect().left;
  whereIsItem.y = document.getElementById("cell-10").getBoundingClientRect().top;
}
function x39selected(){
  whereIsItem.x = document.getElementById("cell-10").getBoundingClientRect().left;
  whereIsItem.y = document.getElementById("cell-10").getBoundingClientRect().top;
}
function x33selected(){
  whereIsItem.x = document.getElementById("cell-10").getBoundingClientRect().left;
  whereIsItem.y = document.getElementById("cell-10").getBoundingClientRect().top;
}
function x19selected(){
  whereIsItem.x = document.getElementById("cell-10").getBoundingClientRect().left;
  whereIsItem.y = document.getElementById("cell-10").getBoundingClientRect().top;
}