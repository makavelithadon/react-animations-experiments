import sangoku from "./../assets/images/Sangoku.png";
import chaozu from "./../assets/images/Chaozu.png";
import chichi from "./../assets/images/Chichi.png";
import krilin from "./../assets/images/Krilin.png";
import piccolo from "./../assets/images/Piccolo.png";
import tenshinan from "./../assets/images/Tenshinan.png";
import yamcha from "./../assets/images/Yamcha.png";

const characters = [
  {
    id: 1,
    picture: chaozu,
    name: "chaozu",
    strength: 250,
    color: "#097b01"
  },
  {
    id: 2,
    picture: chichi,
    name: "chichi",
    strength: 114,
    color: "rgb(255, 36, 89)"
  },
  {
    id: 3,
    picture: krilin,
    name: "krilin",
    strength: 340,
    color: "#ff5a00"
  },
  {
    id: 4,
    picture: piccolo,
    name: "piccolo",
    strength: 416,
    color: "#409b00"
  },
  {
    id: 5,
    picture: tenshinan,
    name: "tenshinan",
    strength: 325,
    color: "#642872"
  },
  {
    id: 6,
    picture: yamcha,
    name: "yamcha",
    strength: 315,
    color: "#dd1e00"
  },
  {
    id: 7,
    picture: sangoku,
    name: "sangoku",
    strength: 422,
    color: "#f8481f"
  }
];

export default characters.map(c => ({
  ...c,
  friends: characters.filter(c2 => c2.id !== c.id)
}));
