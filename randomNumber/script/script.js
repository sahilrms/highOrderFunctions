<<<<<<< HEAD
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
=======
let btn=document.querySelector('#reverse');
btn.addEventListener('click',validateURL);
function validateURL() 
{
    let text=document.querySelector('#string_text');
    let rev= text.value
    let chkString = /^https:\/\/www.linkedin.com\/in\/[a-z||A-Z||0-9||_||-]{5,30}$/gm;
    let result=chkString.test(rev);
    document.getElementById('reversed').innerHTML=`<h1>${result?'Profile link is valid with proper length':'Profile link is not valid'}</h1>`;
>>>>>>> 16a1e42a1ab8aba1a99374cdc46f6bd24115c703
}