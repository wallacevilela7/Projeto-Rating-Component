let ratingArea = document.querySelector(".rating-area");
let thanksArea = document.querySelector(".thanks-area");
let resp = document.querySelector('.count-selecteds');
let submitButton = document.querySelector("#submitButton");




let options = document.querySelector("#optionFather");

options.addEventListener('click', (e)=>{

    let clicked = e.target.id;
    let selectedOption = document.querySelector(`#${clicked}`);
    let rating = e.target.value;


    selectedOption.classList.add("selected");
    resp.innerHTML = `You marked ${rating} out of 5`;
});


submitButton.addEventListener("click", ()=>{
    ratingArea.style.display = 'none';
    thanksArea.style.display = 'flex';
});
