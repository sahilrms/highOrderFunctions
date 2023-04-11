let btn=document.querySelector('#reverse');
btn.addEventListener('click',validateURL);
function validateURL() 
{
    let text=document.querySelector('#string_text');
    let rev= text.value
    let chkString = /^https:\/\/www.linkedin.com\/in\/[a-z||A-Z||0-9||_||-]{5,30}$/gm;
    let result=chkString.test(rev);
    document.getElementById('reversed').innerHTML=`<h1>${result?'Profile link is valid with proper length':'Profile link is not valid'}</h1>`;
}