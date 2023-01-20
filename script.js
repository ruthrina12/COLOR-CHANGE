const colorbtn=document.querySelector(".colorbtn");
const body = document.querySelector('body');

const color =['yellow','red', 'black', 'purple', 'white', 'pink', '#3b5998', 'brown', 'orange', 'green'];

colorbtn.addEventListener('click',changeColor);
function changeColor(){
    let random = Math.floor(Math.random()*color.length)
    body.style.backgroundColor = color[random];
}