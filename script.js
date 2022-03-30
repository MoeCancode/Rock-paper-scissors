var userChoice = prompt("please input r, p, or s", "r,p,s");

var choices = ["r","p","s"]
var computerChoice = choices[(Math.floor(Math.random()*3))]

alert("computerChoice: " + computerChoice )

var result = "";


function compare(u,c) {
  if(u===c){
    result = "It's a Tie"
  }
  else if ((u==="r" && c ==="p")||(u==="p" && c ==="s")||(u==="s" && c ==="r")){
    result = "Computer Wins!!"
  }
  else if ((c==="r" && u ==="p")||(c==="p" && u ==="s")||(c==="s" && u ==="r")){
    result = "You Win!!"
  }
}

