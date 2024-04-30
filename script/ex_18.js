document.addEventListener('DOMContentLoaded', function () {
    const dragAndDropZone = document.querySelector('footer .drag_drop');
    dragAndDropZone.textContent = 'Glissez et déposez une ou plusieurs images ici';

    dragAndDropZone.addEventListener('dragover', (e) => {
        e.preventDefault();
        dragAndDropZone.classList.add('drop-zone--over');
    });

    dragAndDropZone.addEventListener('dragleave', () => {
        dragAndDropZone.classList.remove('drop-zone--over');
    });

    dragAndDropZone.addEventListener('drop', (e) => {
        e.preventDefault();
        dragAndDropZone.classList.remove('drop-zone--over');

        const files = e.dataTransfer.files;
        dragAndDropZone.textContent = '';
        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            if (file.type.startsWith('image/')) {
                const img = document.createElement('img');
                img.src = URL.createObjectURL(file);
                img.onload = () => URL.revokeObjectURL(img.src);
                img.style.maxWidth = '100%';
                img.style.maxHeight = '100%';
                dragAndDropZone.appendChild(img);
            }
        }
    });
});