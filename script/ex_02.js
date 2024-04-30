let count = 0;

const onMountPutCounter = (count = 0) => {
    document.getElementsByTagName('div')[2].innerText = count;
}

const onClickIncrementCounter = (e) => {
    e.preventDefault();
    count++;
    onMountPutCounter(count)
}

domIsReady(() => {
    onMountPutCounter();
    document.getElementsByTagName('div')[2].addEventListener('click', onClickIncrementCounter);
})
