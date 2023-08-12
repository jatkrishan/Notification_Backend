//require module 
const configUrl = require("./config/configUrl")
const configServer = require("./config/server.config")

//connection require
const express = require("express")
const app = express()
const bodyParser = require("body-parser")
app.use(bodyParser.json())

app.use(bodyParser.urlencoded({extended: true}))
const mongoose = require("mongoose")
mongoose.connect(configUrl.DB_URL)
const db = mongoose.connection
require("././cron/emailSenderBackgroundJob")

db.on("error" ,() => {
    console.log("Error by Connnection")
})
db.once("open" , () => {
console.log("Mongoose Connection Ceonnected")
})

require("./routes/notifaction.route")(app)

app.listen(configServer.PORT, () =>{
    console.log("Server connected by port " ,configServer.PORT)
})
