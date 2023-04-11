let btn=document.querySelector('#reverse');
btn.addEventListener('click',()=>{document.getElementById('reversed').innerHTML=`<h1 style="color:red";>The String is being reversed</h1>`;
setTimeout(reversal,2000)});
function reversal() 
{
    let text=document.querySelector('#string_text');
    let rev= text.value.split("").reverse().join("");
    // .split converts string to Array, reverse reverses that array and join concatnates it back to string 
    document.getElementById('reversed').innerHTML=`<h1>The Reversed String is ${rev}</h1>`;
}