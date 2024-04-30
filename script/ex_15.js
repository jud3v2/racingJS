const formatData = data => {
    const { EUR, USD, GBP } = data;

    return {
        EUR,
        USD,
        GBP
    };
};

const changeColor = (d1, d2) => {
    const canvas = document.querySelector("span");

    if(d1 === d2) {
        canvas.style.backgroundColor = 'orange'
    } else if(d1 > d2) {
        canvas.style.backgroundColor = 'green'
    } else if(d1 < d2) {
        canvas.style.backgroundColor = 'red'
    }
}

const extractDataAndDisplayChange = (data1, data2) => {
    const { EUR: EUR1, USD: USD1, GBP: GBP1 } = data1;
    const { EUR: EUR2, USD: USD2, GBP: GBP2 } = data2;

    changeColor(EUR1, EUR2);

    return {
        EUR: EUR2 - EUR1,
        USD: USD2 - USD1,
        GBP: GBP2 - GBP1
    };
};

domIsReady(async () => {
    const endpoint = "https://api.coindesk.com/v1/bpi/currentprice.json";
    const request = await fetch(endpoint);
    const data = await request.json()
        .then(data => {
            if(!localStorage.getItem("data")) {
                localStorage.setItem("data", JSON.stringify(data));
            } else {
                extractDataAndDisplayChange(formatData(localStorage.getItem("data")), formatData(data));
                localStorage.setItem("data", JSON.stringify(data));
            }
         });
});