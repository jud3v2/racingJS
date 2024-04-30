const $ = str => {
    if(typeof str === 'string') {
        return document.querySelector(str)
    } else {
        return false;
    }
}