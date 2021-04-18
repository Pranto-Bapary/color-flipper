const colors = ["green", "red", "rgba(133,122,200)", "#f15025", "skyblue", "yellow", "pink", "blue", "gray", "white"];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function () {
    //Using random number for selecting the color from the array
    const randomColor = randomNumber();
    document.body.style.backgroundColor = colors[randomColor];
    color.textContent = colors[randomColor];
})

//Generating a random number
function randomNumber() {
    return Math.floor(Math.random() * colors.length);
}