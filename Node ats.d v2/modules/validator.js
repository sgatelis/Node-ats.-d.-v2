const sendRes = require("../modules/sendRes")
// const validator = require("email-validator")

module.exports = {
    validateRegister: (req, res, next) => {
        const {password1, password2} = req.body

        if(password1 !== password2) return sendRes(res, "bad password", true)

        // if(!validator.validate(email)) return sendRes(res, "bad email", true)

        next()
    }
}