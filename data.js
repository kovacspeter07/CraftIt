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
