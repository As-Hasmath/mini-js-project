let diV=document.getElementsByClassName('slide');
let runer=1;

slidee(runer);


function slidee(aa){

   for(let c of diV){
      c.style.display='none';
      }
   
   if(aa == diV.length){
      runer=0;
      aa=0;
   }
   if(aa<0){
      runer=diV.length-1;
      aa=diV.length-1;
   }
   diV[aa].style.display ='block';
   
}

function controler(E){
   runer = runer+E;
   slidee(runer);
 }