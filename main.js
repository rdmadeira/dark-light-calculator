window.onload = ()=> {
    const lightSwitch = document.getElementById('light-switch-div');
    const darkSwitch = document.getElementById('dark-switch-div');
    lightSwitch.addEventListener('click', lightMode);        
    darkSwitch.addEventListener('click', darkMode);
    darkMode();
    function lightMode(){
        let checkedInput = document.querySelector('input[type="radio"]:checked');
        if(checkedInput.value == 'dark'){
            lightSwitch.style.backgroundColor = 'var(--cadet-grey)';
            document.querySelector('#light-switch-div img').setAttribute('src','./images/sun-light.svg');
            document.querySelector('#dark-switch-div img').setAttribute('src','./images/moon-dark.svg');
            darkSwitch.removeAttribute('style');
        }
    }
    function darkMode(){
        let checkedInput = document.querySelector('input[type="radio"]');
        if(checkedInput.value == 'light'){
            darkSwitch.style.backgroundColor = 'var(--cadet-grey)';
            document.querySelector('#light-switch-div img').setAttribute('src','./images/sun-dark.svg');
            document.querySelector('#dark-switch-div img').setAttribute('src','./images/moon-light.svg');
            lightSwitch.removeAttribute('style');
        }
    }
}