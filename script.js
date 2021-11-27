//1
function number(a, b) {
    console.log(a);
    if(a < b) {
        a+= 1;
        number(a,b);
    }
    return;
}
number(1, 5)


//2
let button = document.querySelector('button');
let p = document.querySelector('p');
let isFull = true;
button.addEventListener('click', switchFormat);

function switchFormat() {
    isFull = !isFull;
}
setInterval(
    function() {
        let today = new Date();
        let h = today.getHours();
        let m = today.getMinutes();
        let s = today.getSeconds();
        if (isFull) {
            p.innerText = h + ":" + m + ":" + s;
        } else {
            p.innerText = h + ":" + m;
        }
    }, 200);