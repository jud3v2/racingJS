document.addEventListener('DOMContentLoaded', function () {
    const datePicker = document.createElement('input');
    datePicker.type = 'date';
    document.querySelector('footer > div').appendChild(datePicker);

    const dateDisplay = document.createElement('p');
    document.querySelector('footer > div').appendChild(dateDisplay);

    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    datePicker.addEventListener('change', (e) => {
        const date = new Date(e.target.value);
        const dayName = days[date.getDay()];
        const day = date.getDate();
        const month = months[date.getMonth()];
        const year = date.getFullYear();
        dateDisplay.textContent = `${dayName} ${day} ${month} ${year}`;
    });
});