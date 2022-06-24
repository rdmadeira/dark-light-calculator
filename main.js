window.onload = ()=> {
    const lightSwitch = document.getElementById('light-switch-div');
    const darkSwitch = document.getElementById('dark-switch-div');
    lightSwitch.addEventListener('click', lightMode);   const main = document.querySelector('main');
    const buttonsDiv = document.querySelector('.buttons-div');
    const buttons = document.querySelectorAll('.button');
    const operationDisplay = document.getElementById('operation-display');
    const resultDisplay = document.getElementById('result-display');
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
        operationDisplay.setAttribute('class','light-font');
        resultDisplay.setAttribute('class', 'light-font');
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
        operationDisplay.setAttribute('class','dark-font');
        resultDisplay.setAttribute('class', 'dark-font');
    }
    let operationText = '';
    let result = new Number();
    buttons.forEach( (item,index) => {
        if(index === 0) {
            item.addEventListener('click',reset);
        }
        if(index === 1) {
            item.addEventListener('click',changeSign);
        }
        if(index>2 && index<19 && index!==16) {
            item.addEventListener('click', ()=> insertValue(index));
        }
        if(index===19){
            item.addEventListener('click', showResult);
        }
        if(index===2){
            item.addEventListener('click', ()=> percent(index));
        }
        
    } );
    
    const buttonValues = [...document.querySelectorAll('label.button~input[type=radio]')].map(item=>item.value);
    function insertValue(i) {
    if(typeof operationText === 'string' || buttonValues[i-1].match('[-%+*/]')){
            operationText = operationText + buttonValues[i-1];
            operationDisplay.textContent = operationText;
        } else {
            operationText = '' + buttonValues[i-1];
            operationDisplay.textContent = operationText;
            resultDisplay.textContent = ''
        }
        return operationText;
    }    
    function showResult() {
        result = eval(operationText.replace('%','*1/100'));
        resultDisplay.textContent = result;
        operationText = result;
        return operationText;
    }
    function changeSign() {
        operationText = -(operationText);
        result = operationText;
        //operationDisplay.textContent = operationText;
        resultDisplay.textContent = result;
        return result;
    }
    function reset() {
        operationText = '';
        result = undefined;
        operationDisplay.textContent = operationText;
        resultDisplay.textContent = '';
        return operationText, result;   
    }
    function percent(i) {
        operationText = operationText + buttonValues[i-1];
        operationDisplay.textContent = operationText;
        resultDisplay.textContent = eval(operationText.replace('%','*1/100'));      
        return operationText;
    }
}