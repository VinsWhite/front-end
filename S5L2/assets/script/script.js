let btn1 = document.querySelector("#back button");
let btn2 = document.querySelector("#pulsantiLaterali div:first-of-type button:first-of-type");

btn1.addEventListener('click', function () {
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0;
})

btn2.addEventListener('click', function () {
    window.open("https://workspace.google.com/products/calendar/?hl=it", "_blank")
})