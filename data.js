const items_data = [
  /**Easy (40)*/
  {
    picture: "stone_axe",
    craftable: true,
    difficulty: "easy",
    recipe: [
      ["cobblestone", "cobblestone", null, "cobblestone", "stick", null, null, "stick", null],
      [null, "cobblestone", "cobblestone", null, "cobblestone", "stick", null, null, "stick"],
      [null, "cobblestone","cobblestone", null, "stick","cobblestone", null, "stick", null],
      [null, "cobblestone", "cobblestone", null, "cobblestone", "stick", null, null, "stick"],
    ],
  },
  {
    picture: "stone_hoe",
    craftable: true,
    difficulty: "easy",
    recipe: [
      ["cobblestone","cobblestone", null, null, "stick", null, null, "stick", null],
      [null,"cobblestone","cobblestone", null, "stick", null, null, "stick", null],
      ["cobblestone","cobblestone", null, "stick", null ,"stick", null, null, null],
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
      [null, "iron","iron", null, "stick","iron", null, "stick", null],
      [null, "iron", "iron", null, "iron", "stick", null, null, "stick"],
    ],
  },
  {
    picture: "iron_hoe",
    craftable: true,
    difficulty: "easy",
    recipe: [
      ["iron","iron", null, null, "stick", null, null, "stick", null],
      [null,"iron","iron", null, "stick", null, null, "stick", null],
      ["iron","iron", null, "stick", null ,"stick", null, null, null],
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
    picture: "golden_axe",
    craftable: true,
    difficulty: "easy",
    recipe: [
      ["gold", "gold", null, "cobblestone", "stick", null, null, "stick", null],
      [null, "gold", "gold", null, "gold", "stick", null, null, "stick"],
      [null, "gold","gold", null, "stick","gold", null, "stick", null],
      [null, "gold", "gold", null, "gold", "stick", null, null, "stick"],
    ],
  },
  {
    picture: "golden_hoe",
    craftable: true,
    difficulty: "easy",
    recipe: [
      ["gold","gold", null, null, "stick", null, null, "stick", null],
      [null,"gold","gold", null, "stick", null, null, "stick", null],
      ["gold","gold", null, "stick", null ,"stick", null, null, null],
      [null, "gold", "gold", null, null, "stick", null, null, "stick"],
    ],
  },
  {
    picture: "golden_sword",
    craftable: true,
    difficulty: "easy",
    recipe: [
      [null, "gold", null, null, "gold", null, null, "stick", null],
      ["gold", null, null, "gold", null, null, "stick", null, null],
      [null, null, "gold", null, null, "gold", null, null, "stick"],
    ],
  },
  {
    picture: "golden_pickaxe",
    craftable: true,
    difficulty: "easy",
    recipe: [
      ["gold", "gold", "gold", null, "stick", null, null, "stick", null],
    ],
  },
  {
    picture: "golden_shovel",
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
      ["diamond", "cobblestone", null, "diamond", "stick", null, null, "stick", null],
      [null, "diamond", "diamond", null, "diamond", "stick", null, null, "stick"],
      [null, "diamond","cobblestone", null, "stick","diamond", null, "stick", null],
      [null, "diamond", "diamond", null, "diamond", "stick", null, null, "stick"],
    ],
  },
  {
    picture: "diamond_hoe",
    craftable: true,
    difficulty: "easy",
    recipe: [
      ["diamond","diamond", null, null, "stick", null, null, "stick", null],
      [null,"diamond","diamond", null, "stick", null, null, "stick", null],
      ["diamond","diamond", null, "stick", null ,"stick", null, null, null],
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
    picture: "minecart",
    craftable: true,
    difficulty: "easy",
    recipe: [
      ["iron", null, "iron", "iron", "iron","iron", null, null, null],
      [null, null, null, "iron",null,"iron","iron","iron", "iron"],
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
  { 
    picture: "haybale",
    craftable: true,
    difficulty: "easy",
    recipe: [
      ["wheat","wheat", "wheat", "wheat","wheat", "wheat", "wheat","wheat", "wheat"],
    ],
  },
  { 
    picture: "bread",
    craftable: true,
    difficulty: "easy",
    recipe: [
      ["wheat","wheat", "wheat", null, null, null, null,null, null],
      [null, null, null,"wheat","wheat", "wheat", null,null, null],
      [null, null, null, null,null, null,"wheat","wheat", "wheat"],
    ],
  },
  { 
    picture: "dried_kelp_block",
    craftable: true,
    difficulty: "easy",
    recipe: [
      ["dried_kelp","dried_kelp", "dried_kelp", "dried_kelp","dried_kelp", "dried_kelp", "dried_kelp","dried_kelp", "dried_kelp"],
    ],
  },

  /**Medium (30)*/

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
      [null,"honeycomb","honeycomb", null, "honeycomb","honeycomb",null, null,null],
      ["honeycomb", "honeycomb",null,"honeycomb","honeycomb", null,null, null,null],
      [null, null,null,null,"honeycomb","honeycomb", null, "honeycomb","honeycomb"],
      [null, null,null,"honeycomb", "honeycomb",null,"honeycomb","honeycomb", null],
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
    picture: "polished_diorite",
    craftable: true,
    difficulty: "medium",
    recipe: [
      [null,"diorite","diorite", null, "diorite","diorite",null, null,null],
      ["diorite", "diorite",null,"diorite","diorite", null,null, null,null],
      [null, null,null,null,"diorite","diorite", null, "diorite","diorite"],
      [null, null,null,"diorite", "diorite",null,"diorite","diorite", null],
    ],
  },
  {
    picture: "polished_granite",
    craftable: true,
    difficulty: "medium",
    recipe: [
      [null,"granite","granite", null, "granite","granite",null, null,null],
      ["granite", "granite",null,"granite","granite", null,null, null,null],
      [null, null,null,null,"granite","granite", null, "granite","granite"],
      [null, null,null,"granite", "granite",null,"granite","granite", null],
    ],
  },
  {
    picture: "stone_bricks",
    craftable: true,
    difficulty: "medium",
    recipe: [
      [null,"stone","stone", null, "stone","stone",null, null,null],
      ["stone", "stone",null,"stone","stone", null,null, null,null],
      [null, null,null,null,"stone","stone", null, "stone","stone"],
      [null, null,null,"stone", "stone",null,"stone","stone", null],
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
    picture: "netherite",
    craftable: true,
    difficulty: "medium",
    recipe: [
      ["netherite_scrap","netherite_scrap", "netherite_scrap", "gold",null,"netherite_scrap", "gold", "gold","gold"],
    ],
  },
  {
    picture: "oak_sign",
    craftable: true,
    difficulty: "medium",
    recipe: [
      ["oak_planks","oak_planks", "oak_planks", "oak_planks","oak_planks","oak_planks", null, "stick",null],
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
    picture: "golden_carrot",
    craftable: true,
    difficulty: "medium",
    recipe: [
      ["gold_nugget","gold_nugget", "gold_nugget", "gold_nugget", "carrot", "gold_nugget", "gold_nugget","gold_nugget", "gold_nugget"],
    ],
  },
  {
    picture: "fleatching_table",
    craftable: true,
    difficulty: "medium",
    recipe: [
      ["feather","feather",null,"oak_planks", "oak_planks",null, "oak_planks", "oak_planks", null],
      [null,"feather","feather",null,"oak_planks", "oak_planks",null, "oak_planks", "oak_planks"],
    ],
  },
  {
    picture: "smithing_table",
    craftable: true,
    difficulty: "medium",
    recipe: [
      ["iron","iron",null,"oak_planks", "oak_planks",null, "oak_planks", "oak_planks", null],
      [null,"iron","iron",null,"oak_planks", "oak_planks", null,"oak_planks", "oak_planks"],
    ],
  },
  {
    picture: "cartography_table",
    craftable: true,
    difficulty: "medium",
    recipe: [
      ["paper","paper",null,"oak_planks", "oak_planks",null, "oak_planks", "oak_planks", null],
      [null,"paper","paper",null,"oak_planks", "oak_planks",null, "oak_planks", "oak_planks"],
    ],
  },
  {
    picture: "magma_cream",
    craftable: true,
    difficulty: "medium",
    recipe: [
      ["slime_ball", "blaze_powder", null,null,null , null,null, null,null],
      [null,"slime_ball", "blaze_powder", null,null , null,null, null,null],
      [null,null,null ,"slime_ball", "blaze_powder",  null,null, null,null],
      [null,null,null , null,"slime_ball", "blaze_powder", null, null,null],
      [null,null,null , null,null, null,"slime_ball", "blaze_powder", null],
      [null,null,null , null,null, null,null,"slime_ball", "blaze_powder"],
    ],
  },
  { 
    picture: "ladder",
    craftable: true,
    difficulty: "medium",
    recipe: [
      ["stick",null, "stick", "stick", "stick", "stick", "stick",null, "stick"],
    ],
  },
  { 
    picture: "rail",
    craftable: true,
    difficulty: "medium",
    recipe: [
      ["iron",null, "iron", "iron", "stick", "iron", "iron",null, "iron"],
    ],
  },
  { 
    picture: "powered_rail",
    craftable: true,
    difficulty: "medium",
    recipe: [
      ["gold",null, "gold", "gold", "stick", "gold", "gold","redstone", "gold"],
    ],
  },
  { 
    picture: "piston",
    craftable: true,
    difficulty: "medium",
    recipe: [
      ["oak_planks","oak_planks", "oak_planks", "cobblestone", "iron", "cobblestone", "cobblestone","redstone", "cobblestone"],
    ],
  },
  { 
    picture: "piston_sticky",
    craftable: true,
    difficulty: "medium",
    recipe: [
      ["slime_ball", null, null,"piston",null , null,null, null,null],
      [null,"slime_ball",null,null ,"piston", null,null, null,null],
      [ null, null,"slime_ball",null , null,"piston", null,null, null],
      [null, null,null,"slime_ball", null, null,"piston",null , null],
      [null, null,null,null,"slime_ball",null,null ,"piston", null],
      [null,null, null,null, null,"slime_ball",null , null,"piston"]
    ],
  },
  { 
    picture: "spyglass",
    craftable: true,
    difficulty: "medium",
    recipe: [
      [null,"amethyst_shard",null,null,"copper",null,null,"copper",null],
      ["amethyst_shard", null,null,"copper", null,null,"copper",null,null],
      [null,null,"amethyst_shard", null,null, "copper",null,null,"copper"],,
    ],
  },
  { 
    picture: "compass",
    craftable: true,
    difficulty: "medium",
    recipe: [
      [null,"iron",null,"iron","redstone","iron",null,"iron",null],
    ],
  },
  { 
    picture: "clock",
    craftable: true,
    difficulty: "medium",
    recipe: [
      [null,"gold",null,"gold","redstone","gold",null,"gold",null],
    ],
  },
  { 
    picture: "blast_furnace",
    craftable: true,
    difficulty: "medium",
    recipe: [
      ["iron","iron", "iron", "iron", "furnace", "iron", "smooth_stone","smooth_stone", "smooth_stone"],
    ],
  },
  { 
    picture: "smoker",
    craftable: true,
    difficulty: "medium",
    recipe: [
      [null,"oak_log",null,"oak_log","furnace","oak_log",null,"oak_log",null],
    ],
  },
  { 
    picture: "tnt",
    craftable: true,
    difficulty: "medium",
    recipe: [
      ["sand","gunpowder", "sand","gunpowder", "sand","gunpowder", "sand","gunpowder", "sand"],
    ],
  },
  { 
    picture: "enchanting_table",
    craftable: true,
    difficulty: "medium",
    recipe: [
      [null,"book", null, "diamond", "obsidian", "diamond", "obsidian","obsidian", "obsidian"],
    ],
  },
  { 
    picture: "glass_bottle",
    craftable: true,
    difficulty: "medium",
    recipe: [
      ["glass", null, "glass", null, "glass", null,null, null,null],
      [null,null, null, "glass", null, "glass", null, "glass",null],
    ],
  },
  { 
    picture: "bricks",
    craftable: true,
    difficulty: "medium",
    recipe: [
      ["brick","brick", null, "brick","brick", null, null,null, null],
      [ null,null, null,"brick","brick", null, "brick","brick", null],
      [ null,"brick","brick", null, "brick","brick", null,null, null],
      [ null,null, null,null ,"brick", "brick", null,"brick","brick"],
    ],
  },

  /**Hard (21)*/

  { 
    picture: "crafter",
    craftable: true,
    difficulty: "hard",
    recipe: [
      ["iron","iron", "iron", "iron", "crafting_table", "iron", "redstone","dropper", "redstone"],
    ],
  },
  { 
    picture: "dropper",
    craftable: true,
    difficulty: "hard",
    recipe: [
      ["cobblestone","cobblestone", "cobblestone", "cobblestone", null, "cobblestone", "cobblestone","redstone", "cobblestone"],
    ],
  },
  { 
    picture: "observer",
    craftable: true,
    difficulty: "hard",
    recipe: [
      ["cobblestone","cobblestone", "cobblestone", "redstone",  "quartz","redstone", "cobblestone","cobblestone", "cobblestone",],
    ],
  },
  { 
    picture: "beacon",
    craftable: true,
    difficulty: "hard",
    recipe: [
      ["glass","glass", "glass", "glass", "nether_star", "glass", "obsidian","obsidian", "obsidian"],
    ],
  },
  { 
    picture: "dispenser",
    craftable: true,
    difficulty: "hard",
    recipe: [
      ["cobblestone","cobblestone", "cobblestone", "cobblestone", "bow", "cobblestone", "cobblestone","redstone", "cobblestone"],
    ],
  },
  { 
    picture: "loom",
    craftable: true,
    difficulty: "hard",
    recipe: [
      ["string","string", null, "oak_planks","oak_planks", null, null,null, null],
      [ null,null, null,"string","string", null, "oak_planks","oak_planks", null],
      [ null,"string","string", null, "oak_planks","oak_planks", null,null, null],
      [ null,null, null,null ,"string", "string", null,"oak_planks","oak_planks"],
    ],
  },
  { 
    picture: "painting",
    craftable: true,
    difficulty: "hard",
    recipe: [
      ["stick","stick", "stick", "stick", "wool", "stick", "stick","stick", "stick"],
    ],
  },
  { 
    picture: "respawn_anchor",
    craftable: true,
    difficulty: "hard",
    recipe: [
      ["crying_obsidian","crying_obsidian", "crying_obsidian", "glowstone",  "glowstone","glowstone", "crying_obsidian","crying_obsidian", "crying_obsidian",],
    ],
  },
  { 
    picture: "tinted_glass",
    craftable: true,
    difficulty: "hard",
    recipe: [
      [null,"amethyst_shard",null,"amethyst_shard","glass","amethyst_shard",null,"amethyst_shard",null],
    ],
  },
  { 
    picture: "scaffolding",
    craftable: true,
    difficulty: "hard",
    recipe: [
      ["bamboo","string", "bamboo", "bamboo", null, "bamboo", "bamboo",null, "bamboo"],,
    ],
  },
  { 
    picture: "lead",
    craftable: true,
    difficulty: "hard",
    recipe: [
      ["string","string", null, "string", "slime_ball", null,null,null, "string"],
    ],
  },
  { 
    picture: "target",
    craftable: true,
    difficulty: "hard",
    recipe: [
      [null,"redstone",null,"redstone","haybale","redstone",null,"redstone",null],
    ],
  },
  { 
    picture: "brush",
    craftable: true,
    difficulty: "hard",
    recipe: [
      [null,"feather",null,null,"copper",null,null,"stick",null],
      ["feather", null,null,"copper", null,null,"stick",null,null],
      [null,null,"feather", null,null, "copper",null,null,"stick"],
    ],
  },
  { 
    picture: "recovery_compass",
    craftable: true,
    difficulty: "hard",
    recipe: [
      ["echo_shard","echo_shard", "echo_shard", "echo_shard", "compass", "echo_shard", "echo_shard","echo_shard", "echo_shard"],
    ],
  },
  { 
    picture: "cake",
    craftable: true,
    difficulty: "hard",
    recipe: [
      ["milk_bucket","milk_bucket", "milk_bucket", "sugar", "egg", "sugar", "wheat","wheat", "wheat"],
    ],
  },
  { 
    picture: "candle",
    craftable: true,
    difficulty: "hard",
    recipe: [
      ["string", null, null,"honeycomb",null , null,null, null,null],
      [null,"string",null,null ,"honeycomb", null,null, null,null],
      [ null, null,"string",null , null,"honeycomb", null,null, null],
      [null, null,null,"string", null, null,"honeycomb",null , null],
      [null, null,null,null,"string",null,null ,"honeycomb", null],
      [null,null, null,null, null,"string",null , null,"honeycomb"],
    ],
  },
  { 
    picture: "bundle",
    craftable: true,
    difficulty: "hard",
    recipe: [
      ["string", null, null,"leather",null , null,null, null,null],
      [null,"string",null,null ,"leather", null,null, null,null],
      [ null, null,"string",null , null,"leather", null,null, null],
      [null, null,null,"string", null, null,"leather",null , null],
      [null, null,null,null,"string",null,null ,"leather", null],
      [null,null, null,null, null,"string",null , null,"leather"],
    ],
  },
  { 
    picture: "note_block",
    craftable: true,
    difficulty: "hard",
    recipe: [
      ["oak_planks","oak_planks", "oak_planks", "oak_planks", "redstone", "oak_planks", "oak_planks","oak_planks", "oak_planks"],
    ],
  },
  { 
    picture: "wolf_armor",
    craftable: true,
    difficulty: "hard",
    recipe: [
      ["armadillo_scute",null, null, "armadillo_scute", "armadillo_scute", "armadillo_scute", "armadillo_scute",null, "armadillo_scute"],
    ],
  },
  { 
    picture: "end_crystal",
    craftable: true,
    difficulty: "hard",
    recipe: [
      ["glass","glass", "glass", "glass", "ender_eye", "glass", "glass","ghast_tear", "glass"],
    ],
  },
  { 
    picture: "lodestone",
    craftable: true,
    difficulty: "hard",
    recipe: [
      ["chiseled_stone_bricks","chiseled_stone_bricks", "chiseled_stone_bricks", "chiseled_stone_bricks", "netherite", "chiseled_stone_bricks", "chiseled_stone_bricks","chiseled_stone_bricks", "chiseled_stone_bricks"],
    ],
  },
  { 
    picture: "sea_lantern",
    craftable: true,
    difficulty: "hard",
    recipe: [
      ["prismarine_shard","prismarine_crystals", "prismarine_shard", "prismarine_crystals", "prismarine_crystals", "prismarine_crystals", "prismarine_shard","prismarine_crystals", "prismarine_shard"],
    ],
  },

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
    picture: "redstone",
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
    picture: "quartz",
    craftable: false,
    difficulty:undefined,
    recipe: null,
  },
  {
    picture: "nether_star",
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
    picture: "smooth_stone",
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
    picture: "obsidian",
    craftable: false,
    difficulty: undefined,
    recipe: null,
  },
  {
    picture: "prismarine_crystals",
    craftable: false,
    difficulty: undefined,
    recipe: null,
  },
  {
    picture: "prismarine_shard",
    craftable: false,
    difficulty: undefined,
    recipe: null,
  },
  {
    picture: "brick",
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
    picture: "wheat",
    craftable: false,
    difficulty:undefined,
    recipe: null,
  },
  {
    picture: "dried_kelp",
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
    picture: "gunpowder",
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
    picture: "amethyst_shard",
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
    picture: "egg",
    craftable: false,
    difficulty:undefined,
    recipe: null,
  },
  {
    picture: "sugar",
    craftable: false,
    difficulty:undefined,
    recipe: null,
  },
  {
    picture: "milk_bucket",
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
    picture: "armadillo_scute",
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
    picture: "bamboo",
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
  {
    picture: "glass",
    craftable: false,
    difficulty:undefined,
    recipe: null,
  },
  {
    picture: "wool",
    craftable: false,
    difficulty:undefined,
    recipe: null,
  },
  {
    picture: "crying_obsidian",
    craftable: false,
    difficulty:undefined,
    recipe: null,
  },
  {
    picture: "glowstone",
    craftable: false,
    difficulty:undefined,
    recipe: null,
  },
  {
    picture: "echo_shard",
    craftable: false,
    difficulty:undefined,
    recipe: null,
  },
  {
    picture: "ender_eye",
    craftable: false,
    difficulty:undefined,
    recipe: null,
  },
  {
    picture: "ghast_tear",
    craftable: false,
    difficulty:undefined,
    recipe: null,
  },
  {
    picture: "chiseled_stone_bricks",
    craftable: false,
    difficulty:undefined,
    recipe: null,
  },
  {
    picture: "bedrock",
    craftable: false,
    difficulty:undefined,
    recipe: null,
  },
  {
    picture: "bee_nest",
    craftable: false,
    difficulty:undefined,
    recipe: null,
  },
  {
    picture: "basalt",
    craftable: false,
    difficulty:undefined,
    recipe: null,
  },
  {
    picture: "beetroot",
    craftable: false,
    difficulty:undefined,
    recipe: null,
  },
  {
    picture: "breeze_rod",
    craftable: false,
    difficulty:undefined,
    recipe: null,
  },
  {
    picture: "carrot",
    craftable: false,
    difficulty:undefined,
    recipe: null,
  },
  {
    picture: "clay_ball",
    craftable: false,
    difficulty:undefined,
    recipe: null,
  },
  {
    picture: "dripstone_block",
    craftable: false,
    difficulty:undefined,
    recipe: null,
  },
  {
    picture: "chorus_fruit",
    craftable: false,
    difficulty:undefined,
    recipe: null,
  },
  {
    picture: "dirt",
    craftable: false,
    difficulty:undefined,
    recipe: null,
  },
  {
    picture: "end_stone",
    craftable: false,
    difficulty:undefined,
    recipe: null,
  },
  {
    picture: "crafting_table",
    craftable: false,
    difficulty:undefined,
    recipe: null,
  },
  {
    picture: "furnace",
    craftable: false,
    difficulty:undefined,
    recipe: null,
  },
  {
    picture: "dragon_breath",
    craftable: false,
    difficulty:undefined,
    recipe: null,
  },
  {
    picture: "phantom_membrane",
    craftable: false,
    difficulty:undefined,
    recipe: null,
  },
  {
    picture: "pink_dye",
    craftable: false,
    difficulty:undefined,
    recipe: null,
  },
  {
    picture: "nether_wart",
    craftable: false,
    difficulty:undefined,
    recipe: null,
  },
  {
    picture: "name_tag",
    craftable: false,
    difficulty:undefined,
    recipe: null,
  },
  {
    picture: "ink_sac",
    craftable: false,
    difficulty:undefined,
    recipe: null,
  },
  {
    picture: "glowstone_dust",
    craftable: false,
    difficulty:undefined,
    recipe: null,
  },
  {
    picture: "kelp",
    craftable: false,
    difficulty:undefined,
    recipe: null,
  },
  {
    picture: "comparator",
    craftable: false,
    difficulty:undefined,
    recipe: null,
  },
  {
    picture: "gold_nugget",
    craftable: false,
    difficulty:undefined,
    recipe: null,
  },
  {
    picture: "goat_horn",
    craftable: false,
    difficulty:undefined,
    recipe: null,
  },
  {
    picture: "rabbit_hide",
    craftable: false,
    difficulty:undefined,
    recipe: null,
  },
  {
    picture: "shulker_shell",
    craftable: false,
    difficulty:undefined,
    recipe: null,
  },
  {
    picture: "netherite_scrap",
    craftable: false,
    difficulty:undefined,
    recipe: null,
  },
  {
    picture: "totten_flesh",
    craftable: false,
    difficulty:undefined,
    recipe: null,
  },
  {
    picture: "purpur_block",
    craftable: false,
    difficulty:undefined,
    recipe: null,
  },
  {
    picture: "granite",
    craftable: false,
    difficulty:undefined,
    recipe: null,
  },
  {
    picture: "diorite",
    craftable: false,
    difficulty:undefined,
    recipe: null,
  },
  {
    picture: "tuff",
    craftable: false,
    difficulty:undefined,
    recipe: null,
  },
  {
    picture: "terracotta",
    craftable: false,
    difficulty:undefined,
    recipe: null,
  },
  {
    picture: "stone",
    craftable: false,
    difficulty:undefined,
    recipe: null,
  },
  {
    picture: "sea_pickle",
    craftable: false,
    difficulty:undefined,
    recipe: null,
  },

];
window.items_data = items_data;
