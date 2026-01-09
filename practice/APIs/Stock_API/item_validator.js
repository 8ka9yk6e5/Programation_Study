const itemValidator = {
    keyValidator(req, res, next){
        const keys = Object.keys(req.body);
        if(keys.every(value => value.trim().length > 0)) next();
        else throw new Error('Invalid Key in request').message;
    },

    valueValidator(req, res, next){
        try{
            for(let item of Object.entries(req.body)){
                let itemObject = Object.fromEntries(item[1]);
                if (itemValidator._codeValidator(itemObject.code)) res.end();
            }
        }
        catch(err){
            res.status(400).json({work : false, Error : err.message});
        }
    },

    _codeValidator(code){
        const strCode = String(code);
        if(strCode.length == 6 && !isNaN(code)) return true;
        else throw new Error('Invalid code value'); 
    },

    _quantityValidator(quantity){

    },

    _priceValidator(price){

    },
};

module.exports = itemValidator;