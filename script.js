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

let whereIsItem1 = {
    x: undefined,
    y: undefined,
  };

  let whereIsItem2 = {
    x: undefined,
    y: undefined,
  };
  let whereIsItem3 = {
    x: undefined,
    y: undefined,
  };
  let whereIsItem4 = {
    x: undefined,
    y: undefined,
  };
  let whereIsItem5 = {
    x: undefined,
    y: undefined,
  };
//This function is going to have to be changed further in the development
function putItemDown(){
    if (whereIsItem.id == 1){
        whereIsItem1.x = whereIsItem.x;
        whereIsItem1.y = whereIsItem.y;
    }
    if (whereIsItem.id == 2){
        whereIsItem2.x = whereIsItem.x;
        whereIsItem2.y = whereIsItem.y;
    }
    if (whereIsItem.id == 3){
      whereIsItem3.x = whereIsItem.x;
      whereIsItem3.y = whereIsItem.y;
    }
    if (whereIsItem.id == 4){
      whereIsItem4.x = whereIsItem.x;
      whereIsItem4.y = whereIsItem.y;
    }
    if (whereIsItem.id == 5){
      whereIsItem5.x = whereIsItem.x;
      whereIsItem5.y = whereIsItem.y;
    }
    var item1 =`
    <img class="item" id="1" src="item/stick.png" ${whereIsItem.isDragged? "grabbed": "not-grabbed"}"
    style="position: absolute; left: ${whereIsItem1.x}px; top: ${whereIsItem1.y}px;"
    onmousedown="dragStart(1)"
    onmouseup = dragEnd()
    onmousemove = dragMouseMove(window.event)
    >
    `;
    var item2 =`
    <img class="item" id="2" src="item/stick.png" ${whereIsItem.isDragged? "grabbed": "not-grabbed"}"
    style="position: absolute; left: ${whereIsItem2.x}px; top: ${whereIsItem2.y}px;"
    onmousedown="dragStart(2)"
    onmouseup = dragEnd()
    onmousemove = dragMouseMove(window.event)
    >
`;
     var item3 =`
    <img class="item" id="3" src="easy_item/iron.png" ${whereIsItem.isDragged? "grabbed": "not-grabbed"}"
    style="position: absolute; left: ${whereIsItem3.x}px; top: ${whereIsItem3.y}px;"
    onmousedown="dragStart(3)"
    onmouseup = dragEnd()
    onmousemove = dragMouseMove(window.event)
    >
`;
     var item4 =`
    <img class="item" id="4" src="easy_item/iron.png" ${whereIsItem.isDragged? "grabbed": "not-grabbed"}"
    style="position: absolute; left: ${whereIsItem4.x}px; top: ${whereIsItem4.y}px;"
    onmousedown="dragStart(4)"
    onmouseup = dragEnd()
    onmousemove = dragMouseMove(window.event)
    >
`;
     var item5 =`
    <img class="item" id="5" src="easy_item/iron.png" ${whereIsItem.isDragged? "grabbed": "not-grabbed"}"
    style="position: absolute; left: ${whereIsItem5.x}px; top: ${whereIsItem5.y}px;"
    onmousedown="dragStart(5)"
    onmouseup = dragEnd()
    onmousemove = dragMouseMove(window.event)
    >
`;
    
    //the cell is going to have to be randomized
  var item = item1 + item2 + item3 + item4 + item5
  document.getElementById('items').innerHTML = item;
}

function dragStart(num){
  whereIsItem.id = num;
  if (whereIsItem.id == 1){
    whereIsItem.x = whereIsItem1.x;
    whereIsItem.y = whereIsItem1.y;
  }
  if (whereIsItem.id == 2){
    whereIsItem.x = whereIsItem2.x;
    whereIsItem.y = whereIsItem2.y;
  }
  if (whereIsItem.id == 3){
    whereIsItem.x = whereIsItem3.x;
    whereIsItem.y = whereIsItem3.y;
  }
  if (whereIsItem.id == 4){
    whereIsItem.x = whereIsItem4.x;
    whereIsItem.y = whereIsItem4.y;
  }
  if (whereIsItem.id == 5){
    whereIsItem.x = whereIsItem5.x;
    whereIsItem.y = whereIsItem5.y;
  }
  whereIsItem.isDragged = true;
  putItemDown();
}

function dragEnd(){
  whereIsItem.isDragged = false;
  gridSelect();
  putItemDown();
  updateCraftingList()
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
function gridSelect(){
  var itemrect = document.getElementById(whereIsItem.id).getBoundingClientRect();
  var x39rect = document.getElementById("x39rect").getBoundingClientRect();
  var x33rect = document.getElementById("x33rect").getBoundingClientRect();
  var x19rect = document.getElementById("x19rect").getBoundingClientRect();
  if (itemrect.top > x39rect.top - 50 && itemrect.bottom < x39rect.bottom + 50 && itemrect.left > x39rect.left - 50 && itemrect.right < x39rect.right + 50){
    x39selected();
  }
  else if (itemrect.top > x33rect.top - 50 && itemrect.bottom < x33rect.bottom + 50 && itemrect.left > x33rect.left - 50 && itemrect.right < x33rect.right + 50){
    x33selected();
  }
  else if (itemrect.top > x19rect.top - 50 && itemrect.bottom < x19rect.bottom + 50 && itemrect.left > x19rect.left - 50 && itemrect.right < x19rect.right + 50){
    x19selected();
  }
  else {
    snapback()
  }
}

function x39selected(){
  whichSquare(10, 37, "cell-");
}
function x33selected(){
  whichSquare(1, 10, "cell-crafting-");
}
function x19selected(){
  whichSquare(1, 10, "cell-");
}

function whichSquare(x, y, cellID){
  for (let i = x; i < y; i++) {
    let locCellID = cellID + i;
    var cellrect = document.getElementById(locCellID).getBoundingClientRect();
    var itemrect = document.getElementById(whereIsItem.id).getBoundingClientRect();
    if (itemrect.top > cellrect.top - 50 && itemrect.bottom < cellrect.bottom + 50 && itemrect.left > cellrect.left - 50 && itemrect.right < cellrect.right + 50){
      whereIsItem.x = document.getElementById(locCellID).getBoundingClientRect().left;
      whereIsItem.y = document.getElementById(locCellID).getBoundingClientRect().top;
      whereIsItem.lastposition = cellrect;
      break;
    }
  } 
}

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

// let spawnedItems = {
//   cellID: undefined,
//   id: "stick",
// };

// function changeSpawnedItems(cellID, id) {
//   for (let i = "stick"; i == "stick";) {
//     spawnedItems.cellID = cellID
//   } 
// }

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


