randomNumber();
let delay = 0;
let initalInterval = setInterval(() => { randomNumber(); }, 3000)
let newInterval;
let btn = document.querySelector('#reverse');
btn.addEventListener('click', () => { clearInterval(initalInterval); newDelay(); });
function newDelay() {
    clearInterval(newInterval)
        delay = Number(document.querySelector('#string_text').value);
        newInterval = setInterval(() => { randomNumber(); }, delay * 1000)
}
function randomNumber() {
    let rev = Math.floor(Math.random() * 1000);
    document.getElementById('reversed').innerHTML = `<h1> ${rev}</h1>`;
}
