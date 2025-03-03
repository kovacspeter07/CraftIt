const items_data = [
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
    picture: "iron",
    craftable: false,
    difficulty: undefined,
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
];
window.items_data = items_data;
