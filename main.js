window.onload = ()=> {
    const lightSwitch = document.getElementById('light-switch-div');
    const darkSwitch = document.getElementById('dark-switch-div');
    lightSwitch.addEventListener('click', lightMode);   const main = document.querySelector('main');
    const buttonsDiv = document.querySelector('.buttons-div');
    const buttons = document.querySelectorAll('.button');
    darkSwitch.addEventListener('click', darkMode);
    darkMode();
    function lightMode(){
        let checkedInput = document.querySelector('input[type="radio"]:checked');
        if(checkedInput.value == 'dark'){
            lightSwitch.style.backgroundColor = 'hsl(0deg 37% 85%)';
            document.querySelector('#light-switch-div img').setAttribute('src','./images/sun-light.svg');
            document.querySelector('#dark-switch-div img').setAttribute('src','./images/moon-dark.svg');
            darkSwitch.removeAttribute('style');
        }
        main.setAttribute('class','light-main');
        buttonsDiv.setAttribute('class','buttons-div buttons-div-light');
        buttons.forEach( item => item.setAttribute('class','button light'));
    }
    function darkMode(){
        let checkedInput = document.querySelector('input[type="radio"]');
        if(checkedInput.value == 'light'){
            darkSwitch.style.backgroundColor = 'var(--cadet-grey)';
            document.querySelector('#light-switch-div img').setAttribute('src','./images/sun-dark.svg');
            document.querySelector('#dark-switch-div img').setAttribute('src','./images/moon-light.svg');
            lightSwitch.removeAttribute('style');
        }
        main.setAttribute('class','dark-main');
        buttonsDiv.setAttribute('class','buttons-div buttons-div-dark');
        buttons.forEach( item => item.setAttribute('class','button dark'));
    }
    
}