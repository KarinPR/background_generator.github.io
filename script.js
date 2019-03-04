var color1 = document.querySelector(".color1");
var defColor1 = color1.value;
var color2 = document.querySelector(".color2");
var defColor2 = color2.value;
var color3 = document.querySelector(".color3");
var defColor3 = color3.value;
var color4 = document.querySelector(".color4");
var defColor4 = color4.value;
var color5 = document.querySelector(".color5");
var defColor5 = color5.value;
var color6 = document.querySelector(".color6");
var defColor6 = color6.value;
var css = document.querySelector("h3");
var body = document.getElementById("gradient");
var buttonLinear = document.querySelector(".btnLin");
var buttonRadial = document.querySelector(".btnRad");

window.onload = function(){
	body.style.background = "radial-gradient(circle, " + defColor1 + ", " + defColor2 + ", " + defColor3 + ")";
	buttonLinear.style.background = "linear-gradient(to right, " + defColor1 + ", " + defColor2 + ", " + defColor3 + ")";
	buttonRadial.style.background = body.style.background;
	css.textContent = body.style.background + ";";
}

function radialGradient(){
	body.style.background = "radial-gradient(circle, " + color1.value + ", " + color2.value + ", " + color3.value + ")";
	css.textContent = body.style.background + ";";
}
function linearGradient(){
	body.style.background = "linear-gradient(to right, " + color4.value + ", " + color5.value + ", " + color6.value + ")";
	css.textContent = body.style.background + ";";
}

color1.addEventListener("input", radialGradient);
color2.addEventListener("input", radialGradient);
color3.addEventListener("input", radialGradient);
color4.addEventListener("input", linearGradient);
color5.addEventListener("input", linearGradient);
color6.addEventListener("input", linearGradient);
////////// RANDOM NUMBER ///////////////////
function rndNumber (min,max){
	return Math.floor(Math.random() * (max - min + 1) ) + min;
}
function rndColorSet(min, max) { 
	var x = rndNumber (min,max);
	var y = rndNumber (min,max);
	var z = rndNumber (min,max);
	return [x,y,z];
}
function rndRadialGradient(min, max){ 
	body.style.background = "radial-gradient(circle, " + "rgb(" + rndColorSet(min, max)+ ")" + ", " + "rgb("+ rndColorSet(min, max) + ")"+ ", "+ "rgb("+ rndColorSet(min, max)+ ")";
	buttonRadial.style.background = body.style.background;
	css.textContent = body.style.background + ";";
}
function rndLinearGradient(min, max){
	body.style.background = "linear-gradient(to right, " + "rgb(" + rndColorSet(min, max)+ ")" + ", " + "rgb("+ rndColorSet(min, max) + ")"+ ", "+ "rgb("+ rndColorSet(min, max)+ ")"; 
	buttonLinear.style.background = body.style.background;
	css.textContent = body.style.background + ";";
}