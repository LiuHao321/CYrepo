var img = document.getElementsByClassName('png');
var ul = document.getElementsByClassName('fast_track');
var planer = document.getElementById('qr');
var scanqr = document.getElementsByClassName('scanqr');
var a = ['./src/qq2.jpg','./src/wx2.jpg','./src/wb2.jpg'];
var j;
function display(i){
    img[i].style.opacity = '0';
    img[i].style.transition = '0.6s';
    ul[i].style.display = 'block';
}
function cover(i){
    img[i].style.opacity = '1';
    img[i].style.transition = '0.6s';
    ul[i].style.display = 'none';
}
function scan(j){
    planer.style.display = 'block';
    scanqr[0].src = j;

}
function outscan(){
    planer.style.display = 'none';
    scanqr[0].src = '';
}