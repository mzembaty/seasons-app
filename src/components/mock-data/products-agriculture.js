import artichoke from "../../img/vegetables/artichoke.jpg";
import eggplant from "../../img/vegetables/eggplant.jpg";
import cauliflower from "../../img/vegetables/cauliflower.jpg";
import beans from "../../img/vegetables/beans.jpg";
import broccoli from "../../img/vegetables/broccoli.jpg";
import peas from "../../img/vegetables/peas.jpg";
import fennel from "../../img/vegetables/fennel.jpg";
import paprikaGreen from "../../img/vegetables/paprika-green.jpg";
import kale from "../../img/vegetables/kale.jpg";
import cucumbers from "../../img/vegetables/cucumbers.jpg";
import kohlrabi from "../../img/vegetables/kohlrabi.jpg";
import lettuce from "../../img/vegetables/lettuce.jpg";
import pumpkin from "../../img/vegetables/pumpkin.jpg";
// import leafLettuce from "../../img/vegetables/leaf-lettuce.jpg";
// import chicoree from "../../img/vegetables/chicoree.jpg";
import carrots from "../../img/vegetables/carrots.jpg";
import leeks from "../../img/vegetables/leeks.jpg";
import radicchio from "../../img/vegetables/radicchio.jpg";
import radish2 from "../../img/vegetables/radish-2.jpg";
import rhubarb from "../../img/vegetables/rhubarb.jpg";
import brusselSprouts from "../../img/vegetables/brussel-sprouts.jpg";
import beetroots from "../../img/vegetables/beetroots.jpg";
import cabbageRed from "../../img/vegetables/cabbage-red.jpg";
import rocketSalad from "../../img/vegetables/rocket-salad.jpg";
// import salsifies from "../../img/vegetables/salsifies.jpg";
import asparagus from "../../img/vegetables/asparagus.jpg";
import spinach from "../../img/vegetables/spinach.jpg";
// import cabbagePointed from "../../img/vegetables/cabbage-pointed.jpg";
// import celery from "../../img/vegetables/celery.jpg";
import tomatoe from "../../img/vegetables/tomatoe.jpg";
import cabbageWhite from "../../img/vegetables/cabbage-white.jpg";
import zucchini from "../../img/vegetables/zucchini.jpg";
import onion from "../../img/vegetables/onion.jpg";
// import chard from "../../img/vegetables/chard.jpg";
// import cabbageSavoy from "../../img/vegetables/cabbage-savoy.jpg";

// fruits
import pineapple from "../../img/fruits/pineapple.jpg";
import apple from "../../img/fruits/apple.jpg";


const celery = "";
const salsifies = "";
const leafLettuce = "";
const chicoree = "";
const chard = "";
const radish = "";
const cabbageSavoy = "";
const cabbagePointed = "";

export const productTypes = ["vegetables" ,"fruits"]

