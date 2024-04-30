domIsReady(() => {
    const canvas = document.querySelector('canvas');
    const ctx = canvas.getContext('2d');
    const rect = canvas.getBoundingClientRect();
    const audio = new Audio('./triangle.ogg');
    const buttons = document.querySelectorAll('button');
    const actions = ['pause', 'stop', 'mute'];

    ctx.beginPath();
    ctx.moveTo(6, 6);
    ctx.lineTo(14, 10);
    ctx.lineTo(6, 14);
    ctx.closePath();
    ctx.fillStyle = 'white';
    ctx.fill();
    ctx.lineWidth = 1;
    ctx.strokeStyle = 'black';
    ctx.stroke();

    canvas.addEventListener('click', (event) => {
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        if (ctx.isPointInPath(x, y)) {
            audio.play();
        }
    });

    buttons.forEach((button, index) => {
        button.addEventListener('click', () => {
            if (actions[index] === 'pause') {
                audio.pause();
            } else if (actions[index] === 'stop') {
                audio.pause();
                audio.currentTime = 0;
            } else if (actions[index] === 'mute') {
                audio.muted = !audio.muted;
            }
        });
    });
});