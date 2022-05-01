
setInterval(()=>{
  let TE=new Date();
  let Hour= TE.getHours();
  let minute =TE.getMinutes();
  let second =TE.getSeconds();
   if(Hour>12){
        Hour =Hour-12;
   }
   if(Hour<10){
        Hour ="0"+Hour;
   }
   if(minute <10){
       minute="0"+minute;
   }
   if(second<10){
       second="0"+second;
   }
   
  let doc1=document.getElementById("hour").innerHTML =Hour;
  let doc2=document.getElementById("min").innerHTML =minute;
  let doc3=document.getElementById("sec").innerHTML =second;
  let doc4 = document.getElementById('ampm'); 
  if(Hour <12 ){
    doc4.innerHTML=' AM';
   }
   else{ doc4.innerHTML=" PM";}
   doc4.style.fontSize="50px";
   doc4.style.verticalAlign="center";

})
