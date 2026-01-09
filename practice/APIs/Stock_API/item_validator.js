const itemValidator = {
    keyValidator(req, res, next){
        const keys = Object.keys(req.body);
        if(keys.every(value => value.trim().length > 0)) next();
        else throw new Error('Invalid Key in values').message;
    }
};

module.exports = itemValidator;