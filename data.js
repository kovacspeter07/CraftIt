const items_data = [
  /**Easy (40)*/
  {
    picture: "stone_axe",
    craftable: true,
    difficulty: "easy",
    recipe: [
      ["cobblestone", "cobblestone", null, "cobblestone", "stick", null, null, "stick", null],
      [null, "cobblestone", "cobblestone", null, "cobblestone", "stick", null, null, "stick"],
    ],
  },
  {
    picture: "stone_hoe",
    craftable: true,
    difficulty: "easy",
    recipe: [
      ["cobblestone","cobblestone", null, null, "stick", null, null, "stick", null],
      [null, "cobblestone", "cobblestone", null, null, "stick", null, null, "stick"],
    ],
  },
  {
    picture: "stone_sword",
    craftable: true,
    difficulty: "easy",
    recipe: [
      [null, "cobblestone", null, null, "cobblestone", null, null, "stick", null],
      ["cobblestone", null, null, "cobblestone", null, null, "stick", null, null],
      [null, null, "cobblestone", null, null, "cobblestone", null, null, "stick"],
    ],
  },
  {
    picture: "stone_pickaxe",
    craftable: true,
    difficulty: "easy",
    recipe: [
      ["cobblestone", "cobblestone", "cobblestone", null, "stick", null, null, "stick", null],
    ],
  },
  {
    picture: "stone_shovel",
    craftable: true,
    difficulty: "easy",
    recipe: [
        [null, "cobblestone", null, null, "stick", null, null, "stick", null],
        ["cobblestone", null, null, "stick", null, null, "stick", null, null],
        [null, null, "cobblestone", null, null, "stick", null, null, "stick"],
      ],
  },
  {
    picture: "iron_axe",
    craftable: true,
    difficulty: "easy",
    recipe: [
      ["iron", "iron", null, "iron", "stick", null, null, "stick", null],
      [null, "iron", "iron", null, "iron", "stick", null, null, "stick"],
    ],
  },
  {
    picture: "iron_hoe",
    craftable: true,
    difficulty: "easy",
    recipe: [
      ["iron", "iron", null, null, "stick", null, null, "stick", null],
      [null, "iron", "iron", null, null, "stick", null, null, "stick"],
    ],
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
  },
  {
    picture: "iron_pickaxe",
    craftable: true,
    difficulty: "easy",
    recipe: [
      ["iron", "iron", "iron", null, "stick", null, null, "stick", null],
    ],
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
  },
  {
    picture: "iron_helmet",
    craftable: true,
    difficulty: "easy",
    recipe: [
        ["iron","iron","iron","iron",null,"iron",null,null,null],
        [null,null,null,"iron","iron","iron","iron",null,"iron"],
      ],
  },
  {
    picture: "iron_chestplate",
    craftable: true,
    difficulty: "easy",
    recipe: [
        ["iron",null,"iron","iron","iron","iron","iron","iron","iron"],
        
      ],
  },
  {
    picture: "iron_leggings",
    craftable: true,
    difficulty: "easy",
    recipe: [
        ["iron","iron","iron","iron",null,"iron","iron",null,"iron"],
      ],
  },
  {
    picture: "iron_boots",
    craftable: true,
    difficulty: "easy",
    recipe: [
        ["iron",null,"iron","iron",null,"iron",null,null,null],
        [null,null,null,"iron",null,"iron","iron",null,"iron",],
      ],
  },
  {
    picture: "gold_axe",
    craftable: true,
    difficulty: "easy",
    recipe: [
      ["gold", "gold", null, "gold", "stick", null, null, "stick", null],
      [null, "gold", "gold", null, "gold", "stick", null, null, "stick"],
    ],
  },
  {
    picture: "gold_hoe",
    craftable: true,
    difficulty: "easy",
    recipe: [
      ["gold", "gold", null, null, "stick", null, null, "stick", null],
      [null, "gold", "gold", null, null, "stick", null, null, "stick"],
    ],
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
  },
  {
    picture: "gold_pickaxe",
    craftable: true,
    difficulty: "easy",
    recipe: [
      ["gold", "gold", "gold", null, "stick", null, null, "stick", null],
    ],
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
  },
  {
    picture: "diamond_axe",
    craftable: true,
    difficulty: "easy",
    recipe: [
      ["diamond", "diamond", null, "diamond", "stick", null, null, "stick", null],
      [null, "diamond", "diamond", null, "diamond", "stick", null, null, "stick"],
    ],
  },
  {
    picture: "diamond_hoe",
    craftable: true,
    difficulty: "easy",
    recipe: [
      ["diamond", "diamond", null, null, "stick", null, null, "stick", null],
      [null, "diamond", "diamond", null, null, "stick", null, null, "stick"],
    ],
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
  },
  {
    picture: "diamond_pickaxe",
    craftable: true,
    difficulty: "easy",
    recipe: [
      ["diamond", "diamond", "diamond", null, "stick", null, null, "stick", null],
    ],
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
  },
  
  {
    picture: "oak_boat",
    craftable: true,
    difficulty: "easy",
    recipe: [
      ["oak_planks", null, "oak_planks", "oak_planks", "oak_planks","oak_planks", null, null, null],
      [null, null, null, "oak_planks",null,"oak_planks","oak_planks","oak_planks", "oak_planks"],
    ],
  },
  {
    picture: "oak_door",
    craftable: true,
    difficulty: "easy",
    recipe: [
      ["oak_planks","oak_planks",null , "oak_planks", "oak_planks",null,"oak_planks", "oak_planks", null],
      [null,"oak_planks","oak_planks" , null,"oak_planks","oak_planks",null, "oak_planks", "oak_planks"],
    ],
  },
  {
    picture: "oak_trapdoor",
    craftable: true,
    difficulty: "easy",
    recipe: [
      ["oak_planks","oak_planks","oak_planks" , "oak_planks", "oak_planks","oak_planks",null, null, null],
      [null,null,null ,"oak_planks","oak_planks","oak_planks","oak_planks", "oak_planks", "oak_planks"],
    ],
  },
  {
    picture: "copper_door",
    craftable: true,
    difficulty: "easy",
    recipe: [
      ["copper","copper",null , "copper", "copper",null,"copper", "copper", null],
      [null,"copper","copper" , null,"copper","copper",null, "copper", "copper"],
    ],
  },
  {
    picture: "copper_trapdoor",
    craftable: true,
    difficulty: "easy",
    recipe: [
      ["copper","copper","copper" , "copper", "copper","copper",null, null, null],
      [null,null,null ,"copper","copper","copper","copper", "copper", "copper"],
    ],
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
  },
  {
    picture: "furnace",
    craftable: true,
    difficulty: "easy",
    recipe: [
      ["cobblestone", "cobblestone", "cobblestone", "cobblestone", null, "cobblestone", "cobblestone", "cobblestone"," cobblestone"]
    ],
  },
  {
    picture: "bucket",
    craftable: true,
    difficulty: "easy",
    recipe: [
      ["iron", null, "iron", null, "iron", null,null, null,null],
      [null,null, null, "iron", null, "iron", null, "iron",null],
    ],
  },
  {
    picture: "torch",
    craftable: true,
    difficulty: "easy",
    recipe: [
      ["coal", null, null, "stick", null, null,null, null,null],
      [null, null,null,"coal", null, null, "stick", null, null,],
      [null, "coal", null, null,"stick", null,null, null,null],
      [null, null,null,null, "coal", null, null,"stick", null],
      [null, null, "coal", null,null, "stick",null, null,null],
      [null, null,null,null, null, "coal", null,null, "stick",],
    ],
  },
  {
    picture: "flint_and_steel",
    craftable: true,
    difficulty: "easy",
    recipe: [
      ["flint", null, null, null, "iron", null,null, null,null],
      [null, null,null,"flint", null, null, null, "iron", null,],
      [null, "flint", null, null,null, "iron",null, null,null],
      [null, null,null,null, "flint", null, null,null, "iron"],
    ],
  },
  {
    picture: "bow",
    craftable: true,
    difficulty: "easy",
    recipe: [
      [null,"stick","string","stick",null,"string",null,"stick","string"],
    ],
  },
  {
    picture: "fishing_rod",
    craftable: true,
    difficulty: "easy",
    recipe: [
      [null,null,"stick",null,"stick","string","stick",null,"string"],
    ],
  },

  {
    picture: "lever",
    craftable: true,
    difficulty: "easy",
    recipe: [
      ["stick", null, null,"cobblestone",null , null,null, null,null],
      [null,"stick",null,null ,"cobblestone", null,null, null,null],
      [ null, null,"stick",null , null,"cobblestone", null,null, null],
      [null, null,null,"stick", null, null,"cobblestone",null , null],
      [null, null,null,null,"stick",null,null ,"cobblestone", null],
      [null,null, null,null, null,"stick",null , null,"cobblestone"],
    ],
  },
  {
    picture: "turtle_helmet",
    craftable: true,
    difficulty: "easy",
    recipe: [
        ["turtle_scute","turtle_scute","turtle_scute","turtle_scute",null,"turtle_scute",null,null,null],
        [null,null,null,"turtle_scute","turtle_scute","turtle_scute","turtle_scute",null,"turtle_scute"],
      ],
  },
  {
    picture: "bone_meal",
    craftable: true,
    difficulty: "easy",
    recipe: [
      ["bone", null, null,null,null,null,null, null,null],
      [null,"bone", null, null,null,null,null,null, null],
      [null,null,"bone", null,null,null,null, null,null],
      [null, null,null,"bone",null,null,null, null,null],
      [null, null,null,null,"bone", null,null, null,null],
      [null, null,null,null,null,"bone",null, null,null],
      [null, null,null,null, null,null,"bone", null,null],
      [null, null,null,null,null,null, null,"bone",null],
      [null, null,null,null,null,null, null,null,"bone"],
    ],
  },
  {
    picture: "blaze_powder",
    craftable: true,
    difficulty: "easy",
    recipe: [
      ["blaze_rod", null, null,null,null,null,null, null,null],
      [null,"blaze_rod", null, null,null,null,null,null, null],
      [null,null,"blaze_rod", null,null,null,null, null,null],
      [null, null,null,"blaze_rod",null,null,null, null,null],
      [null, null,null,null,"blaze_rod", null,null, null,null],
      [null, null,null,null,null,"blaze_rod",null, null,null],
      [null, null,null,null, null,null,"blaze_rod", null,null],
      [null, null,null,null,null,null, null,"blaze_rod",null],
      [null, null,null,null,null,null, null,null,"blaze_rod"],
    ],
  },

  /**Medium (10)*/
  {
    picture: "arrow",
    craftable: true,
    difficulty: "medium",
    recipe: [
      [null,"flint",null,null,"stick",null,null,"feather",null],
      ["flint", null,null,"stick", null,null,"feather",null,null],
      [null,null,"flint", null,null, "stick",null,null,"feather"],
    ],
  },
  {
    picture: "book",
    craftable: true,
    difficulty: "medium",
    recipe: [
      ["paper","paper","paper", "leather",null, null, null, null,null],
      [null, null, null,"paper","paper","paper", "leather", null,null],

    ],
  },
  {
    picture: "bookshelf",
    craftable: true,
    difficulty: "medium",
    recipe: [
      ["oak_planks","oak_planks","oak_planks", "book","book", "book","oak_planks","oak_planks","oak_planks"],
    ],
  },
  {
    picture: "campfire",
    craftable: true,
    difficulty: "medium",
    recipe: [
      [null,"stick", null, "stick","coal", "stick", "oak_log", "oak_log","oak_log"],
    ],
  },
  {
    picture: "brewing_stand",
    craftable: true,
    difficulty: "medium",
    recipe: [
      [null,"blaze_rod", null, "cobblestone", "cobblestone","cobblestone",null, null,null],
      [null, null,null,null,"blaze_rod", null, "cobblestone", "cobblestone","cobblestone"],
    ],
  },
  {
    picture: "honeycomb_block",
    craftable: true,
    difficulty: "medium",
    recipe: [
      [null,"honeycomb_block","honeycomb_block", null, "honeycomb_block","honeycomb_block",null, null,null],
      ["honeycomb_block", "honeycomb_block",null,"honeycomb_block","honeycomb_block", null,null, null,null],
      [null, null,null,null,"honeycomb_block","honeycomb_block", null, "honeycomb_block","honeycomb_block"],
      [null, null,null,"honeycomb_block", "honeycomb_block",null,"honeycomb_block","honeycomb_block", null],
    ],
  },
  {
    picture: "beehive",
    craftable: true,
    difficulty: "medium",
    recipe: [
      ["oak_planks","oak_planks","oak_planks", "honeycomb_block", "honeycomb_block","honeycomb_block","oak_planks","oak_planks","oak_planks"],
    ],
  },
  {
    picture: "lantern",
    craftable: true,
    difficulty: "medium",
    recipe: [
      ["iron_nugget","iron_nugget", "iron_nugget", "iron_nugget","torch", "iron_nugget", "iron_nugget", "iron_nugget","iron_nugget"],
    ],
  },
  {
    picture: "conduit",
    craftable: true,
    difficulty: "medium",
    recipe: [
      ["nautilus_shell","nautilus_shell", "nautilus_shell", "nautilus_shell","heart_of_the_sea", "nautilus_shell", "nautilus_shell", "nautilus_shell","nautilus_shell"],
    ],
  },
  { 
    picture: "golden_apple",
    craftable: true,
    difficulty: "medium",
    recipe: [
      ["gold","gold", "gold", "gold", "apple", "gold", "gold","gold", "gold"],
    ],
  },
  {
    picture: "fleatching_table",
    craftable: true,
    difficulty: "medium",
    recipe: [
      ["paper","paper","oak_planks", "oak_planks",null, "oak_planks", "oak_planks", null,null],
      ["paper","paper","oak_planks", "oak_planks",null, "oak_planks", "oak_planks", null,null],
    ],
  },
  {
    picture: "smithing_table",
    craftable: true,
    difficulty: "medium",
    recipe: [
      ["paper","paper","oak_planks", "oak_planks",null, "oak_planks", "oak_planks", null,null],
      ["paper","paper","oak_planks", "oak_planks",null, "oak_planks", "oak_planks", null,null],
    ],
  },
  {
    picture: "cartography_table",
    craftable: true,
    difficulty: "medium",
    recipe: [
      ["paper","paper","oak_planks", "oak_planks",null, "oak_planks", "oak_planks", null,null],
      ["paper","paper","oak_planks", "oak_planks",null, "oak_planks", "oak_planks", null,null],
    ],
  },
  {
    picture: "magma_cream",
    craftable: true,
    difficulty: "easy",
    recipe: [
      ["stick", null, null,"cobblestone",null , null,null, null,null],
      [null,"stick",null,null ,"cobblestone", null,null, null,null],
      [ null, null,"stick",null , null,"cobblestone", null,null, null],
      [null, null,null,"stick", null, null,"cobblestone",null , null],
      [null, null,null,null,"stick",null,null ,"cobblestone", null],
      [null,null, null,null, null,"stick",null , null,"cobblestone"],
    ],
  },
  { 
    picture: "ladder",
    craftable: true,
    difficulty: "medium",
    recipe: [
      ["gold","gold", "gold", "gold", "apple", "gold", "gold","gold", "gold"],
    ],
  },
  { 
    picture: "rail",
    craftable: true,
    difficulty: "medium",
    recipe: [
      ["gold","gold", "gold", "gold", "apple", "gold", "gold","gold", "gold"],
    ],
  },
  { 
    picture: "powered_rail",
    craftable: true,
    difficulty: "medium",
    recipe: [
      ["gold","gold", "gold", "gold", "apple", "gold", "gold","gold", "gold"],
    ],
  },
  { 
    picture: "piston",
    craftable: true,
    difficulty: "medium",
    recipe: [
      ["gold","gold", "gold", "gold", "apple", "gold", "gold","gold", "gold"],
    ],
  },
  { 
    picture: "piston_sticky",
    craftable: true,
    difficulty: "medium",
    recipe: [
      ["gold","gold", "gold", "gold", "apple", "gold", "gold","gold", "gold"],
    ],
  },
  { 
    picture: "spyglass",
    craftable: true,
    difficulty: "medium",
    recipe: [
      ["gold","gold", "gold", "gold", "apple", "gold", "gold","gold", "gold"],
    ],
  },

  

  /**Hard*/
  /**ingredients*/ 
  {
    picture: "coal",
    craftable: false,
    difficulty: undefined,
    recipe: null,
  },
  {
    picture: "copper",
    craftable: false,
    difficulty: undefined,
    recipe: null,
  },
  {
    picture: "iron",
    craftable: false,
    difficulty: undefined,
    recipe: null,
  },
  {
    picture: "gold",
    craftable: false,
    difficulty:undefined,
    recipe: null,
  },
  {
    picture: "diamond",
    craftable: false,
    difficulty:undefined,
    recipe: null,
  },
  {
    picture: "netherite",
    craftable: false,
    difficulty:undefined,
    recipe: null,
  },
  {
    picture: "stick",
    craftable: false,
    difficulty: undefined,
    recipe: null,
  },
  {
    picture: "oak_log",
    craftable: false,
    difficulty: undefined,
    recipe: null,
  },
  {
    picture: "oak_planks",
    craftable: false,
    difficulty: undefined,
    recipe: null,
  },
  {
    picture: "cobblestone",
    craftable: false,
    difficulty: undefined,
    recipe: null,
  },
  {
    picture: "apple",
    craftable: false,
    difficulty:undefined,
    recipe: null,
  },
  {
    picture: "blaze_rod",
    craftable: false,
    difficulty:undefined,
    recipe: null,
  },
  {
    picture: "flint",
    craftable: false,
    difficulty:undefined,
    recipe: null,
  },
  {
    picture: "turtle_scute",
    craftable: false,
    difficulty:undefined,
    recipe: null,
  },
  {
    picture: "bone",
    craftable: false,
    difficulty:undefined,
    recipe: null,
  },
  {
    picture: "string",
    craftable: false,
    difficulty:undefined,
    recipe: null,
  },
  {
    picture: "honeycomb",
    craftable: false,
    difficulty:undefined,
    recipe: null,
  },
  {
    picture: "iron_nugget",
    craftable: false,
    difficulty:undefined,
    recipe: null,
  },
  {
    picture: "nautilus_shell",
    craftable: false,
    difficulty:undefined,
    recipe: null,
  },
  {
    picture: "heart_of_the_sea",
    craftable: false,
    difficulty:undefined,
    recipe: null,
  },
  {
    picture: "feather",
    craftable: false,
    difficulty:undefined,
    recipe: null,
  },
  {
    picture: "slime_ball",
    craftable: false,
    difficulty:undefined,
    recipe: null,
  },
  {
    picture: "paper",
    craftable: false,
    difficulty:undefined,
    recipe: null,
  },
  {
    picture: "leather",
    craftable: false,
    difficulty:undefined,
    recipe: null,
  },



];
window.items_data = items_data;
