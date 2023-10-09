let button = document.querySelector(".getAccessButton");
let input = document.querySelector(".getAccessInput");
let inputError = document.querySelector(".inputError");
let formflex = document.querySelector(".formflex");


const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

button.addEventListener("click",function(){
    if (regex.test(input.value) == false)
    {
        console.log("regex false");
        inputError.classList.remove("d-none");
        formflex.classList.add("align-items-lg-start");
        formflex.classList.remove("align-items-lg-center");
    }
    else
    {
        console.log("regex true");
        inputError.classList.add("d-none");

        formflex.classList.remove("align-items-lg-start");
        formflex.classList.add("align-items-lg-center");
    }
});

console.log("script");