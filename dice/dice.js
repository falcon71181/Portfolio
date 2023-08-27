function printwinner(r1,r2){
    if(r1>r2){
        document.querySelector("#dice1").style.backgroundColor="green";
        document.querySelector("#dice2").style.backgroundColor="red";
        document.getElementById("printwinner").innerHTML="Winner :- Player 1";
    }
    else if(r1<r2){
        document.querySelector("#dice2").style.backgroundColor="green";
        document.querySelector("#dice1").style.backgroundColor="red";
        document.getElementById("printwinner").innerHTML="Winner :- Player 2";
    }
    else if(r1===r2){
        document.querySelector("#dice1").style.backgroundColor="yellow";
        document.querySelector("#dice2").style.backgroundColor="yellow";
        document.getElementById("printwinner").innerHTML="Match is Draw";
    }
}

function repimg(rand1,rand2) {
    var img1 = "images/png/" + rand1 + ".png";
    var img2 = "images/png/" + rand2 + ".png";
    document.getElementById("dice1img").setAttribute("src", img1);
    document.getElementById("dice2img").setAttribute("src", img2);
    printwinner(rand1,rand2);
}

var list = [0,1, 2, 3, 4, 5, 6];
var randno1 = Math.floor((Math.random() * 6)+1);
var randno2 = Math.floor((Math.random() * 6)+1);
repimg(list[randno1],list[randno2]);
