let ratingArea = document.querySelector(".rating-area");
let frm = document.querySelector('form');
let selected = document.querySelector('.count-selecteds');


frm.addEventListener("click", ()=>{

    let clickedOption = Number(frm.inOption.target);
    console.log(clickedOption);
});


frm.addEventListener("submit", (e) => {
    ratingArea.style.display = 'none';
    let thanksArea = document.querySelector('.thanks-area').style.display = 'flex';
    

    e.preventDefault();
});