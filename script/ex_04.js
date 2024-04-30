let input = "";

const showInput = input => {
    const element = document.getElementsByTagName('div')[2];
    element.innerText = input;
}

const setAndShowInput = event => {

    if(input.length > 42) {
        input = input.substring(1, 42);
        input += event.key;
    } else {
        input += event.key;
    }

    showInput(input)
}

domIsReady(() => {
   document.addEventListener('keydown', setAndShowInput)
})