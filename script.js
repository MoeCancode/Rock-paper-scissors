function game={
  var userChoice = prompt("please input r, p, or s", "r,p,s");
userChoice=userChoice.toLowerCase();
var choices = ["r","p","s"]
var computerChoice = choices[(Math.floor(Math.random()*3))]
console.log(userChoice)
console.log(computerChoice)
if (!(userChoice !== "r"||userChoice !== "p"||userChoice !== "s")){
  alert("Invalid input, please use r, p ,or s")
} else {compare(userChoice,computerChoice)}

alert("computerChoice: " + computerChoice )

var result = "";
var compScore= 0;
var userScore = 0;
var Ties = 0
function compare(u,c) {
  if(u===c){
    result = "It's a Tie"
    Ties= Ties +1
  }
  else if ((u==="r" && c ==="p")||(u==="p" && c ==="s")||(u==="s" && c ==="r")){
    result = "Computer Wins!!"
    compScore +=1
  }
  else if ((c==="r" && u ==="p")||(c==="p" && u ==="s")||(c==="s" && u ==="r")){
    result = "You Win!!"
    userScore +=1
  }
  alert(result)
}

var displayScore = "Computer Score:" + compScore +"/n User Score:" + userScore + "/n Ties:" + Ties
alert(displayScore)
}
game