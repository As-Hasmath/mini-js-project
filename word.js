var typeBox =document.getElementById('textbox');

typeBox.addEventListener('input',typingCun);

function typingCun(){
  var text=this.value;
  document.getElementById('charC').innerHTML= text.length;

  let wordDv=text.split(" ");
  let claerWord=wordDv.filter(function(bla){
    return bla !="";
  });

  document.getElementById('wordC').innerHTML=claerWord.length;
  console.log(claerWord)
}

function REset(){
  let rec=0;

  if(rec==0){
    typeBox.value='';
  }
  if(rec==0){
    document.getElementById('wordC').innerHTML='0';
    document.getElementById('charC').innerHTML='0';
  }
}
/*------------Timer screen-----------  */
let Hours=0;
let minutes=0;
let seconds=0;

var timeCount=false;

function start(){
  timeCount=true;
  showtime();
}
function stop(){
  timeCount=false;

}
function reset(){
   timeCount=false;
   
   Hours=0;
   minutes=0;
   seconds=0;
   document.getElementById('hour').innerHTML="00";
   document.getElementById('min').innerHTML="00";
   document.getElementById('sec').innerHTML="00";
}

function showtime(){
  if(timeCount == true){
      seconds=seconds+1;

      if(seconds==60){
        minutes = minutes +1;
        seconds=0;
      }
      if(minutes==60){
        Hours=Hours+1;
        minutes=0;
      }
      let str1=seconds;
      let str2=minutes;
      let str3=Hours;

      if(seconds<10){
        str1='0'+str1;
      }
      if(minutes<10){
        str2='0'+str2;
      }
      if(Hours<10){
        str3='0'+str3;
      }
      document.getElementById('sec').innerHTML=str1;
      document.getElementById('min').innerHTML=str2;
      document.getElementById('hour').innerHTML=str3;
      setTimeout("showtime()",1000);
    }
}