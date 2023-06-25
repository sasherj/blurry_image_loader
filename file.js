const loadText = document.querySelector('.bg-text');
const loadImg = document.querySelector('.bg-img');
let load = 0;

let int = setInterval(blur, 20)
function blur(){
    load++;
    if(load>99)
    {
        clearInterval(int)
    }
    loadText.innerText = `${load}%`;
    loadText.style.opacity = scale(load, 0, 100, 1, 0);
    loadImg.style.filter = `blur(${scale(load, 0, 100, 50, 0)}px`;
}

// function from  
// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}
