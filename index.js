let input = document.getElementById('input');
buttons = document.querySelectorAll('button');
let inputValue = '';
for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        if (buttonText == 'x') {
            buttonText = '*';
            inputValue += buttonText;
            input.value = inputValue;
        }
        else if (buttonText == 'C') {
            inputValue = "";
            input.value = inputValue;
        }
        else if (buttonText == '=') {
            input.value = eval(inputValue);
        }
        else {
            inputValue += buttonText;
            input.value = inputValue;
        }
        
    })
}
