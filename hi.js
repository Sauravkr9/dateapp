let yes=document.getElementById('yes');
let no=document.getElementById('no');
yes.addEventListener('click',handler);
no.addEventListener('click',handler);
function handler(e)
{
 let val=e.target.innerHTML;
 window.alert("Thanks ❤️,you have selected "+val);
}
no.addEventListener('mouseover',function(e){
 no.innerHTML='yes';
 yes.innerHTML='no';
})
no.addEventListener('mouseout',function(e){
 no.innerHTML='no';
 yes.innerHTML='yes';
})