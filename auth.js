const db = require('./db/models');

const signinUser = (req, res, user) => {
    req.session.auth = {userId: user.id}
}

const signoutUser = (req, res) => {
    if (!res.locals.authenticated) {
        return res.redirect('/user/signin')
    }
    return next();
}

const restoreUser = async (req, res, next) => {
    console.log(req.session);
    if (req.session.auth) {
        const {userId} = req.session.auth;
        try {
            const user = await db.User.findByPk(userId);
            if (user) {
                res.locals.authenticated = true;
                res.locals.user = user;
                next();
            }
        } catch (err) {
            res.locals.authenticated = false;
            next(err);
        }
    } else {
        res.locals.authenticated = false;
        next()
    }
}

module.exports = { signinUser, signoutUser, restoreUser}
