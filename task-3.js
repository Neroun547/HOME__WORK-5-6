const btn = document.querySelectorAll('.btn');
const wrapper = document.querySelector('.wrapper');
const wrapperBtn = document.querySelectorAll('.wrapper__btn');
const del = document.querySelectorAll('.del');
const body = document.getElementsByTagName('body')[0];

for(let i = 0; i < wrapperBtn.length; i++){
    let posX = 0;
    let posY = 0;
    posX = ((i + 1) * 60) + 'px';
    posY = ((i + 1) * 30) + 'px';
    console.log(posX, posY);
    wrapperBtn[i].style.left = posX;
    wrapperBtn[i].style.top = posY;
}

for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', function () {
        let flag = false;
        let select = false;
        select = true;

        del[i].style.display = 'flex';

        btn[i].addEventListener('mouseup', function (e) {
            flag = false;
        });

        btn[i].addEventListener('mousedown', function () {
            flag = true;
        });

        body.addEventListener('click', function () {
            select = false;
            del[i].style.display = 'none';
        }, true)

        del[i].addEventListener('click', function () {
            this.parentElement.remove();
        })

        wrapper.addEventListener('mousemove', function (e) {
            // console.log(e);
            if (flag && select) {
                //console.log(e.offsetY);
                if((e.clientX - wrapperBtn[i].parentElement.offsetLeft) + 'px' <= '295px' 
                && (e.clientY - wrapperBtn[i].parentElement.offsetTop) + 'px' <= '373px'){
                    console.log(true);
                    wrapperBtn[i].style.left = (e.clientX - wrapperBtn[i].parentElement.offsetLeft) + 'px';
                    wrapperBtn[i].style.top =(e.clientY - wrapperBtn[i].parentElement.offsetTop) + 'px';
                    console.log(wrapperBtn[i].style.left);
                }else if((e.clientY - wrapperBtn[i].parentElement.offsetTop) + 'px' >= '370px' && (e.clientX - wrapperBtn[i].parentElement.offsetLeft) + 'px' <= '295px'){
                     wrapperBtn[i].style.left =(e.clientX - wrapperBtn[i].parentElement.offsetLeft) + 'px';
                }
                else if((e.clientX - wrapperBtn[i].parentElement.offsetLeft) + 'px' >= '295px' &&  (e.clientY - wrapperBtn[i].parentElement.offsetTop) + 'px' <= '373px'){
                    wrapperBtn[i].style.top =(e.clientY - wrapperBtn[i].parentElement.offsetTop) + 'px';
                }
            }
        })
    })
}


