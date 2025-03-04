const items_data = [
  /**Easy (20)*/
  {
    picture: "iron_axe",
    craftable: true,
    difficulty: "easy",
    recipe: [
      ["iron", "iron", null, "iron", "stick", null, null, "stick", null],
      [null, "iron", "iron", null, "iron", "stick", null, null, "stick"],
    ],
    cellID: undefined,
  },
  {
    picture: "iron_hoe",
    craftable: true,
    difficulty: "easy",
    recipe: [
      ["iron", "iron", null, null, "stick", null, null, "stick", null],
      [null, "iron", "iron", null, null, "stick", null, null, "stick"],
    ],
    cellID: undefined,
  },
  {
    picture: "iron_sword",
    craftable: true,
    difficulty: "easy",
    recipe: [
      [null, "iron", null, null, "iron", null, null, "stick", null],
      ["iron", null, null, "iron", null, null, "stick", null, null],
      [null, null, "iron", null, null, "iron", null, null, "stick"],
    ],
    cellID: undefined,
  },
  {
    picture: "iron_pickaxe",
    craftable: true,
    difficulty: "easy",
    recipe: [
      ["iron", "iron", "iron", null, "stick", null, null, "stick", null],
    ],
    cellID: undefined,
  },
  {
    picture: "iron_shovel",
    craftable: true,
    difficulty: "easy",
    recipe: [
        [null, "iron", null, null, "stick", null, null, "stick", null],
        ["iron", null, null, "stick", null, null, "stick", null, null],
        [null, null, "iron", null, null, "stick", null, null, "stick"],
      ],
      cellID: undefined,
  },
  {
    picture: "gold_axe",
    craftable: true,
    difficulty: "easy",
    recipe: [
      ["gold", "gold", null, "gold", "stick", null, null, "stick", null],
      [null, "gold", "gold", null, "gold", "stick", null, null, "stick"],
    ],
    cellID: undefined,
  },
  {
    picture: "gold_hoe",
    craftable: true,
    difficulty: "easy",
    recipe: [
      ["gold", "gold", null, null, "stick", null, null, "stick", null],
      [null, "gold", "gold", null, null, "stick", null, null, "stick"],
    ],
    cellID: undefined,
  },
  {
    picture: "gold_sword",
    craftable: true,
    difficulty: "easy",
    recipe: [
      [null, "gold", null, null, "gold", null, null, "stick", null],
      ["gold", null, null, "gold", null, null, "stick", null, null],
      [null, null, "gold", null, null, "gold", null, null, "stick"],
    ],
    cellID: undefined,
  },
  {
    picture: "gold_pickaxe",
    craftable: true,
    difficulty: "easy",
    recipe: [
      ["gold", "gold", "gold", null, "stick", null, null, "stick", null],
    ],
    cellID: undefined,
  },
  {
    picture: "gold_shovel",
    craftable: true,
    difficulty: "easy",
    recipe: [
        [null, "gold", null, null, "stick", null, null, "stick", null],
        ["gold", null, null, "stick", null, null, "stick", null, null],
        [null, null, "gold", null, null, "stick", null, null, "stick"],
      ],
      cellID: undefined,
  },
  {
    picture: "diamond_axe",
    craftable: true,
    difficulty: "easy",
    recipe: [
      ["diamond", "diamond", null, "diamond", "stick", null, null, "stick", null],
      [null, "diamond", "diamond", null, "diamond", "stick", null, null, "stick"],
    ],
    cellID: undefined,
  },
  {
    picture: "diamond_hoe",
    craftable: true,
    difficulty: "easy",
    recipe: [
      ["diamond", "diamond", null, null, "stick", null, null, "stick", null],
      [null, "diamond", "diamond", null, null, "stick", null, null, "stick"],
    ],
    cellID: undefined,
  },
  {
    picture: "diamond_sword",
    craftable: true,
    difficulty: "easy",
    recipe: [
      [null, "diamond", null, null, "diamond", null, null, "stick", null],
      ["diamond", null, null, "diamond", null, null, "stick", null, null],
      [null, null, "diamond", null, null, "diamond", null, null, "stick"],
    ],
    cellID: undefined,
  },
  {
    picture: "diamond_pickaxe",
    craftable: true,
    difficulty: "easy",
    recipe: [
      ["diamond", "diamond", "diamond", null, "stick", null, null, "stick", null],
    ],
    cellID: undefined,
  },
  {
    picture: "diamond_shovel",
    craftable: true,
    difficulty: "easy",
    recipe: [
        [null, "diamond", null, null, "stick", null, null, "stick", null],
        ["diamond", null, null, "stick", null, null, "stick", null, null],
        [null, null, "diamond", null, null, "stick", null, null, "stick"],
      ],
      cellID: undefined,
  },
  {
    picture: "oak_boat",
    craftable: true,
    difficulty: "easy",
    recipe: [
      ["oak_planks", null, "oak_planks", "oak_planks", "oak_planks","oak_planks", null, null, null],
      [null, null, null, "oak_planks",null,"oak_planks","oak_planks","oak_planks", "oak_planks"],
    ],
    cellID: undefined,
  },
  {
    picture: "oak_door",
    craftable: true,
    difficulty: "easy",
    recipe: [
      ["oak_planks","oak_planks",null , "oak_planks", "oak_planks",null,"oak_planks", "oak_planks", null],
      [null,"oak_planks","oak_planks" , null,"oak_planks","oak_planks",null, "oak_planks", "oak_planks"],
    ],
    cellID: undefined,
  },
  {
    picture: "oak_trapdoor",
    craftable: true,
    difficulty: "easy",
    recipe: [
      ["oak_planks","oak_planks","oak_planks" , "oak_planks", "oak_planks","oak_planks",null, null, null],
      [null,null,null ,"oak_planks","oak_planks","oak_planks","oak_planks", "oak_planks", "oak_planks"],
    ],
    cellID: undefined,
  },
  {
    picture: "crafting_table",
    craftable: true,
    difficulty: "easy",
    recipe: [
      ["oak_planks","oak_planks",null , "oak_planks", "oak_planks",null,null, null, null],
      [null,null,null ,"oak_planks","oak_planks",null,"oak_planks", "oak_planks", null],
      [null,null,null ,null,"oak_planks","oak_planks",null, "oak_planks", "oak_planks"],
      [null,"oak_planks","oak_planks" ,null,"oak_planks","oak_planks", null,  null, null],
    ],
    cellID: undefined,
  },
  {
    picture: "furnace",
    craftable: true,
    difficulty: "easy",
    recipe: [
      ["cobblestone", "cobblestone", "cobblestone", "cobblestone", null, "cobblestone", "cobblestone", "cobblestone"," cobblestone"],
    ],
    cellID: undefined,
  },

  /**Medium*/
  /**Hard*/
  /**ingredients*/ 
  {
    picture: "copper",
    craftable: false,
    difficulty: undefined,
    recipe: null,
    cellID: undefined,
  },
  {
    picture: "iron",
    craftable: false,
    difficulty: undefined,
    recipe: null,
    cellID: undefined,
  },
  {
    picture: "gold",
    craftable: false,
    difficulty:undefined,
    recipe: null,
    cellID: undefined,
  },
  {
    picture: "diamond",
    craftable: false,
    difficulty:undefined,
    recipe: null,
    cellID: undefined,
  },
  {
    picture: "netherite",
    craftable: false,
    difficulty:undefined,
    recipe: null,
    cellID: undefined,
  },
  {
    picture: "stick",
    craftable: false,
    difficulty: undefined,
    recipe: null,
    cellID: undefined,
  },
  {
    picture: "oak_log",
    craftable: false,
    difficulty: undefined,
    recipe: null,
    cellID: undefined,
  },
  {
    picture: "oak_planks",
    craftable: false,
    difficulty: undefined,
    recipe: null,
    cellID: undefined,
  },
  {
    picture: "cobblestone",
    craftable: false,
    difficulty: undefined,
    recipe: null,
    cellID: undefined
  },
  {
    picture: "apple",
    craftable: false,
    difficulty:undefined,
    recipe: null,
    cellID: undefined,
  },
  {
    picture: "blaze_rod",
    craftable: false,
    difficulty:undefined,
    recipe: null,
    cellID: undefined,
  },
  


];
window.items_data = items_data;
