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
      "linear-gradient(180deg, rgba(135,206,235,1) 0%, rgb(19, 71, 139) 100%)",
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

// changing the difficulty
//put the changed stats in these functions
let difficulty = "easy"
function easyPressed() {
  putItemDown();
  chooseCraft()
  timer(60);
}
function mediumPressed() {
  difficulty = "medium"
  chooseCraft()
  putItemDown();
  timer(40);
}
function hardPressed() {
  difficulty = "hard"
  chooseCraft()
  putItemDown();
  timer(20);
}


//drag and drop
let whereIsItem = {
  id: 1,
  x: undefined,
  y: undefined,
  isDragged: false,
  lastposition: undefined,
};

  const whereIsItemLeft = [];
  const whereIsItemTop = [];

  const lastpositionsLeft = [];
  const lastpositionsTop = [];

// if you randomize the spawned items make a new step here between the button press and the item putdown. 
function putItemDown(){
  for (let i = 1; i < 37; i++) {
    if (whereIsItem.id == i){
      whereIsItemLeft[i] = whereIsItem.x;
      whereIsItemTop[i] = whereIsItem.y;
      break;
    }
  }
    var item1 =`
    <img class="item" id="1" src="item/stick.png" ${whereIsItem.isDragged? "grabbed": "not-grabbed"}"
    style="position: absolute; left: ${whereIsItemLeft[1]}px; top: ${whereIsItemTop[1]}px;"
    onmousedown="dragStart(1)"
    onmouseup = dragEnd()
    onmousemove = dragMouseMove(window.event)
    >
    `;
    var item2 =`
    <img class="item" id="2" src="item/stick.png" ${whereIsItem.isDragged? "grabbed": "not-grabbed"}"
    style="position: absolute; left: ${whereIsItemLeft[2]}px; top: ${whereIsItemTop[2]}px;"
    onmousedown="dragStart(2)"
    onmouseup = dragEnd()
    onmousemove = dragMouseMove(window.event)
    >
`;
     var item3 =`
    <img class="item" id="3" src="easy_item/iron.png" ${whereIsItem.isDragged? "grabbed": "not-grabbed"}"
    style="position: absolute; left: ${whereIsItemLeft[3]}px; top: ${whereIsItemTop[3]}px;"
    onmousedown="dragStart(3)"
    onmouseup = dragEnd()
    onmousemove = dragMouseMove(window.event)
    >
`;
     var item4 =`
    <img class="item" id="4" src="easy_item/iron.png" ${whereIsItem.isDragged? "grabbed": "not-grabbed"}"
    style="position: absolute; left: ${whereIsItemLeft[4]}px; top: ${whereIsItemTop[4]}px;"
    onmousedown="dragStart(4)"
    onmouseup = dragEnd()
    onmousemove = dragMouseMove(window.event)
    >
`;
     var item5 =`
    <img class="item" id="5" src="easy_item/iron.png" ${whereIsItem.isDragged? "grabbed": "not-grabbed"}"
    style="position: absolute; left: ${whereIsItemLeft[5]}px; top: ${whereIsItemTop[5]}px;"
    onmousedown="dragStart(5)"
    onmouseup = dragEnd()
    onmousemove = dragMouseMove(window.event)
    >
`;
    var item6 =`
    <img class="item" id="6" src="item/stick.png" ${whereIsItem.isDragged? "grabbed": "not-grabbed"}"
    style="position: absolute; left: ${whereIsItemLeft[6]}px; top: ${whereIsItemTop[6]}px;"
    onmousedown="dragStart(6)"
    onmouseup = dragEnd()
    onmousemove = dragMouseMove(window.event)
    >
    `;
    var item7 =`
    <img class="item" id="7" src="item/stick.png" ${whereIsItem.isDragged? "grabbed": "not-grabbed"}"
    style="position: absolute; left: ${whereIsItemLeft[7]}px; top: ${whereIsItemTop[7]}px;"
    onmousedown="dragStart(7)"
    onmouseup = dragEnd()
    onmousemove = dragMouseMove(window.event)
    >
`;
     var item8 =`
    <img class="item" id="8" src="easy_item/iron.png" ${whereIsItem.isDragged? "grabbed": "not-grabbed"}"
    style="position: absolute; left: ${whereIsItemLeft[8]}px; top: ${whereIsItemTop[8]}px;"
    onmousedown="dragStart(8)"
    onmouseup = dragEnd()
    onmousemove = dragMouseMove(window.event)
    >
`;
     var item9 =`
    <img class="item" id="9" src="easy_item/iron.png" ${whereIsItem.isDragged? "grabbed": "not-grabbed"}"
    style="position: absolute; left: ${whereIsItemLeft[9]}px; top: ${whereIsItemTop[9]}px;"
    onmousedown="dragStart(9)"
    onmouseup = dragEnd()
    onmousemove = dragMouseMove(window.event)
    >
`;
     var item10 =`
    <img class="item" id="10" src="easy_item/iron.png" ${whereIsItem.isDragged? "grabbed": "not-grabbed"}"
    style="position: absolute; left: ${whereIsItemLeft[10]}px; top: ${whereIsItemTop[10]}px;"
    onmousedown="dragStart(10)"
    onmouseup = dragEnd()
    onmousemove = dragMouseMove(window.event)
    >
`;
    var item11 =`
    <img class="item" id="11" src="item/stick.png" ${whereIsItem.isDragged? "grabbed": "not-grabbed"}"
    style="position: absolute; left: ${whereIsItemLeft[11]}px; top: ${whereIsItemTop[11]}px;"
    onmousedown="dragStart(11)"
    onmouseup = dragEnd()
    onmousemove = dragMouseMove(window.event)
    >
    `;
    var item12 =`
    <img class="item" id="12" src="item/stick.png" ${whereIsItem.isDragged? "grabbed": "not-grabbed"}"
    style="position: absolute; left: ${whereIsItemLeft[12]}px; top: ${whereIsItemTop[12]}px;"
    onmousedown="dragStart(12)"
    onmouseup = dragEnd()
    onmousemove = dragMouseMove(window.event)
    >
`;
     var item13 =`
    <img class="item" id="13" src="easy_item/iron.png" ${whereIsItem.isDragged? "grabbed": "not-grabbed"}"
    style="position: absolute; left: ${whereIsItemLeft[13]}px; top: ${whereIsItemTop[13]}px;"
    onmousedown="dragStart(13)"
    onmouseup = dragEnd()
    onmousemove = dragMouseMove(window.event)
    >
`;
     var item14 =`
    <img class="item" id="14" src="easy_item/iron.png" ${whereIsItem.isDragged? "grabbed": "not-grabbed"}"
    style="position: absolute; left: ${whereIsItemLeft[14]}px; top: ${whereIsItemTop[14]}px;"
    onmousedown="dragStart(14)"
    onmouseup = dragEnd()
    onmousemove = dragMouseMove(window.event)
    >
`;
     var item15 =`
    <img class="item" id="15" src="easy_item/iron.png" ${whereIsItem.isDragged? "grabbed": "not-grabbed"}"
    style="position: absolute; left: ${whereIsItemLeft[15]}px; top: ${whereIsItemTop[15]}px;"
    onmousedown="dragStart(15)"
    onmouseup = dragEnd()
    onmousemove = dragMouseMove(window.event)
    >
`;
    var item16 =`
    <img class="item" id="16" src="item/stick.png" ${whereIsItem.isDragged? "grabbed": "not-grabbed"}"
    style="position: absolute; left: ${whereIsItemLeft[16]}px; top: ${whereIsItemTop[16]}px;"
    onmousedown="dragStart(16)"
    onmouseup = dragEnd()
    onmousemove = dragMouseMove(window.event)
    >
    `;
    var item17 =`
    <img class="item" id="17" src="item/stick.png" ${whereIsItem.isDragged? "grabbed": "not-grabbed"}"
    style="position: absolute; left: ${whereIsItemLeft[17]}px; top: ${whereIsItemTop[17]}px;"
    onmousedown="dragStart(17)"
    onmouseup = dragEnd()
    onmousemove = dragMouseMove(window.event)
    >
`;
     var item18 =`
    <img class="item" id="18" src="easy_item/iron.png" ${whereIsItem.isDragged? "grabbed": "not-grabbed"}"
    style="position: absolute; left: ${whereIsItemLeft[18]}px; top: ${whereIsItemTop[18]}px;"
    onmousedown="dragStart(18)"
    onmouseup = dragEnd()
    onmousemove = dragMouseMove(window.event)
    >
`;
     var item19 =`
    <img class="item" id="19" src="easy_item/iron.png" ${whereIsItem.isDragged? "grabbed": "not-grabbed"}"
    style="position: absolute; left: ${whereIsItemLeft[19]}px; top: ${whereIsItemTop[19]}px;"
    onmousedown="dragStart(19)"
    onmouseup = dragEnd()
    onmousemove = dragMouseMove(window.event)
    >
`;
     var item20 =`
    <img class="item" id="20" src="easy_item/iron.png" ${whereIsItem.isDragged? "grabbed": "not-grabbed"}"
    style="position: absolute; left: ${whereIsItemLeft[20]}px; top: ${whereIsItemTop[20]}px;"
    onmousedown="dragStart(20)"
    onmouseup = dragEnd()
    onmousemove = dragMouseMove(window.event)
    >
`;
    var item21 =`
    <img class="item" id="21" src="item/stick.png" ${whereIsItem.isDragged? "grabbed": "not-grabbed"}"
    style="position: absolute; left: ${whereIsItemLeft[21]}px; top: ${whereIsItemTop[21]}px;"
    onmousedown="dragStart(21)"
    onmouseup = dragEnd()
    onmousemove = dragMouseMove(window.event)
    >
    `;
    var item22 =`
    <img class="item" id="22" src="item/stick.png" ${whereIsItem.isDragged? "grabbed": "not-grabbed"}"
    style="position: absolute; left: ${whereIsItemLeft[22]}px; top: ${whereIsItemTop[22]}px;"
    onmousedown="dragStart(22)"
    onmouseup = dragEnd()
    onmousemove = dragMouseMove(window.event)
    >
`;
     var item23 =`
    <img class="item" id="23" src="easy_item/iron.png" ${whereIsItem.isDragged? "grabbed": "not-grabbed"}"
    style="position: absolute; left: ${whereIsItemLeft[23]}px; top: ${whereIsItemTop[23]}px;"
    onmousedown="dragStart(23)"
    onmouseup = dragEnd()
    onmousemove = dragMouseMove(window.event)
    >
`;
     var item24 =`
    <img class="item" id="24" src="easy_item/iron.png" ${whereIsItem.isDragged? "grabbed": "not-grabbed"}"
    style="position: absolute; left: ${whereIsItemLeft[24]}px; top: ${whereIsItemTop[24]}px;"
    onmousedown="dragStart(24)"
    onmouseup = dragEnd()
    onmousemove = dragMouseMove(window.event)
    >
`;
     var item25 =`
    <img class="item" id="25" src="easy_item/iron.png" ${whereIsItem.isDragged? "grabbed": "not-grabbed"}"
    style="position: absolute; left: ${whereIsItemLeft[25]}px; top: ${whereIsItemTop[25]}px;"
    onmousedown="dragStart(25)"
    onmouseup = dragEnd()
    onmousemove = dragMouseMove(window.event)
    >
`;
    var item26 =`
    <img class="item" id="26" src="item/stick.png" ${whereIsItem.isDragged? "grabbed": "not-grabbed"}"
    style="position: absolute; left: ${whereIsItemLeft[26]}px; top: ${whereIsItemTop[26]}px;"
    onmousedown="dragStart(26)"
    onmouseup = dragEnd()
    onmousemove = dragMouseMove(window.event)
    >
    `;
    var item27=`
    <img class="item" id="27" src="item/stick.png" ${whereIsItem.isDragged? "grabbed": "not-grabbed"}"
    style="position: absolute; left: ${whereIsItemLeft[27]}px; top: ${whereIsItemTop[27]}px;"
    onmousedown="dragStart(27)"
    onmouseup = dragEnd()
    onmousemove = dragMouseMove(window.event)
    >
`;
     var item28 =`
    <img class="item" id="28" src="easy_item/iron.png" ${whereIsItem.isDragged? "grabbed": "not-grabbed"}"
    style="position: absolute; left: ${whereIsItemLeft[28]}px; top: ${whereIsItemTop[28]}px;"
    onmousedown="dragStart(28)"
    onmouseup = dragEnd()
    onmousemove = dragMouseMove(window.event)
    >
`;
     var item29 =`
    <img class="item" id="29" src="easy_item/iron.png" ${whereIsItem.isDragged? "grabbed": "not-grabbed"}"
    style="position: absolute; left: ${whereIsItemLeft[29]}px; top: ${whereIsItemTop[29]}px;"
    onmousedown="dragStart(29)"
    onmouseup = dragEnd()
    onmousemove = dragMouseMove(window.event)
    >
`;
     var item30 =`
    <img class="item" id="30" src="easy_item/iron.png" ${whereIsItem.isDragged? "grabbed": "not-grabbed"}"
    style="position: absolute; left: ${whereIsItemLeft[30]}px; top: ${whereIsItemTop[30]}px;"
    onmousedown="dragStart(30)"
    onmouseup = dragEnd()
    onmousemove = dragMouseMove(window.event)
    >
`;
    var item31 =`
    <img class="item" id="31" src="item/stick.png" ${whereIsItem.isDragged? "grabbed": "not-grabbed"}"
    style="position: absolute; left: ${whereIsItemLeft[31]}px; top: ${whereIsItemTop[31]}px;"
    onmousedown="dragStart(31)"
    onmouseup = dragEnd()
    onmousemove = dragMouseMove(window.event)
    >
    `;
    var item32 =`
    <img class="item" id="32" src="item/stick.png" ${whereIsItem.isDragged? "grabbed": "not-grabbed"}"
    style="position: absolute; left: ${whereIsItemLeft[32]}px; top: ${whereIsItemTop[32]}px;"
    onmousedown="dragStart(32)"
    onmouseup = dragEnd()
    onmousemove = dragMouseMove(window.event)
    >
`;
     var item33 =`
    <img class="item" id="33" src="easy_item/iron.png" ${whereIsItem.isDragged? "grabbed": "not-grabbed"}"
    style="position: absolute; left: ${whereIsItemLeft[33]}px; top: ${whereIsItemTop[33]}px;"
    onmousedown="dragStart(33)"
    onmouseup = dragEnd()
    onmousemove = dragMouseMove(window.event)
    >
`;
     var item34 =`
    <img class="item" id="34" src="easy_item/iron.png" ${whereIsItem.isDragged? "grabbed": "not-grabbed"}"
    style="position: absolute; left: ${whereIsItemLeft[34]}px; top: ${whereIsItemTop[34]}px;"
    onmousedown="dragStart(34)"
    onmouseup = dragEnd()
    onmousemove = dragMouseMove(window.event)
    >
`;
     var item35 =`
    <img class="item" id="35" src="easy_item/iron.png" ${whereIsItem.isDragged? "grabbed": "not-grabbed"}"
    style="position: absolute; left: ${whereIsItemLeft[35]}px; top: ${whereIsItemTop[35]}px;"
    onmousedown="dragStart(35)"
    onmouseup = dragEnd()
    onmousemove = dragMouseMove(window.event)
    >
`;
     var item36 =`
    <img class="item" id="36" src="easy_item/iron.png" ${whereIsItem.isDragged? "grabbed": "not-grabbed"}"
    style="position: absolute; left: ${whereIsItemLeft[36]}px; top: ${whereIsItemTop[36]}px;"
    onmousedown="dragStart(36)"
    onmouseup = dragEnd()
    onmousemove = dragMouseMove(window.event)
    >
`;
    
  var item = item1 + item2 + item3 + item4 + item5 + item6 + item7 + item8 + item9 + item10 + item11 + item12 + item13 + item14 + item15 + item16 + item17 + item18 + item19 + item20 + item21 + item22 + item23 + item24 + item25 + item26 + item27 + item28 + item29 + item30 + item31 + item32 + item33 + item34 + item35 + item36;
  document.getElementById('items').innerHTML = item;
}

