const resultInput = document.querySelector("#input");
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        const numbers = e.target.textContent;

        if (numbers === 'AC') {
            resultInput.value = '';
        } else if (numbers === '=') {
            try {
                resultInput.value = eval(resultInput.value);
            } catch (error) {
                resultInput.value = 'Error';
            }
        } else {
            resultInput.value += numbers;
        }
    });
});


