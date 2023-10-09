let button = document.querySelector(".getAccessButton");
let input = document.querySelector(".getAccessInput");
let inputError = document.querySelector(".inputError");


const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

button.addEventListener("click",function(){
    if (regex.test(input.value) == false)
    {
        console.log("regex false");
        inputError.classList.remove("d-none");
    }
    else
    {
        console.log("regex true");
        inputError.classList.add("d-none");
    }
});

console.log("script");