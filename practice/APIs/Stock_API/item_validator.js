const itemValidator = {
    _keyValidator(keys){
        if(!(keys.every(value => value.trim().length > 0))) throw new Error('Invalid Key in request');
    },

    _importantValueVerifier(){

    },

    _unimportantValuesRemover(){

    },

    _valueValidator(items){
        for(let item of items){
            let itemInformations = item[1];
            itemValidator._codeValidator(itemInformations.code);
            itemValidator._quantityValidator(itemInformations.quantity);
            itemValidator._priceValidator(itemInformations.price);
        }
    },

    _codeValidator(code){
        const strCode = String(code);
        if(!(strCode.length == 6) || isNaN(code)) throw new Error('Invalid item code');
    },
    _quantityValidator(quantity){
        if(!(quantity >= 0)) throw new Error('Invalid quantity');
    },

    _priceValidator(price){
        if(!(price >= 0) || isNaN(price)) throw new Error('invalid price');
    },

    validatorControler(req, res, next){
        try{
            itemValidator._keyValidator(Object.keys(req.body));
            itemValidator._valueValidator(Object.entries(req.body));
            next();
        }
        catch(err){
            res.status(400).json({work : false, Error : err.message});
        }
    }
};

module.exports = itemValidator;