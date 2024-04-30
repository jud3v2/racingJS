document.addEventListener('DOMContentLoaded', function () {
    function combineImages(urls) {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        const footerDiv = document.querySelector('footer > div'); // Sélectionnez la div dans le footer
        const images = [];
        const positions = []; // Pour stocker les positions des images

        canvas.width = 300;
        canvas.height = 300;

        urls.forEach((url) => {
            const img = new Image();
            img.src = url;
            img.onload = () => {
                images.push(img);
                if (images.length === urls.length) {
                    images.forEach((image, index) => {
                        let x, y;
                        // Calculez le rapport entre la taille du canvas et la taille de l'image
                        const ratio = Math.min(canvas.width / image.width, canvas.height / image.height);
                        // Utilisez le rapport pour redimensionner l'image
                        const width = image.width * ratio;
                        const height = image.height * ratio;
                        do {
                            x = Math.floor(Math.random() * (canvas.width - width));
                            y = Math.floor(Math.random() * (canvas.height - height));
                        } while (positions.some(pos => (x < pos.x + pos.width && x + width > pos.x && y < pos.y + pos.height && y + height > pos.y))); // Continuez à générer de nouvelles positions jusqu'à ce que vous en trouviez une qui n'est pas occupée
                        positions.push({ x, y, width, height }); // Ajoutez la nouvelle position au tableau des positions occupées
                        ctx.drawImage(image, x, y, width, height);
                    });
                    footerDiv.appendChild(canvas); // Ajoutez le canvas à la div
                }
            };
        });
    }
    const urls = [
        'https://placehold.co/600x400',
        'https://placehold.co/800x300',
    ];
    combineImages(urls);
});