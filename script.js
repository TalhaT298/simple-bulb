document.addEventListener('DOMContentLoaded', function() {
    const bulb = document.querySelector('.bulb');
    const switchElement = document.querySelector('.switch');
    const switchButton = document.querySelector('.switch__button');

    switchElement.addEventListener('click', function() {
        bulb.classList.toggle('on');
        switchElement.classList.toggle('on');
    });
});