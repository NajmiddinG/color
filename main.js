function buttonFun() {
    let a = Math.floor(16 ** 6 * Math.random()).toString(16);
    let b = Math.floor(16 ** 6 * Math.random()).toString(16);
    document.getElementsByTagName('body')[0].style.background = `linear-gradient(to right, #${a}, #${b})`;
    document.getElementById('hexcode1').innerHTML = a;
    document.getElementById('hexcode2').innerHTML = b;
}