var mychek=document.getElementById('check'),
    mymenu=document.querySelector('.new-menu');
    console.log(mymenu)
console.log(mychek);

mychek.onclick=function(){
    if(this.checked==true){
    mymenu.style.width='100%'
    }
    else{
        mymenu.style.width='0'
    }
}