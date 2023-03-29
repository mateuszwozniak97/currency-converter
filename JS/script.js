let amountElement = document.querySelector(".js-amount");
let formElement = document.querySelector(".js-form");
let currencyElement = document.querySelector(".js-currency")
let resultElement = document.querySelector(".js-result");

let rateUSD = 4.30;
let rateEUR = 4.68;
let rateCHF = 4.70;
let rateGBP = 5.30;
let rateCNY = 0.65;

formElement.addEventListener("submit", (event) => {
    event.preventDefault();
    let amount = +amountElement.value;
    let currency= currencyElement.value;
    let result;

    switch (currency) {
        case "USD":
            result = amount / rateUSD;
            break;
        case "EUR":
            result = amount / rateEUR;
            break;
        case "CHF":
            result = amount / rateCHF;
            break;
        case "GBP":
            result = amount / rateGBP;
            break;
        case "CNY":
            result = amount / rateCNY;
            break;
    }
    resultElement.innerHTML = `<strong>${amount.toFixed(2)} PLN </strong> = <strong>${result.toFixed(2)} ${currency}</strong>`;
});