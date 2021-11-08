const darkModeStorage = localStorage.getItem('darkModeSave');


const html = document.querySelector('html');
const logo = document.querySelector('header a img');
const btn = document.querySelector('a.button');
const iconBtn = document.querySelector('a.button img');
const bg = document.querySelector('div#bg');
const colorInputFont = document.querySelector('form input');
const colorTextAreaFont = document.querySelector('form textarea');
const btnCopy = document.querySelector('div .buttons .button.outlined');
const btnCopyImg = document.querySelector('div .buttons .button.outlined img');

const noQuestion = document.querySelector('.no-questions img');
const noQuestionP = document.querySelectorAll('.no-questions p')

const colorLinkCheck = document.querySelectorAll('.question-wrapper a');
const colorLinkNot = document.querySelectorAll('.question-wrapper.read a')
const noturno = document.querySelector('.day-period div.lua')
const lightDay = document.querySelector('.day-period div.sol')

const idHome = document.getElementById('home');
const idRoom = document.getElementById('room');

if (darkModeStorage) {
    // ativa o dark mode
    html.classList.add('periodNight')

    if(idHome) {
        if(html.classList.contains('periodNight')) {
            logo.src = "/images/logo-dark.svg";
            colorInputFont.classList.toggle('dark-mode-color');
            if(btn != null) {
                iconBtn.src = "/images/users-dark.svg";
                btn.classList.toggle('dark-mode-btn');
            }        
            bg.classList.toggle('dark-mode-img');

        }

    } else if(idRoom) {
        if(html.classList.contains('periodNight')) {
            logo.src = "/images/logo-dark.svg";
            btnCopy.classList.toggle('dark-mode-copy');
            btnCopyImg.src = "/images/copy-dark.svg";
            colorTextAreaFont.classList.toggle('dark-mode-color');
            colorLinkCheck.forEach(a =>{
                    
                    a.classList.toggle('dark');
                    colorLinkNot.forEach(a => {
                        a.classList.remove('dark')
                    })
            } )
            
            if(noQuestion != null) {
                noQuestion.src = "/images/no-questions-dark.svg";
                noQuestionP.forEach(p => {

                    p.style.color ="#A5B0C1";
                })
            }
                
        }
    }
    
}

noturno.addEventListener('click', function() {

    html.classList.add('periodNight');
    
    if(idHome) {
        if(html.classList.contains('periodNight')) {
            logo.src = "/images/logo-dark.svg";
            colorInputFont.classList.add('dark-mode-color');
            if(btn != null) {
                iconBtn.src = "/images/users-dark.svg";
                btn.classList.add('dark-mode-btn');
            }        
            bg.classList.add('dark-mode-img');

            localStorage.setItem('darkModeSave', true)
            return
        }

        localStorage.removeItem('darkModeSave')

    } else if(idRoom) {

        if(html.classList.contains('periodNight')) {
            logo.src = "/images/logo-dark.svg";
            btnCopy.classList.add('dark-mode-copy');
            btnCopyImg.src = "/images/copy-dark.svg";
            colorTextAreaFont.classList.add('dark-mode-color');
            colorLinkCheck.forEach(a =>{
                    
                a.classList.add('dark')
                colorLinkNot.forEach(a => {
                    a.classList.remove('dark')
                })     
            } )

            if(noQuestion != null) {
                noQuestion.src = "/images/no-questions-dark.svg";
                noQuestionP.forEach(p => {

                    p.style.color ="#A5B0C1";
                })
            }
                
            localStorage.setItem('darkModeSave', true)
            return
        }
        localStorage.removeItem('darkModeSave')
    }

})

lightDay.addEventListener('click', function () {

    html.classList.remove('periodNight');

    if (idHome) {
        if (html.classList.contains('periodNight') == false) {
            
            logo.src = "/images/Logo.svg"
            colorInputFont.classList.remove('dark-mode-color');
            if(btn != null) {
                iconBtn.src = "/images/users.svg";
                btn.classList.remove('dark-mode-btn');
            }
            bg.classList.remove('dark-mode-img');

        }
        localStorage.removeItem('darkModeSave')
    }else if (idRoom) {

        if (html.classList.contains('periodNight') == false) {

            logo.src = "/images/Logo.svg";
            btnCopy.classList.remove('dark-mode-copy');
            btnCopyImg.src = "/images/copy.svg";
            colorTextAreaFont.classList.remove('dark-mode-color');
            colorLinkCheck.forEach(a =>{
            
                a.classList.remove('dark')
                
            } )

            if(noQuestion != null) {
                noQuestion.src = "/images/noquestions01.png";
                noQuestionP.forEach(p => {

                    p.style.color ="black";
                })
            }
            
        }
        localStorage.removeItem('darkModeSave')
    }
})
