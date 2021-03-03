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
var btnleft=document.querySelector('.buton-left.one'),
    btnright=document.querySelector('.buton-right.tow');
    console.log(btnright)
let container=document.querySelector('.contaciner-categorer'),
    container2=document.querySelector('.contaciner-categorer.tow'),

    element=document.querySelectorAll('.categorer .contaciner-categorer .cc.F'),
    element2=document.querySelectorAll('.categorer .contaciner-categorer .cc.T'),
    byntow=document.querySelector('.buton-left.three');
    btnthree=document.querySelector('.buton-right.for');
    console.log(container2)
var len=0,len2=0;
//first slide
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
//second slide
byntow.addEventListener('click', function(){
    slidelifte2();
    
    console.log(len2);
    if(len2 > 0 ){
        btnthree.parentNode.classList.add('show')
    }
});
btnthree.addEventListener('click',function(){
    if(len2 <=element2.length && len2 > 0){
    slideright2();
    
    console.log(len2)
    }
    if(len2 == 0 ){
        btnthree.parentNode.classList.remove('show')
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
 function slidelifte2(){
    if(len2 < element2.length/2 -1  && len2 >=0){
   len2++; 
   container2.style.transform=`translateX(${-347 * len2}px)`;
   
    }
}
function slideright2(){
    len2--; 
    container2.style.transform=`translateX(${-347 * len2}px)`;
    
 }