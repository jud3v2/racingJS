domIsReady(() => {
    const cookieButton = document.querySelector('footer > div a');
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete cookies';
    deleteButton.style.display = 'none';

    const newDiv = document.createElement('div');
    newDiv.style.display = 'none';
    newDiv.style.display = 'flex';
    newDiv.style.justifyContent = 'center';
    newDiv.style.alignItems = 'center';
    newDiv.style.height = '100%';
    newDiv.appendChild(deleteButton);

    function createCookie() {
        let expires = new Date();
        expires.setDate(expires.getDate() + 1);
        document.cookie = 'acceptsCookies=true; expires=' + expires.toUTCString() + '; path=/';
        console.log('Cookie created successfully!');
        document.querySelector('footer > div').textContent = '';
        newDiv.style.display = 'flex';
        deleteButton.style.display = 'block';
        document.querySelector('footer').appendChild(newDiv);
    }

    function deleteCookie() {
        document.cookie = 'acceptsCookies=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
        console.log('Cookie deleted successfully!');
        document.querySelector('footer > div').innerHTML = 'This website use cookies, click OK to accept it. <a href="#">OK</a>';
        newDiv.style.display = 'none';
        document.querySelector('footer > div a').addEventListener('click', createCookie);
    }

    cookieButton.addEventListener('click', createCookie);
    deleteButton.addEventListener('click', deleteCookie);
})