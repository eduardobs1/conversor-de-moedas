const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")


function convertValues () {

    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvet = document.querySelector(".currency-value-to-convert") //Valor em dolar
    const currencyValueConveted = document.querySelector(".currency-value") // Outras moedas
    
    const dolarToday = 5.20
    const euroToday = 6.20
    const bitcoinToday = 633688
    const libraToday = 7.40


    if(currencySelect.value == "dolar"){ 
    //Se o select estiver selecionado o valor de dolar, entre aqui
        currencyValueConveted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency:"USD"
        }).format(inputCurrencyValue / dolarToday)
    }

    if(currencySelect.value == "euro"){ 
    //Se o select estiver selecionado o valor de euro, entre aqui
        currencyValueConveted.innerHTML = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency:"EUR"
        }).format(inputCurrencyValue / euroToday)
    }
    
    if(currencySelect.value == "bitcoin"){
    //Se o select estiver selecionado o valor de bitcoin, entre aqui
        currencyValueConveted.innerHTML = new Intl.NumberFormat("en-US",{
            style:"currency",
            currency:"BTC"
        }).format(inputCurrencyValue / bitcoinToday)
    }

    if(currencySelect.value == "libra"){

        currencyValueConveted.innerHTML = new Intl.NumberFormat("en-UK",{
            style:"currency",
            currency:"GBP"
        }).format(inputCurrencyValue / libraToday)
    }
    

    currencyValueToConvet.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency:"BRL"
    }).format(inputCurrencyValue)

    


}

function changeCurrency() {
    const currencyName = document.getElementById("currency-name")
    const currencyImg = document.querySelector(".currency-img")

    if(currencySelect.value == "dolar"){
        currencyName.innerHTML = "Dólar Americano"
        currencyImg.src = "./assets/usa.png"
     }
     
    if(currencySelect.value == "euro"){
        currencyName.innerHTML = "Euro"
        currencyImg.src = "./assets/euro.png"
     }

     if(currencySelect.value == "bitcoin"){
        currencyName.innerHTML = "Bitcoin"
        currencyImg.src = "./assets/bitcoin 1.png"
    }

    if(currencySelect.value == "libra"){
        currencyName.innerHTML = "Libra"
        currencyImg.src = "./assets/libra 1.png"
    }

     convertValues()

}

currencySelect.addEventListener("change", changeCurrency )
convertButton.addEventListener("click", convertValues)