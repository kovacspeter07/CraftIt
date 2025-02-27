const items = [
    "iron_axe" = {
        id: 1,
        picture: "iron_axe",
        craftable: true,
        difficulty: "easy",
        recipe: [["iron","iron","","iron","stick","","","stick",""],["","iron","iron","","iron","stick","","","stick"]],
        cellID: undefined,
    },
    "iron" = {
        id: 2,
        picture: "iron",
        craftable: false,
        difficulty: "easy",
        recipe: null,
        cellID: undefined,
    },
    "stick" = {
        id: 3,
        picture: "stick",
        craftable: true,
        difficulty: "easy",
        recipe: null,
        cellID: undefined,
    }

];

export {items};