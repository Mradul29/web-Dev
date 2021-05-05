var numSq = 6;
var colors = getRandomColors(numSq);
var goalColor = colors[Math.ceil(Math.random() * (colors.length - 1))];
var pickedColor;
var sp = document.querySelector("span");
console.log(colors);
console.log(goalColor);
var h1 = document.querySelector(".container");
sp.textContent = goalColor;
sp.style.fontSize = "100px";
var displayMessage = document.querySelector(".message");

if (numSq === 3) {
	for (var i = 3; i < 6; i++) {
		squares[i].style.display = "block";
	}
}


var easy = document.querySelector("#easy");
var hard = document.querySelector("#hard");

easy.addEventListener("click", function () {
	hard.classList.remove("difficulty");
	easy.classList.add("difficulty");
	numSq = 3;
	resetFunction();
	for (var i = 3; i < 6; i++) {
		squares[i].style.display = "none";
	}
})


hard.addEventListener("click", function () {
	hard.classList.add("difficulty");
	easy.classList.remove("difficulty");
	numSq = 6;
	resetFunction();
	for (var i = 3; i < 6; i++) {
		squares[i].style.display = "block";
	}
})


var reset = document.querySelector(".reset");
reset.addEventListener("click", function () {
	resetFunction();
})



var squares = document.querySelectorAll(".square");
console.log(squares);
for (var i = 0; i < squares.length; i++) {
	squares[i].style.backgroundColor = colors[i];
	squares[i].addEventListener("click", function () {

		var pickedColor = this.style.backgroundColor;
		console.log(pickedColor, goalColor);
		if (pickedColor === goalColor) {
			reset.textContent = "Play Again?";
			displayMessage.textContent = "Correct!!!";
			displayMessage.style.fontWeight = 500;
			changeColor();
		}
		else {
			displayMessage.textContent = "Try Again!!!";
			displayMessage.style.font.weight = 700;
			this.style.backgroundColor = "#232323";
		}
	});
}

function changeColor() {
	for (var i = 0; i < colors.length; i++)
		squares[i].style.backgroundColor = goalColor;
	h1.style.backgroundColor = goalColor;
}


function getRandomColors(num) {
	var arr = [];
	for (var i = 0; i < num; i++)
		arr.push(randomColor());
	return arr;
}


function randomColor() {
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}

function resetFunction() {
	h1.style.backgroundColor = "steelblue";
	reset.textContent = "NEW COLORS";
	displayMessage.textContent = "";
	colors = getRandomColors(numSq);
	goalColor = colors[Math.floor(Math.random() * (colors.length))];
	sp.textContent = goalColor;
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = colors[i];


		squares[i].addEventListener("click", function () {

			var pickedColor = this.style.backgroundColor;
			console.log(pickedColor, goalColor);
			if (pickedColor === goalColor) {
				reset.textContent = "Play Again?";
				displayMessage.textContent = "Correct!!!";
				changeColor();
			}
			else {
				displayMessage.textContent = "Try Agar̥in!!!";
				this.style.backgroundColor = "#232323";
			}

		})
	}
}