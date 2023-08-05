const collapse = document.querySelectorAll('.acctop');
const myAcc = document.querySelector('.acc')

Array.from(collapse).forEach(function(e) {
    e.addEventListener('click', function (e) {
        myAcc.style.transition = "all 0.3s";
        const current = e.target.parentElement;
        current.classList.toggle('active');
    })
})