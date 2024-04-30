const onClickPlusButton = (event) => {
    event.preventDefault();
    let style = window.getComputedStyle(document.getElementsByTagName('body')[0], null).getPropertyValue('font-size');
    let fontSize = parseInt(style);
    document.getElementsByTagName('body')[0].style.fontSize = fontSize + 1 + 'px';
}

const onClickMinusButton = (event) => {
    event.preventDefault();
    let style = window.getComputedStyle(document.getElementsByTagName('body')[0], null).getPropertyValue('font-size');
    let fontSize = parseInt(style);
    document.getElementsByTagName('body')[0].style.fontSize = fontSize - 1 + 'px';
}

const onChangeSelect = (event) => {
    event.preventDefault();
    document.querySelector('html').style.backgroundColor = event.target.value;
}

domIsReady(() => {
    const selectElement = document.getElementsByTagName('select')[0];
    const buttons = document.getElementsByTagName('button');
    const plusButton = buttons[0];
    const minusButton = buttons[1];

    plusButton.addEventListener('click', event => onClickPlusButton(event, plusButton));
    minusButton.addEventListener('click', event => onClickMinusButton(event, minusButton));
    selectElement.addEventListener('change', onChangeSelect);
});