var player = prompt("stone scissors paper");
var computer = Math.random();
if(computer<0.34){
    computer = "stone"
}
else if(computer<0.67){
    computer = "scissors"
}
else{
    computer = "paper"
}
alert("電腦出"+computer);

if(player==computer){
    alert("平手");
}
else if(player=="paper"){
    if (computer=="scissors"){
        alert("loseee");
    }
    else if(computer=="stone"){
        alert("win!");
    }
        
}
else if(player=="scissors"){
    if (computer=="stones"){
        alert("loseee");
    }
    else if(computer=="paper"){
        alert("win!");
    }
        
}
else if(player=="stone"){
    if (computer=="paper"){
        alert("loseee");
    }
    else if(computer=="scissors"){
        alert("win!");
    }
        
}
else {
    alert("something wrong");
}












