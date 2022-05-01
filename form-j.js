
let Nm =document.getElementById('name');
let pass= document.getElementById('password');
let errortx=document.getElementsByClassName('errorTEx');
let numbeR= document.getElementById('Mob-num');
let ag =document.getElementById('age');
let rtn =1,rtn2=1;

function validation(){
  //for name   
  if(Nm.value==''){
  errortx[0].innerHTML='Please enter your name! ';
   rtn=0;
  }
  else if(Nm.value.length <3){
      errortx[0].innerHTML='Enter a valid Name';
   rtn=0;
  }
  else{errortx[0].innerHTML =''; rtn=1;}
//for password   
  if(pass.value==''){
    errortx[4].innerHTML ='Please set a password!';
    rtn2=0;
  }
  else if(pass.value.length<8){
    errortx[4].innerHTML ='set a strong password!';
    rtn2=0;
  }
  else{ errortx[4].innerHTML ='';  rtn2=1;}
//for age
 if(ag.value.length >=4 || ag.value>=150){
    errortx[2].innerHTML ='Enter a valid age !';
    rtn=0;
 }
 else if(ag.value==''){
    errortx[2].innerHTML='Please enter your age!';
    rtn=0;
 }
 else{ errortx[2].innerHTML =''; rtn=1; }
// for number
if(numbeR.value ==''){
  errortx[3].innerHTML='Please enter a number';
  rtn=0;
}
else if(numbeR.value.length != 11){
  errortx[3].innerHTML ='Enter a valid age !';
  rtn=0;
}
else{  errortx[3].innerHTML='';  rtn=1; }
//for return
  if(rtn && rtn2){  return true  }
  else{  return false  }

  return false;
}
