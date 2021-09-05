import "./styles.css";
import "./styles.scss";
AOS.init();
import imgSRC from "./static/logotipo.png";
import imgSRC2 from "./static/logotipo__pieza.png";
import imgSRC3 from "./static/fuensalida.png";
import imgSRC4 from "./static/villafranca.jpg";
import imgSRC5 from "./static/madridejos.jpg";
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

	verticalCentered: true,
});

let imgInicio = document.getElementById("img1Inicio");
let imgLogo = document.getElementById("img__logo");
let imgSlide1 = document.querySelector(".slide1");
let imgSlide2 = document.querySelector(".slide2");
let imgSlide3 = document.querySelector(".slide3");

imgInicio.src = imgSRC;
imgLogo.src = imgSRC2;
imgSlide1.src = imgSRC3;
imgSlide2.src = imgSRC4;
imgSlide3.src = imgSRC5;
