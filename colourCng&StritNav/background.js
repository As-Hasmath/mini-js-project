function colfn(colour){
    document.body.style.background=colour;
    let tx =document.getElementsByClassName('text');

    if(colour=='#000000'){
        for(let i=0;i<2; i++){
            tx[i].style.color='#ffffff';
        }
    }
    else{
        for(let i=0;i<2;i++){tx[i].style.color='#000000';}
    }
    if(colour=='#00ced1'){
      let d =document.querySelector('h2');
      d.style.background='green';
    }
    else{
        let d =document.querySelector('h2');
        d.style.background='lightsteelblue';
    }
}

var head =document.querySelector('h2');

window.addEventListener('scroll',function(es){
  if(window.pageYOffset >=60){
    head.classList.add('cls');
  }
  else{
      head.classList.remove('cls');
  }
});
