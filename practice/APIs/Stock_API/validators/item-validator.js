function validatorMiddleware(req, res, next){
    try{
        _keyValidator(Object.keys(req.body));
        _importantValueVerifier(Object.entries(req.body));
        _valueValidator(Object.entries(req.body));
        next();
    }
    catch(err){
        res.status(400).json({work : false, Error : err.message});
    }
}

function _keyValidator(keys){
    if(!(keys.every(value => value.trim().length > 0))) throw new Error('Invalid Key in request');
}

function _valueValidator(items){
    for(let item of items){
        let itemInformations = item[1];
        _codeValidator(itemInformations.code);
        _quantityValidator(itemInformations.quantity);
        _priceValidator(itemInformations.price);
    }
}

function _codeValidator(code){
    const strCode = String(code);
    if(!(strCode.length == 6) || isNaN(strCode)) throw new Error('Invalid item code');
}

function _quantityValidator(quantity){
    if(!(quantity >= 0)) throw new Error('Invalid quantity');
}

function _priceValidator(price){
    const strPrice = String(price);
    if(!(price >= 0) || !/^\d+$/.test(strPrice)) throw new Error('invalid price');
}

const _importantValues = ['code', 'quantity', 'price'];

function _importantValueVerifier(items){
    for (let item of items){
        let informations = Object.keys(item[1]);
        if(!(_importantValues.every(valueName => informations.includes(valueName)))) {
            throw new Error('Important value is missing');
        }
    }
}

module.exports = validatorMiddleware;
//correct the response message