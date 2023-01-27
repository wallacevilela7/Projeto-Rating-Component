let form = document.querySelector("#ratings-form");
let ratingArea = document.querySelector(".container");
let thanksArea = document.querySelector(".thanks-area");
let selectedRating = document.querySelector(".selected-rating");

form.addEventListener('click', (e)=> { 
    let btn = document.querySelector("#submit-btn").removeAttribute("disabled");
    const rating = form.rating.value;
    selectedRating.innerText = `You selected ${rating} out of 5`;
    
});

form.addEventListener('submit', (e)=> {
    e.preventDefault();
    ratingArea.style.display = 'none';
    thanksArea.style.display = 'flex';
});

