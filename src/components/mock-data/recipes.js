import bowle from "../../img/recipes/appetizer-blur-bowl.jpg";
import bakedVegetables from "../../img/recipes/bake-baked-basil.jpg"

const recipes = [
  {
    name: "Europäischer Salat",
    img: bowle,
    ingredients: [
      {
        id: 37,
        amount: "250",
        measurement: "g"
      },
      {
        id: 15,
        amount: "100",
        measurement: "g"
      },
      {
        id: 19,
        amount: "200",
        measurement: "g"
      }
    ],
    steps: ["Alles schneiden.", "Dressing machen", "Mischen."],
    description:
      "Sehr beliebt bei allen Menschen und noch gesung dazu. Auch als Vorspeise super.",
    mealType: ["Mittagessen"],
    dishType: ["Vorspeise", "Hauptspeise", "Salat"],
    cuisineType: ["modern", "europäisch"],
    preptime: 15,
    cooktime: 0
  },
  {
    name: "Gemüsegretain",
    img: bakedVegetables,
    ingredients: [
      {
        id: 1,
        amount: "250",
        measurement: "g"
      },
      {
        id: 4,
        amount: "100",
        measurement: "g"
      },
      {
        id: 40,
        amount: "250",
        measurement: "g"
      },
      {
        id: 2,
        amount: "25",
        measurement: "g"
      },
      {
        id: 2,
        amount: "75",
        measurement: "g"
      }
    ],
    steps: [
      "Gemüse in Würfel schneiden.",
      "In eine Römertopf legen und bei 180 °C für 30 min backen.",
      "Käse währenddessen in feine scheiben schneiden",
      "Römertopf aus dem Ofen nehmen Käsescheiben auf em Gemüse verteilen und den Topf weitere 15 min bei 180 °C backen"
    ],
    description:
      "Sehr beliebt bei allen Menschen und noch gesung dazu. Auch als Vorspeise super.",
    mealType: ["Mittagessen"],
    dishType: ["Vorspeise", "Hauptspeise", "Salat"],
    cuisineType: ["modern", "europäisch"],
    preptime: 30,
    cooktime: 45
  },
  {
    name: "Europäischer Salat",
    img: bowle,
    ingredients: [
      {
        id: 37,
        amount: "250",
        measurement: "g"
      },
      {
        id: 15,
        amount: "100",
        measurement: "g"
      },
      {
        id: 19,
        amount: "200",
        measurement: "g"
      }
    ],
    steps: ["Alles schneiden.", "Dressing machen", "Mischen."],
    description:
      "Sehr beliebt bei allen Menschen und noch gesung dazu. Auch als Vorspeise super.",
    mealType: ["Mittagessen"],
    dishType: ["Vorspeise", "Hauptspeise", "Salat"],
    cuisineType: ["modern", "europäisch"],
    preptime: 15,
    cooktime: 0
  },
  {
    name: "Gemüsegretain",
    img: bakedVegetables,
    ingredients: [
      {
        id: 1,
        amount: "250",
        measurement: "g"
      },
      {
        id: 4,
        amount: "100",
        measurement: "g"
      },
      {
        id: 40,
        amount: "250",
        measurement: "g"
      },
      {
        id: 2,
        amount: "25",
        measurement: "g"
      },
      {
        id: 2,
        amount: "75",
        measurement: "g"
      }
    ],
    steps: [
      "Gemüse in Würfel schneiden.",
      "In eine Römertopf legen und bei 180 °C für 30 min backen.",
      "Käse währenddessen in feine scheiben schneiden",
      "Römertopf aus dem Ofen nehmen Käsescheiben auf em Gemüse verteilen und den Topf weitere 15 min bei 180 °C backen"
    ],
    description:
      "Sehr beliebt bei allen Menschen und noch gesung dazu. Auch als Vorspeise super.",
    mealType: ["Mittagessen"],
    dishType: ["Vorspeise", "Hauptspeise", "Salat"],
    cuisineType: ["modern", "europäisch"],
    preptime: 30,
    cooktime: 45
  }
];

export default recipes;
