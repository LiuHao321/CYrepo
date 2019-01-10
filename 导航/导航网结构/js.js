var img = document.getElementsByClassName("png")
var ul = document.getElementsByClassName("link")
var planer = document.getElementsByClassName('qr')
var scanqr = document.getElementById('scanqr')
var a = ['./src/qq2.jpg','./src/wx2.jpg','./src/wb2.jpg'];
function display(i){
    img[i].style.opacity = '0';
    img[i].style.transition = '0.6';
    ul[i].style.display = 'block';
}
function cover(i){
    img[i].style.opacity = '1';
    img[i].style.transition = '0.6s';
    ul[i].style.display = 'none';
}
function scan(j){
    planer[0].style.display = 'block';
    scanqr.src = j;
}
function outscan(){
    planer[0].style.display = 'none';
    scanqr.src = '';
}