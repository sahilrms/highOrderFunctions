let btn=document.querySelector('#reverse');
btn.addEventListener('click',validateURL);
function validateURL() 
{
    let text=document.querySelector('#string_text');
    let rev= text.value
    let chkString = /^(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&\/\/=]*)$/gi;
    let result=chkString.test(rev);
    document.getElementById('reversed').innerHTML=`<h1>${result?'Valid URL':'URL not valid'}</h1>`;
}