function dragStart(num){
  whereIsItem.id = num;
  for (let i = 1; i < 37; i++) {
    if (num == i){
      whereIsItem.x = whereIsItemLeft[i];
      whereIsItem.y = whereIsItemTop[i];
      break;
    }
  }
  whereIsItem.isDragged = true;
  gridSelect(false);
  putItemDown();
}

function dragEnd(){
  whereIsItem.isDragged = false;
  gridSelect(true);
  putItemDown();
  updateCraftingList();
}

function dragMouseMove(event){
  if(whereIsItem.isDragged){
    const box = event.target.closest(".item");
    if (!box){
      return;
    }
    whereIsItem.x = document.getElementById("crafting_img").offsetLeft + event.clientX -box.offsetWidth /2;
    whereIsItem.y = document.getElementById("crafting_img").offsetTop + event.clientY - box.offsetHeight /2;
    putItemDown();
  }

}

//chooses which grid overlaps
function gridSelect(end){
  var itemrect = document.getElementById(whereIsItem.id).getBoundingClientRect();
  var x39rect = document.getElementById("x39rect").getBoundingClientRect();
  var x33rect = document.getElementById("x33rect").getBoundingClientRect();
  var x19rect = document.getElementById("x19rect").getBoundingClientRect();
  if (itemrect.top > x39rect.top - 50 && itemrect.bottom < x39rect.bottom + 50 && itemrect.left > x39rect.left - 50 && itemrect.right < x39rect.right + 50){
    x39selected(end);
  }
  else if (itemrect.top > x33rect.top - 50 && itemrect.bottom < x33rect.bottom + 50 && itemrect.left > x33rect.left - 50 && itemrect.right < x33rect.right + 50){
    x33selected(end);
  }
  else if (itemrect.top > x19rect.top - 50 && itemrect.bottom < x19rect.bottom + 50 && itemrect.left > x19rect.left - 50 && itemrect.right < x19rect.right + 50){
    x19selected(end);
  }
  else {
    snapback();
  }
}

