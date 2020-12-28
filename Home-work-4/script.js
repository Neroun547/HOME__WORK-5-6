const prevBtn = document.querySelector('.prev__btn');
const nextBtn = document.querySelector('.next__btn');
const img = document.querySelectorAll('.img');
const oneImg = document.querySelector('.img');
const imgBlock = document.querySelector('.img-block');
const decoration = document.querySelectorAll('.decoration');
let flag = false;
let count = 0;
let cordinate = [];
function slide(n){
    for(let i = 0; i < img.length; i++){
        if(i === n){
            img[i].style.opacity = 1;
            img[i].style.left = '0px';
            decoration[i].style.background = '#000';
        }else {
            img[i].style.opacity = 0;
            img[i].style.left = '-600px';
            decoration[i].style.background = '#ccc'
        }  
    }
}

slide(count);

function nextSlide(){
    count++;
    if(count > img.length - 1){
        count = 0;
    }
    slide(count);
}

function prevSlide(){
    count--;
    if(count < 0){
        count = img.length - 1;
    }
    slide(count);
}

nextBtn.onclick = function(){
    nextSlide();
}

prevBtn.onclick = function(){
    prevSlide();
}

for(let i = 0; i < img.length; i++){
img[i].onmousedown = function(e){
    flag = true;

console.log(flag);
img[i].onmousemove = function(e){
    if(flag){
        cordinate.push(e.offsetX);
        console.log(e);
    }
}
img[i].onmouseup = function(e){
    flag = false;
    if((cordinate[0] - e.offsetX) >= 100){
        count++;
        if(count > img.length - 1){
            count = 0;
        }
        slide(count);
        cordinate.length = 0;
    }
    if((cordinate[0] - e.offsetX) <= -100){
        count--;
        if(count < 0){
            count = img.length - 1;
        }
        cordinate.length = 0;
        slide(count);
    }
}
}
}



