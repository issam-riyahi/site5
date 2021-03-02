var mychek=document.getElementById('check'),
    mymenu=document.querySelector('.new-menu');
    


mychek.onclick=function(){
    if(this.checked==true){
    mymenu.style.width='100%'
    }
    else{
        mymenu.style.width='0'
    }
}

//Main Variable 
var btnleft=document.querySelector('.buton-left'),
    btnright=document.querySelector('.buton-right');
    console.log(btnright)
let container=document.querySelector('.contaciner-categorer'),
    element=document.querySelectorAll('.categorer .contaciner-categorer .cc.F');
    console.log(element)
var len=0;

btnleft.onclick = function(){
    slidelifte();
    
    console.log(len);
    if(len > 0 ){
        btnright.parentNode.classList.add('show')
    }
}
btnright.addEventListener('click',function(){
    if(len <=element.length && len > 0){
    slideright();
    
    console.log(len)
    }
    if(len == 0 ){
        btnright.parentNode.classList.remove('show')
    }
})


function slidelifte(){
    if(len < element.length/2 -1 && len >=0){
   len++; 
   container.style.transform=`translate(${-347 * len}px)`;
   
    }
}
function slideright(){
    len--; 
    container.style.transform=`translate(${-347 * len}px)`;
    
 }