import bowle from "../../img/recipes/appetizer-blur-bowl.jpg";
import bakedVegetables from "../../img/recipes/bake-baked-basil.jpg"

const recipes = [
  {
    name: "Europäischer Salat",
    img: bowle,
    ingredients: [
      {
        name: "Tomate",
        amount: "250",
        measurement: "g"
      },
      {
        name: "Salatgurke",
        amount: "100",
        measurement: "g"
      },
      {
        name: "Schnittsalat",
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
        name: "Kartoffel",
        amount: "250",
        measurement: "g"
      },
      {
        name: "Brokkoli",
        amount: "100",
        measurement: "g"
      },
      {
        name: "Zwiebel",
        amount: "250",
        measurement: "g"
      },
      {
        name: "Basilikum",
        amount: "25",
        measurement: "g"
      },
      {
        name: "Käse",
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
        name: "Tomate",
        amount: "250",
        measurement: "g"
      },
      {
        name: "Salatgurke",
        amount: "100",
        measurement: "g"
      },
      {
        name: "Schnittsalat",
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
        name: "Kartoffel",
        amount: "250",
        measurement: "g"
      },
      {
        name: "Brokkoli",
        amount: "100",
        measurement: "g"
      },
      {
        name: "Zwiebel",
        amount: "250",
        measurement: "g"
      },
      {
        name: "Basilikum",
        amount: "25",
        measurement: "g"
      },
      {
        name: "Käse",
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
