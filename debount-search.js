const val = document.querySelector('.input__val');
let prev;
val.addEventListener('keydown', (val) => {
    prev = val;
    setTimeout(() => {
        if(prev === val){
            alert(val.target.value);
        }
    }, 2000)
})