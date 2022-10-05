
document.getElementById('em').addEventListener('click',function()

{
   let container = document.getElementById('divide');
   let search =   document.createElement('input');
   let rembtn = document.createElement('input');

   rembtn.setAttribute('type', 'button');
   rembtn.setAttribute('id', 'btn1');
   rembtn.value = 'Remove';

   container.appendChild(search);
   container.appendChild(rembtn);

   document.getElementById('btn1').addEventListener('click',function(){
       container.removeChild(search);
       container.removeChild(rembtn);

   })

}

)
