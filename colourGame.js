var colors = randCol(6);
num = 6;
var pickedColor = colors[pick(0,colors.length-1)];
var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var message =document.querySelector("#message");
var h1 = document.querySelector("h1");
var reset =document.querySelector("#reset");
var btn = document.querySelector(".btn");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");
var sqB = document.querySelectorAll(".sqB");
var reset = document.querySelector("#reset");
colorDisplay.textContent = pickedColor;


function check(number){
        
		for (var i=0; i<number; i++){
		squares[i].style.background = colors[i];
		squares[i].addEventListener("click", function(){
				var clickedColor = this.style.background;
				if(clickedColor===pickedColor){
					message.textContent ="Correct!";
					changeColor(pickedColor,number);
					h1.style.background = pickedColor;
					if (num==3){
						for (i=0;i<3;i++){
							sqB[i].style.background="#232323";
							}
					}

					reset.textContent = "PLAY AGAIN?"

				}	
				else{
					this.style.background="#232323";
					message.textContent ="Try Again!"
				}

		})
	}
}
check(6);

function changeColor(color,num){
	for(i=0;i<num;i++){
		squares[i].style.background=color;
	}
}

function pick(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function randCol(num){
	var arr =[];

		for (i=0;i<num;i++){
				arr[i]= "rgb("+pick(0,255)+", "+pick(0,255)+", "+pick(0,255)+")";

		}	
	return arr;
}

reset.addEventListener("click",function(){
	clear();
	check(6);
	colors = randCol(6);
	pickedColor = colors[pick(0,colors.length-1)];
	for(i=0;i<squares.length;i++){
		squares[i].style.background =colors[i];
	}
	h1.style.background="steelblue";
	colorDisplay.textContent = pickedColor;
	message.textContent =" ";
})



easyBtn.addEventListener("click", function(){
	num =3;
	clear();
	check(3);
	hardBtn.classList.remove("selected");
	easyBtn.classList.add("selected");
	colors = randCol(num);
	pickedColor = colors[pick(0,colors.length-1)];
	for(i=0;i<num;i++){
		squares[i].style.background =colors[i];
	}
	h1.style.background="steelblue";
	colorDisplay.textContent = pickedColor;
	message.textContent =" ";

	reset.addEventListener("click",function(){
	clear();
	check(num);
	colors = randCol(num);
	pickedColor = colors[pick(0,colors.length-1)];
	for(i=0;i<squares.length;i++){
		squares[i].style.background =colors[i];
	}
	h1.style.background="steelblue";
	colorDisplay.textContent = pickedColor;
	message.textContent =" ";
})




})
hardBtn.addEventListener("click", function(){
	num =6;
	clear();
	check(6);
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	colors = randCol(num);
	pickedColor = colors[pick(0,colors.length-1)];
	for(i=0;i<num;i++){
		squares[i].style.background =colors[i];
	}
	h1.style.background="steelblue";
	colorDisplay.textContent = pickedColor;
	message.textContent =" ";
})
function clear(){
	for(i=0;i<squares.length;i++){
		squares[i].style.background ="#232323";
	}
}