const productsAgriculture = [
  {
    id: 0,
    name: "Artischocken",
    img: {
      imgBig: artichoke,
      imgSmall: artichoke,
      imgCred: "Magdalena Raczka"
    },
    // main inland production by month as index from 0 to 100%,
    seasonMainGer: [0, 0, 0, 0, 0, 0, 25, 25, 25, 0, 0, 0],
    type: "vegetable"
  },
  {
    id: 1,
    name: "Auberginen",
    img: {
      imgBig: eggplant,
      imgSmall: eggplant,
      imgCred: "Charles"
    },
    seasonMainGer: [0, 0, 0, 0, 0, 25, 25, 25, 25, 25, 0, 0],
    type: "vegetable"
  },
  {
    id: 2,
    name: "Blumenkohl",
    img: {
      imgBig: cauliflower,
      imgSmall: cauliflower,
      imgCred: ""
    },
    seasonMainGer: [0, 0, 0, 25, 25, 100, 75, 50, 100, 100, 25, 25],
    type: "vegetable"
  },
  {
    id: 3,
    name: "Bohnen",
    img: {
      imgBig: beans,
      imgSmall: beans,
      imgCred: "Anya Rokenroll"
    },
    seasonMainGer: [0, 0, 0, 0, 25, 25, 100, 100, 100, 50, 0, 0],
    type: "vegetable"
  },
  {
    id: 4,
    name: "Brokkoli",
    img: {
      imgBig: broccoli,
      imgSmall: broccoli,
      imgCred: "Annie Spratt"
    },
    seasonMainGer: [0, 0, 0, 0, 25, 100, 100, 100, 100, 100, 50, 25],
    type: "vegetable"
  },
  {
    id: 5,
    name: "Chicorée",
    img: {
      imgBig: chicoree,
      imgSmall: chicoree,
      imgCred: ""
    },
    seasonMainGer: [100, 100, 100, 75, 50, 50, 25, 25, 25, 50, 50, 100],
    type: "vegetable"
  },
  {
    id: 6,
    name: "Chinakohl",
    img: {
      imgBig: "",
      imgSmall: "",
      imgCred: "Mattia Barbotti"
    },
    seasonMainGer: [100, 100, 25, 0, 50, 50, 50, 50, 50, 50, 50, 100],
    type: "vegetable"
  },
  {
    id: 7,
    name: "Dicke Bohnen",
    img: {
      imgBig: "",
      imgSmall: "",
      imgCred: ""
    },
    seasonMainGer: [0, 0, 0, 0, 25, 100, 75, 25, 25, 0, 0, 0],
    type: "vegetable"
  },
  {
    id: 8,
    name: "Eisbergsalat",
    img: {
      imgBig: "",
      imgSmall: "",
      imgCred: ""
    },
    seasonMainGer: [0, 0, 0, 25, 50, 100, 100, 100, 100, 50, 25, 0],
    type: "vegetable"
  },
  {
    id: 9,
    name: "Endivien",
    img: {
      imgBig: "",
      imgSmall: "",
      imgCred: ""
    },
    seasonMainGer: [0, 0, 0, 0, 25, 25, 25, 25, 50, 100, 50, 0],
    type: "vegetable"
  },
  {
    id: 10,
    name: "Erbsen",
    img: {
      imgBig: peas,
      imgSmall: peas,
      imgCred: "Jessica Ruscello"
    },
    seasonMainGer: [0, 0, 0, 0, 0, 100, 100, 50, 25, 25, 0, 0],
    type: "vegetable"
  },
  {
    id: 11,
    name: "Feldsalat",
    img: {
      imgBig: "",
      imgSmall: "",
      imgCred: ""
    },
    seasonMainGer: [50, 25, 25, 25, 100, 50, 25, 25, 50, 100, 100, 100],
    type: "vegetable"
  },
  {
    id: 12,
    name: "Fenchel",
    img: {
      imgBig: fennel,
      imgSmall: fennel,
      imgCred: "Anurag Arora"
    },
    seasonMainGer: [0, 0, 0, 0, 25, 100, 100, 100, 100, 100, 25, 25],
    type: "vegetable"
  },
  {
    id: 13,
    name: "Gemüsepaprika",
    img: {
      imgBig: paprikaGreen,
      imgSmall: paprikaGreen,
      imgCred: ""
    },
    seasonMainGer: [0, 0, 25, 25, 25, 25, 25, 25, 25, 25, 25, 0],
    type: "vegetable"
  },
  {
    id: 14,
    name: "Grünkohl",
    img: {
      imgBig: kale,
      imgSmall: kale,
      imgCred: "Laura Johnston"
    },
    seasonMainGer: [50, 25, 25, 0, 0, 0, 0, 0, 0, 50, 100, 100],
    type: "vegetable"
  },
  {
    id: 15,
    name: "Salatgurke",
    img: {
      imgBig: cucumbers,
      imgSmall: cucumbers,
      imgCred: "Harshal S. Hirve"
    },
    seasonMainGer: [0, 0, 25, 50, 75, 100, 100, 100, 50, 25, 0, 0],
    type: "vegetable"
  },
  {
    id: 16,
    name: "Kohlrabi",
    img: {
      imgBig: kohlrabi,
      imgSmall: kohlrabi,
      imgCred: "Monika Grabkowska"
    },
    seasonMainGer: [0, 0, 0, 25, 75, 100, 100, 100, 50, 25, 0, 0],
    type: "vegetable"
  },
  {
    id: 17,
    name: "Kopfsalat",
    img: {
      imgBig: lettuce,
      imgSmall: lettuce,
      imgCred: "Mae Mu"
    },
    seasonMainGer: [0, 25, 25, 50, 100, 75, 75, 75, 75, 75, 25, 25],
    type: "vegetable"
  },
  {
    id: 18,
    name: "Kürbis",
    img: {
      imgBig: pumpkin,
      imgSmall: pumpkin,
      imgCred: ""
    },
    seasonMainGer: [0, 0, 0, 0, 0, 0, 25, 50, 100, 75, 25, 25],
    type: "vegetable"
  },
  {
    id: 19,
    name: "Schnittsalat",
    img: {
      imgBig: leafLettuce,
      imgSmall: leafLettuce,
      imgCred: ""
    },
    seasonMainGer: [0, 0, 25, 75, 100, 75, 100, 75, 100, 100, 75, 25],
    type: "vegetable"
  },
  {
    id: 20,
    name: "Mangold",
    img: {
      imgBig: chard,
      imgSmall: chard,
      imgCred: "Stella Schafer"
    },
    seasonMainGer: [0, 0, 25, 25, 50, 50, 50, 50, 50, 25, 25, 0],
    type: "vegetable"
  },
  {
    id: 21,
    name: "Möhren",
    img: {
      imgBig: carrots,
      imgSmall: carrots,
      imgCred: ""
    },
    seasonMainGer: [0, 0, 25, 25, 50, 50, 50, 50, 50, 25, 25, 0],
    type: "vegetable"
  },
  {
    id: 22,
    name: "Porree",
    img: {
      imgBig: leeks,
      imgSmall: leeks,
      imgCred: "Phil Hearing"
    },
    seasonMainGer: [50, 50, 25, 25, 25, 25, 50, 75, 100, 100, 100, 75],
    type: "vegetable"
  },
  {
    id: 23,
    name: "Radicchio",
    img: {
      imgBig: radicchio,
      imgSmall: radicchio,
      imgCred: ""
    },
    seasonMainGer: [0, 0, 0, 0, 25, 75, 100, 100, 100, 100, 50, 0],
    type: "vegetable"
  },
  {
    id: 24,
    name: "Radieschen",
    img: {
      imgBig: radish2,
      imgSmall: radish2,
      imgCred: ""
    },
    seasonMainGer: [0, 0, 25, 50, 100, 100, 75, 50, 50, 50, 25, 0],
    type: "vegetable"
  },
  {
    id: 25,
    name: "Rettich",
    img: {
      imgBig: radish,
      imgSmall: radish,
      imgCred: "Markus Spiske"
    },
    seasonMainGer: [25, 25, 25, 25, 50, 100, 100, 100, 100, 75, 50, 25],
    type: "vegetable"
  },
  {
    id: 26,
    name: "Rhabarber",
    img: {
      imgBig: rhubarb,
      imgSmall: rhubarb,
      imgCred: "Heather Barnes"
    },
    seasonMainGer: [0, 0, 25, 100, 100, 50, 25, 0, 0, 0, 0, 0],
    type: "vegetable"
  },
  {
    id: 27,
    name: "Rosenkohl",
    img: {
      imgBig: brusselSprouts,
      imgSmall: brusselSprouts,
      imgCred: "Keenan Loo"
    },
    seasonMainGer: [50, 25, 25, 0, 0, 0, 0, 0, 25, 100, 100, 75],
    type: "vegetable"
  },
  {
    id: 28,
    name: "Rote Beete",
    img: {
      imgBig: beetroots,
      imgSmall: beetroots,
      imgCred: "Lucy May"
    },
    seasonMainGer: [50, 75, 100, 25, 25, 25, 25, 25, 50, 75, 75, 75],
    type: "vegetable"
  },
  {
    id: 29,
    name: "Rotkohl",
    img: {
      imgBig: cabbageRed,
      imgSmall: cabbageRed,
      imgCred: ""
    },
    seasonMainGer: [50, 50, 25, 0, 75, 50, 50, 50, 100, 75, 100, 100],
    type: "vegetable"
  },
  {
    id: 30,
    name: "Rucola",
    img: {
      imgBig: rocketSalad,
      imgSmall: rocketSalad,
      imgCred: "sheri silver"
    },
    seasonMainGer: [0, 25, 25, 50, 75, 100, 100, 100, 75, 75, 50, 25],
    type: "vegetable"
  },
  {
    id: 31,
    name: "Schwarzwurzeln",
    img: {
      imgBig: salsifies,
      imgSmall: salsifies,
      imgCred: ""
    },
    seasonMainGer: [25, 25, 25, 25, 0, 0, 0, 0, 25, 25, 25, 25],
    type: "vegetable"
  },
  {
    id: 32,
    name: "Spargel",
    img: {
      imgBig: asparagus,
      imgSmall: asparagus,
      imgCred: "Joseph Gonzalez"
    },
    seasonMainGer: [0, 0, 25, 50, 100, 75, 25, 0, 0, 0, 0, 0],
    type: "vegetable"
  },
  {
    id: 33,
    name: "Spinat",
    img: {
      imgBig: spinach,
      imgSmall: spinach,
      imgCred: "Photo by Nathan Nugent on Unsplash"
    },
    seasonMainGer: [0, 0, 25, 50, 100, 100, 100, 100, 75, 75, 50, 25],
    type: "vegetable"
  },
  {
    id: 34,
    name: "Wirsing",
    img: {
      imgBig: cabbageSavoy,
      imgSmall: cabbageSavoy,
      imgCred: ""
    },
    seasonMainGer: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    type: "vegetable"
  },
  {
    id: 35,
    name: "Spitzkohl",
    img: {
      imgBig: cabbagePointed,
      imgSmall: cabbagePointed,
      imgCred: ""
    },
    seasonMainGer: [0, 0, 0, 25, 50, 100, 100, 100, 100, 100, 50, 0],
    type: "vegetable"
  },
  {
    id: 36,
    name: "Sellerie",
    img: {
      imgBig: celery,
      imgSmall: celery,
      imgCred: ""
    },
    seasonMainGer: [0, 0, 0, 0, 25, 100, 100, 100, 100, 75, 25, 25],
    type: "vegetable"
  },
  {
    id: 37,
    name: "Tomaten",
    img: {
      imgBig: tomatoe,
      imgSmall: tomatoe,
      imgCred: ""
    },
    seasonMainGer: [0, 0, 25, 50, 75, 100, 100, 100, 75, 50, 50, 25],
    type: "vegetable"
  },
  {
    id: 38,
    name: "Weißkohl",
    img: {
      imgBig: cabbageWhite,
      imgSmall: cabbageWhite,
      imgCred: "Isara Somboon"
    },
    seasonMainGer: [75, 100, 100, 75, 75, 75, 50, 50, 100, 100, 100, 100],
    type: "vegetable"
  },
  {
    id: 39,
    name: "Zucchini",
    img: {
      imgBig: zucchini,
      imgSmall: zucchini,
      imgCred: "Angele J"
    },
    seasonMainGer: [0, 0, 0, 0, 25, 50, 100, 75, 50, 25, 0, 0],
    type: "vegetable"
  },
  {
    id: 40,
    name: "Zwiebel",
    img: {
      imgBig: onion,
      imgSmall: onion,
      imgCred: "Dhivyaa Naraayani"
    },
    seasonMainGer: [100, 75, 75, 75, 50, 25, 25, 100, 100, 100, 100, 100],
    type: "vegetable"
  },
  {
    id: 41,
    name: "Ananas",
    img: {
      imgBig: pineapple,
      imgSmall: pineapple,
      imgCred: "Miguel Andrade"
    },
    seasonMainGer: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    type: "fruit"
  },
  {
    id: 42,
    name: "Apfel",
    img: {
      imgBig: apple,
      imgSmall: apple,
      imgCred: ""
    },
    seasonMainGer: [100, 100, 100, 100, 75, 75, 25, 25, 50, 75, 75, 100],
    type: "fruit"
  }
];

export default productsAgriculture;
