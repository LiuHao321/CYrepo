var News = document.getElementsByClassName("newscon");
var Board = document.getElementById("messageBoard");
var info = document.getElementsByClassName("info");
var help = document.getElementsByClassName("help");
function right(){
    News[0].style.display="none";
    Board.style.display="block";
}
function left(){
    News[0].style.display="block";
    Board.style.display="none";
}
function bottom(){
    info[0].style.display="none";
    help[0].style.display="block";
}
function pop(){
    info[0].style.display="block";
    help[0].style.display="none"
}
