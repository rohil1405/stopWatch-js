let start = document.getElementById('start');
let stop = document.getElementById('stop');
let reset = document.getElementById('reset');
let time = document.getElementById('time');
let hour = 0;
let min = 0;
let sec = 0;

function onload() {
    // let hour = localStorage.getItem('hour');
    // let min = localStorage.getItem('min');
    // let sec = localStorage.getItem('sec');
    let hour = sessionStorage.getItem('hour') || 0;
    let min = sessionStorage.getItem('min') || 0;
    let sec = sessionStorage.getItem('sec') || 0;

    time.innerHTML = `${hour}:${min}:${sec}`;
}

start.addEventListener('click', function () {
    start.setAttribute('disabled', '')
    let a = setInterval(myfunc, 1000);

    function myfunc() {
        sec++;
        if (sec == 60) {
            min++
            sec = 0;
        } else if (min == 60) {
            hour++;
            min = 0;
            sec++;
        }
        time.innerHTML = `${hour}:${min}:${sec}`;

        // localStorage.getItem('hour');
        // localStorage.getItem('min');
        // localStorage.getItem('sec')
        sessionStorage.getItem('hour');
        sessionStorage.getItem('min');
        sessionStorage.getItem('sec')
    }
    stop.addEventListener('click', function () {
        clearInterval(a);
        start.removeAttribute('disabled', '')

        // localStorage.setItem('hour', hour);
        // localStorage.setItem('min', min);
        // localStorage.setItem('sec', sec);
        sessionStorage.setItem('hour', hour);
        sessionStorage.setItem('min', min);
        sessionStorage.setItem('sec', sec);
    })
    reset.addEventListener('click', function () {
        clearInterval(a);
        start.removeAttribute('disabled', '')
        hour = 0;
        min = 0;
        sec = 0;
        time.innerHTML = `${hour}:${min}:${sec}`;
        // localStorage.setItem('hour', 0);
        // localStorage.setItem('min', 0);
        // localStorage.setItem('sec', 0);
        sessionStorage.setItem('hour', 0);
        sessionStorage.setItem('min', 0);
        sessionStorage.setItem('sec', 0);
    })
})
onload();