function x39selected(end){
  if (end){
    whichSquare(10, 37, "cell-");
  }
  else {
    lastpositionRefresh(10, 37, "cell-");
  }
}
function x33selected(end){
  if (end){
    whichSquare(1, 10, "cell-crafting-");
  }
  else {
    lastpositionRefresh(1, 10, "cell-crafting-");
  }
}
function x19selected(end){
  if (end){
    whichSquare(1, 10, "cell-");
  }
  else {
    lastpositionRefresh(1, 10, "cell-");
  }
}

//chooses which square overlaps
function whichSquare(x, y, cellID){
  for (let i = x; i < y; i++) {
    let locCellID = cellID + i;
    var cellrect = document.getElementById(locCellID).getBoundingClientRect();
    var itemrect = document.getElementById(whereIsItem.id).getBoundingClientRect();
    if (itemrect.top > cellrect.top - 50 && itemrect.bottom < cellrect.bottom + 50 && itemrect.left > cellrect.left - 50 && itemrect.right < cellrect.right + 50){
      whereIsItem.x = document.getElementById(locCellID).getBoundingClientRect().left;
      whereIsItem.y = document.getElementById(locCellID).getBoundingClientRect().top;
      lastpositionsLeft[0] = cellrect.left;
      lastpositionsTop[0] = cellrect.top;
      if (collision()){
        snapback();
      }
      else {
        whereIsItem.lastposition = cellrect;
      }
      lastpositionData();
      break;
    }
  } 
}

