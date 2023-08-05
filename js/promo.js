const mySpan = document.querySelector('#mySpan');
const myPromotion = document.querySelector('#myPromos');


setTimeout(() => {
    const price = mySpan.classList.add('striked');
    myPromotion.innerHTML = '$55';

    setInterval(() => myPromotion.classList.toggle('hide'), 750);
}, 5000);
