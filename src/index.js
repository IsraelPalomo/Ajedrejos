import "./styles.css";
import "./styles.scss";
AOS.init();
import imgSRC from "./static/logotipo.png";
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

let imgInicio = document.getElementById("img1Inicio");

imgInicio.src = imgSRC;
