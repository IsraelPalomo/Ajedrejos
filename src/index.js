import "./styles.css";
import "./styles.scss";
import imgSRC from "./static/dama__blanca.png";
const myFullpage = new fullpage("#Myfullpage", {
	autoScrolling: true,
	fitToSection: true,
	fitToSectionDelay: 1000,
	easing: "easeInOutCubic",
	scrollingSpeed: 1000,
	easingcss3: "ease",
	css3: true,
	loopBottom: true,
	navigation: true,
	menu: "#menu",
	anchors: ["inicio", "torneos", "contacto", "footer"],
	navigationTooltips: ["Inicio", "Torneos", "Contacto", "Footer"],
	showActiveTooltip: true,
});

let IMG = document.getElementById("img1");

IMG.src = imgSRC;
