const displayName = (name) => {
    document.getElementsByTagName('div')[2].innerText = "Hello " + name + " !";
}

const message = {
    ERROR_LENGTH: "Minimum 3 chars are required for your name.",
    ANSWER_NAME: "What is your name ?",
    ANSWER_CONFIRM_NAME: "Are you sure ?"
}

const onClickShowPrompt = (error = false) => {
    const userData = showPrompt(error ? message.ERROR_LENGTH : message.ANSWER_NAME);
    if(userData.length < 3) {
        onClickShowPrompt(true);
    } else {
        if(window.confirm(message.ANSWER_CONFIRM_NAME)) {
            displayName(userData)
            showPrompt("Hello " + userData + " !", true);
        } else {
            showPrompt(message.ANSWER_NAME)
        }
    }
}

const showPrompt = (message = '', alert = false) => {
    return alert ? window.alert(message) : window.prompt(message);
}

domIsReady(() => {
    document.getElementsByTagName('div')[2].addEventListener('click', (event) => {
        event.preventDefault();
        onClickShowPrompt();
    });
})