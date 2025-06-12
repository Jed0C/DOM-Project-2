
document.addEventListener('DOMContentLoaded', () => {

function getRandomColor(){
    let x ,y,z;
    x=Math.floor(Math.random() * 255);
    y=Math.floor(Math.random() * 255);
    z=Math.floor(Math.random() * 255);
    let box =document.getElementById('color-box');
    box.style.backgroundColor = "rgb(" + x + "," + y + "," + z + ")";;
}

let btn =document.getElementById('change-color-btn');
let color =document.getElementById('picker');

color.addEventListener('input',function(){
    document.getElementById('color-box').style.backgroundColor=color.value;
})

btn.addEventListener('click',function(){
    getRandomColor();
})

})