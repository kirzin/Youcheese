const burger = document.querySelector('#burger');
const menu = document.querySelector('#menu');

document.querySelector('#burger').addEventListener('click', () => {
    document.querySelector('#menu').classList.toggle('hidden');
});