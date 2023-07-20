const nodemailer = require("nodemailer")

module.exports = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
        user: 'crmapp54@gmail.com',
        pass: 'uitoddzoyksjrauh'
    },
    secure: true
})

