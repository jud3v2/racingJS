domIsReady(function () {
    const elements = document.querySelectorAll('canvas');
    const colors = ['orange', 'orange', 'orange', 'orange', 'purple', 'purple', 'purple', 'black', 'green',
        'green', 'green', 'green'];
    let i = 0;
    for (let element of elements) {
        element.style.backgroundColor = colors[i];
        i++;
    }
});