const frontCard = document.querySelector('.card');
const backCard = document.querySelector('.card__back');
const btnSubmit = document.getElementById('submit');
const rating = document.querySelector('.rate');
const btnOptions = document.querySelectorAll('.btn');
const rateAgain = document.getElementById('again');
const ratingStars = document.querySelector('.stars');
const messageError = document.querySelector('.message__error');


console.log(rateAgain);
let selectedOption = 0;


btnSubmit.addEventListener('click', () => {

    if (selectedOption !== 0) {
        backCard.classList.remove('hidden');
        frontCard.style.display = 'none';
        hideErrorMessage();
    } else {
        messageError.style.display = 'block';
        btnOptions.forEach((btn) => {
            btn.style.border = '1px solid hsl(355, 59%, 41%)';
        });
    }
});

rateAgain.addEventListener('click', () => {

    selectedOption = 0;

    btnOptions.forEach((btn) => {
        btn.classList.remove('active');
    });
    updateRatingStars();
    hideErrorMessage();
    backCard.classList.add('hidden');
    frontCard.style.display = 'block';
    hideErrorBorder();

});

btnOptions.forEach((rate) => {
    rate.addEventListener('click', () => {
        rating.innerHTML = rate.innerHTML;
    });
});


// Agregar estrellas al dar click
const stars = document.querySelectorAll('.star');

btnOptions.forEach((button) => {
    button.addEventListener('click', () => {
        selectedOption = parseInt(button.getAttribute('title'));

        btnOptions.forEach((btn) => {
            btn.classList.remove('active');
            messageError.classList.add('.message__error');
        });

        stars.forEach((star, index) => {
            if (index < selectedOption) {
                star.style.opacity = 1;
            } else {
                star.style.opacity = 0;
            }
        });

        button.classList.add('active');
        updateRatingStars();
        hideErrorMessage();
        hideErrorBorder();
    });
});

function updateRatingStars() {
    ratingStars.innerHTML = '';
    for (let i = 0; i < selectedOption; i++) {
        const starIcon = document.createElement('img');
        starIcon.src = 'images/icon-star.svg';
        starIcon.classList.add('card__star');
        starIcon.title = 'Star';
        starIcon.alt = 'icon-star'; 
        ratingStars.appendChild(starIcon);
    }
}

function hideErrorMessage() {
    messageError.style.display = 'none';
}

function hideErrorBorder(){
    btnOptions.forEach((btn) => {
        btn.style.border = 'none';
    });
}