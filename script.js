var btn = document.getElementsByClassName('bx-menu')[0]
var nav = document.querySelector('.navegacao')

btn.addEventListener('click', function() {
    if (nav.style.display == 'none') {
        nav.style.display = 'block'
    } else {
        nav.style.display = 'none'
    }
})