//checks if there is any other item in the chosen square
function collision(){
  for (let i = 1; i < 37; i++){
    if (i != whereIsItem.id){
      if (lastpositionsLeft[0] == lastpositionsLeft[i] && lastpositionsTop[0] == lastpositionsTop[i]){
        return true;
      }
    }
  }
  return false;
}

//stores the data of thelast positions
function lastpositionData(){
  for (let i = 1; i < 37; i++){
    if (i == whereIsItem.id){
      lastpositionsLeft[i] = whereIsItem.lastposition.left;
      lastpositionsTop[i] = whereIsItem.lastposition.top;
    }
  }
}

//refreshes last known positions
function lastpositionRefresh(x, y, cellID){
  for (let i = x; i < y; i++) {
    let locCellID = cellID + i;
    var cellrect = document.getElementById(locCellID).getBoundingClientRect();
    var itemrect = document.getElementById(whereIsItem.id).getBoundingClientRect();
    if (itemrect.top > cellrect.top - 50 && itemrect.bottom < cellrect.bottom + 50 && itemrect.left > cellrect.left - 50 && itemrect.right < cellrect.right + 50){
      whereIsItem.lastposition = cellrect;
    } 
  }
}

//snaps back the item to the last position
function snapback(){
  whereIsItem.x = whereIsItem.lastposition.left;
  whereIsItem.y = whereIsItem.lastposition.top;
}

