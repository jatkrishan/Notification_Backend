const notificationServise = require("../controller/notifaction.controller")

module.exports = function(app){

    app.post("/notifaction/api/v1/notifaction/" , notificationServise.acceptNotifactionRequest)
    app.get("/notifaction/api/v1/notifaction/:id" , notificationServise.getNotifactionServise)
}
