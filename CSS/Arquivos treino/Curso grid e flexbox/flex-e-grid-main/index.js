const botaomenu = document.querySelector('button[aria-label="Menu"]')
const menulateral = document.querySelector('nav')
botaomenu.addEventListener('click', function(){
    if (menulateral.style.left == '-100vw') {
        menulateral.style.cssText = 'left: 0;'
    } else {
    menulateral.style.cssText = 'left: -100vw'
    }
})