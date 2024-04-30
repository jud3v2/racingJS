const DATA = {
    IMG_URL: "https://www.coding-academy.fr/wp-content/uploads/2017/10/CODING_LOGO_CMJN.png",
    IMG_ALT: "Coding Academy logo",
    IMG_NAME: "ex12_img",
    IMG_HEIGHT: 150,
    IMG_WIDTH: 400
}
const showImageFromLocalStorage = () => {
    const img = document.createElement("img");
    const box = document.querySelector('footer > div');
    img.src = localStorage.getItem(DATA.IMG_NAME);
    img.alt = DATA.IMG_ALT;
    img.height = DATA.IMG_HEIGHT;
    img.width = DATA.IMG_WIDTH;
    box.appendChild(img);
};

domIsReady(function () {
    if(localStorage.getItem(DATA.IMG_NAME)) {
        showImageFromLocalStorage();
    } else {
        // put localStorage img.
        // call the function to show the image.
        localStorage.setItem(DATA.IMG_NAME, DATA.IMG_URL);
        showImageFromLocalStorage();
    }

    const img = document.querySelector('footer > div > img');

    img.addEventListener('click', () => {
        localStorage.removeItem(DATA.IMG_NAME);
        img.remove();
    });

    img.addEventListener('mouseover', () => {
        const interval = setInterval(() => {
            // decrease image by 5% each seconds
            img.width = img.width * 0.95;
            img.height = img.height * 0.95;
        }, 1000)

        img.addEventListener('mouseout', () => {
            // reset image size
            img.width = DATA.IMG_WIDTH;
            img.height = DATA.IMG_HEIGHT;
            clearInterval(interval);
        });
    });
});