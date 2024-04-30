document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('form').addEventListener('submit', (e) => {
        e.preventDefault();

        const fileInput = document.querySelector('input[type="file"]');
        const file = fileInput.files[0];

        const link = document.createElement('a');
        link.href = URL.createObjectURL(file);
        link.download = file.name;
        link.style.display = 'none';
        document.body.appendChild(link);

        link.click();

        document.body.removeChild(link);
    });
});