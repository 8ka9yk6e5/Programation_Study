let realValue, dollarValue, euroValue, ieneValue, rubleValue, yuanValue;
const dollarTax = 5.25, euroTax = 6.30, ieneTax = 0.036, rubleTax = 0.064, yuanTax = 0.75;

realValue = 10;

dollarValue = (realValue / dollarTax).toFixed(2);
euroValue = (realValue / euroTax).toFixed(2);
ieneValue = (realValue / ieneTax).toFixed(2);
rubleValue = (realValue / rubleTax).toFixed(2);
yuanValue = (realValue / yuanTax).toFixed(2);

const conversionTable = {
    "Converted Values":{
        "Real(BRL)":Number(realValue), 
        "Dollar(USD)":Number(dollarValue), 
        "Euro(EUR)":Number(euroValue), 
        "Iene(JPY)":Number(ieneValue), 
        "Ruble(RUB)":Number(rubleValue),
        "Yuan(CNY)":Number(yuanValue)},
    "TaxValue":{
        "Real(BRL)":"X",
        "Dollar(USD)":dollarTax, 
        "Euro(EUR)":euroTax, 
        "Iene(JPY)":ieneTax, 
        "Ruble(RUB)":rubleTax,
        "Yuan(CNY)":yuanTax
    }
    };

console.table(conversionTable);