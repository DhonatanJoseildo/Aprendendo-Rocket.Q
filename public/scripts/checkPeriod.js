const darkModeStorage = localStorage.getItem('darkModeSave');


const html = document.querySelector('html');
const checkBox = document.querySelector('#switchPeriod');
const logo = document.querySelector('header a img');
const btn = document.querySelector('a.button');
const iconBtn = document.querySelector('a.button img');
const bg = document.querySelector('div#bg');
const colorInputFont = document.querySelector('form input');
const colorTextAreaFont = document.querySelector('form textarea');
const btnCopy = document.querySelector('div .buttons .button.outlined');
const btnCopyImg = document.querySelector('div .buttons .button.outlined img');
const noQuestion = document.querySelector('.no-questions img');
const colorLinkCheck = document.querySelectorAll('.question-wrapper a');
const colorLinkNot = document.querySelectorAll('.question-wrapper.read a')

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
                }
                    
            }
        }
      
        // já deixa o input marcado como ativo
        checkBox.checked = true
}
    
checkBox.addEventListener('click', function(){
        html.classList.toggle('periodNight');
    
        if(idHome) {
            if(html.classList.contains('periodNight')) {
                logo.src = "/images/logo-dark.svg";
                colorInputFont.classList.toggle('dark-mode-color');
                if(btn != null) {
                    iconBtn.src = "/images/users-dark.svg";
                    btn.classList.toggle('dark-mode-btn');
                }        
                bg.classList.toggle('dark-mode-img');
    
                localStorage.setItem('darkModeSave', true)
                return
            }else{
                logo.src = "/images/logo.svg"
                colorInputFont.classList.remove('dark-mode-color');
                if(btn != null) {
                    iconBtn.src = "/images/users.svg";
                    btn.classList.remove('dark-mode-btn');
                }
                bg.classList.remove('dark-mode-img');
                
            }
            localStorage.removeItem('darkModeSave')
    
        } else if(idRoom) {
            if(html.classList.contains('periodNight')) {
                logo.src = "/images/logo-dark.svg";
                btnCopy.classList.toggle('dark-mode-copy');
                btnCopyImg.src = "/images/copy-dark.svg";
                colorTextAreaFont.classList.toggle('dark-mode-color');
                colorLinkCheck.forEach(a =>{
                        
                        a.classList.toggle('dark')
                        colorLinkNot.forEach(a => {
                            a.classList.remove('dark')
                        })
                        
                } )

                if(noQuestion != null) {
                    noQuestion.src = "/images/no-questions-dark.svg";
                }
                    
                localStorage.setItem('darkModeSave', true)
                return
            }else{
                logo.src = "/images/logo.svg";
                btnCopy.classList.remove('dark-mode-copy');
                btnCopyImg.src = "/images/copy.svg";
                colorTextAreaFont.classList.remove('dark-mode-color');
                colorLinkCheck.forEach(a =>{
                
                    a.classList.remove('dark')
                    
                } )

                if(noQuestion != null) {
                    noQuestion.src = "/images/no-questions.svg";
                }
                    
                
            }
            localStorage.removeItem('darkModeSave')
        }
});