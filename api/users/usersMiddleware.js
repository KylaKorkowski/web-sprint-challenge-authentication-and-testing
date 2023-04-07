const User = require('./users-model');

const validateCredentials = (req, res, next) => {
    if (!req.body.username || !req.body.password) {
        next({ status: 400, message: 'username and password required' })
    } else {
        req.username = req.body.username.trim()
        req.password = req.body.password.trim()
        next()
    }
}

const checkUsernameExists = async (req, res, next) => {
    try {
        const user = await User.findByUsername(req.username);
        
        if (!user || user === undefined) {
            req.user = user;
            next();
        } else {
            next({ status: 400, message: 'username taken' });
        }
    } catch(err) {
        next(err);
    }
}

module.exports = {
    validateCredentials,
    checkUsernameExists,
}