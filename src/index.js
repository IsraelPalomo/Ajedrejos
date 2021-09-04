import "./styles.css";
import "./styles.scss";
import imgSRC from "./static/dama__blanca.png";
const myFullpage = new fullpage("#Myfullpage", {});

let IMG = document.getElementById("img1");

IMG.src = imgSRC;
