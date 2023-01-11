//todo Mudar cor da navbar quando o scroll ultrapassar a altura da navbar e exibir o botão arrow-up
const navbar = document.querySelector('#nav-color')
const arrowUp = document.querySelector('.arrow-up')

window.addEventListener('scroll', function () {
    const scrollHeight = window.pageYOffset;
    const navHeight = navbar.getBoundingClientRect().height;
    const arrowHeight = arrowUp.getBoundingClientRect().height;

    if (scrollHeight > navHeight) {
        navbar.classList.add('fixed-nav')
        arrowUp.classList.remove('arrow-none')
    }else{
        navbar.classList.remove('fixed-nav')
        arrowUp.classList.add('arrow-none')
    }
})
//todo efeito typing na header
const typedTextSpan = document.querySelector('.typed-text');
const cursorSpan = document.querySelector('.cursor');

const textArray = ['Desenvolvedor Front-End', 'Desenvolvedor Back-End' , 'Desenvolvedor Full-stack']
const typingDelay = 50;
const erasingDelay = 70;
const newtTextDelay = 2000;
let textArrayIndex = 0;
let charIndex = 0;

function type() {
    if (charIndex < textArray[textArrayIndex].length) {
        if (!cursorSpan.classList.contains('typing')) cursorSpan.classList.add('typing');
            typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type,typingDelay);
    } else {
        cursorSpan.classList.remove('typing');
        setTimeout(erase, newtTextDelay);
    }
}
function erase() {
    if(charIndex > 0){
        if (!cursorSpan.classList.contains('typing')) cursorSpan.classList.add('typing');
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
        charIndex--;
        setTimeout(erase, erasingDelay)
    }else{
        cursorSpan.classList.remove('typing');
        textArrayIndex++;
        if (textArrayIndex >= textArray.length) textArrayIndex = 0;
        setTimeout(type, typingDelay + 1100)
    }
}
document.addEventListener("DOMContentLoaded", function() {
    if(textArray.length) setTimeout(type, newtTextDelay +250)
})