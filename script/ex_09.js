domIsReady(function () {
    let canvas = document.querySelector('footer > div > canvas');
    let parentDiv = canvas.parentElement;
    canvas.style.position = 'absolute';
    let startX, startY;
    canvas.onmousedown = function (event) {
        startX = event.clientX - canvas.offsetLeft;
        startY = event.clientY - canvas.offsetTop;
    }
    parentDiv.onmousemove = function (event) {
        if (!startX || !startY) return;

        let newX = event.clientX - startX;
        let newY = event.clientY - startY;

        let parentRect = parentDiv.getBoundingClientRect();

        let relativeX = event.clientX - parentRect.left;
        let relativeY = event.clientY - parentRect.top;

        let halfWidth = canvas.offsetWidth / 2;
        let halfHeight = canvas.offsetHeight / 2;

        if (relativeX - halfWidth < 0 || relativeY - halfHeight < 0 || relativeX + halfWidth > parentDiv.offsetWidth || relativeY + halfHeight > parentDiv.offsetHeight) {
            startX = startY = null;
            return;
        }

        canvas.style.left = `${newX}px`;
        canvas.style.top = `${newY}px`;

        let footerDiv = document.querySelector('footer div:nth-child(2)');

        footerDiv.textContent = `New coordinates => {x:${newX}, y:${newY}}`;
    }

    parentDiv.onmouseup = function () {
        startX = null;
        startY = null;
    }
});