function timer(secund){
  var sec =secund;
  var timer = setInterval(function(){
      document.getElementById('TimerDisplay').innerHTML=sec;
      sec--;
      if (sec < 0) {
          clearInterval(timer);
          window.location.reload()
      }
  }, 1000);
}

let itemList = new Array(9).fill(null);
let craftedItemList = null;


function updateCraftingList() {
  let craftingGrid = document.querySelectorAll("#x33rect .cell"); 
  let images = document.querySelectorAll("img"); 


  craftingGrid.forEach((cell, index) => {
      let cellRect = cell.getBoundingClientRect();

      let itemFound = false; 

      images.forEach(img => {
          let imgRect = img.getBoundingClientRect();
        
          let imgCenterX = imgRect.left + imgRect.width / 2;
          let imgCenterY = imgRect.top + imgRect.height / 2;

          if (
              imgCenterX > cellRect.left && imgCenterX < cellRect.right &&
              imgCenterY > cellRect.top && imgCenterY < cellRect.bottom
          ) {
              itemList[index] = img.src.split('/').pop().replace(".png", ""); 
              itemFound = true; 
          }
      });

      if (!itemFound) {
          itemList[index] = null;
      }
  });
  checkCorrectCraft()
}


function chooseCraft() {
  const craftableItems = window.items_data.filter(item => 
    item.craftable && item.difficulty === difficulty);


  if (craftableItems.length > 0) {
    const randomIndex = Math.floor(Math.random() * craftableItems.length);
    const randomItem = craftableItems[randomIndex];
    craftedItemList = randomItem.recipe;
    document.getElementById("x11rect").style.background = `url(${difficulty}_item/${randomItem.picture}.png)`;
    document.getElementById("x11rect").style.backgroundRepeat = "no-repeat";
    document.getElementById("x11rect").style.backgroundSize = "7rem"
  } else {
    console.log("Nincs item.");
  }

}

function checkCorrectCraft() {
  let isCraftCorrect = false;

  for (let i = 0; i < craftedItemList.length; i++) {
    let recipe = craftedItemList[i];

    let isRecipeMatch = true;

    for (let j = 0; j < recipe.length; j++) {
      if (recipe[j] !== itemList[j]) {
        console.log(recipe , itemList)
        isRecipeMatch = false;
        break;
      }
    }
    if (isRecipeMatch) {
      isCraftCorrect = true;
      break;
    }
  }

  if (isCraftCorrect) {
    console.log("Hurrá, a crafting sikerült!");
  } else {
    console.log("A crafting nem helyes.");
  }
}


