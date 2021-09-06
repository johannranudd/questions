const button = document.querySelector('.buttons');
const hiddenText = document.querySelector('.hidden-text');


button.addEventListener("click", function() {
    hiddenText.classList.toggle('show-text');
})
