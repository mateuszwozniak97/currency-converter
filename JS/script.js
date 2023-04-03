{
    const calulateResult = (amount, currency) => {
        const rateUSD = 4.30;
        const rateEUR = 4.68;
        const rateCHF = 4.70;
        const rateGBP = 5.30;
        const rateCNY = 0.65;
        switch (currency) {
            case "USD":
                return amount / rateUSD;
            case "EUR":
                return amount / rateEUR;
            case "CHF":
                return amount / rateCHF;
            case "GBP":
                return amount / rateGBP;
            case "CNY":
                return amount / rateCNY;
        };
    };

    const updateResultText = (amount, result, currency) => {
        const resultElement = document.querySelector(".js-result");
        resultElement.innerHTML = `<strong>${amount.toFixed(2)} PLN </strong> = <strong>${result.toFixed(2)} ${currency}</strong>`;
    };
    const onFormSubmit = (event) => {
        event.preventDefault();

        const amountElement = document.querySelector(".js-amount");
        const currencyElement = document.querySelector(".js-currency");

        const amount = +amountElement.value;
        const currency = currencyElement.value;
        let result = calulateResult(+amount, currency);
        updateResultText(amount, result, currency);
    };

    const init = () => {
        const formElement = document.querySelector(".js-form");
        formElement.addEventListener("submit", onFormSubmit);
    };
    init();
};
