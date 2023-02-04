let colors = generateRandomColors(6);

let squares = document.querySelectorAll(".square");
let pickedColor = pickColor();
let colorDisplay = document.getElementById("colorDisplay");
let messageDisplay = document.querySelector("#message");
let h1 = document.querySelector("h1"); 
let resetButton = document.querySelector("#reset");
let easyBtn = document.querySelector("#easyBtn");
let hardBtn = document.querySelector("#hardBtn");
let numSquares = 6;


easyBtn.addEventListener("click", function(){
   hardBtn.classList.remove("selected");
   easyBtn.classList.add("selected");
   numSquares = 3;
   colors = generateRandomColors(numSquares);
   pickedColor = pickColor();
   colorDisplay.textContent = pickedColor;
   for(let i = 0; i < squares.length; i++){
    if(colors[i]){
        squares[i].style.background = colors[i];   
    }else {
        squares[i].style.display = "none";
    }
   }
});

hardBtn.addEventListener("click", function(){
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    numSquares = 6;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(let i = 0; i < squares.length; i++){
        squares[i].style.background = colors[i];  
        squares[i].style.display = "block";
     }
    }
);

  
 


resetButton.addEventListener("click", function(){
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    this.textContent = "New Colors"
    messageDisplay.textContent = "" 
    for(let i = 0; i < squares.length; i++){
        squares[i].style.background = colors[i];
         h1.style.background = "steelblue";

    }
     
})


colorDisplay.textContent = pickedColor;

for(let i = 0; i < squares.length; i++){
    squares[i].style.background = colors[i];
    
    squares[i].addEventListener("click", function(){
        let clickedColor = this.style.background;
        console.log(clickedColor === pickedColor);
        if(clickedColor === pickedColor){
           messageDisplay.textContent = "Correct!";
           resetButton.textContent = "Play Again?"
           changeColors(clickedColor);
           h1.style.background = clickedColor;
        }else{
            this.style.background = "#232323";
            messageDisplay.textContent = "Try Again";
            

        }        
    });
}
function changeColors(color){
    for(let i = 0; i < squares.length; i++){
     squares[i].style.background = color;  
    }
}
function pickColor(){
  let random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num){
//     //make array
    let arr = []
//     //add random numbers
    for(let i = 0; i < num; i++){
         arr.push(randomColor());
//         //get random color and push to array
    }
        return arr;
    }
    function randomColor(){
       let r = Math.floor(Math.random() * 256);
       let g = Math.floor(Math.random() * 256);
       let b = Math.floor(Math.random() * 256);
       return "rgb(" + r + ", " + g + ", " + b + ")";
    }
  