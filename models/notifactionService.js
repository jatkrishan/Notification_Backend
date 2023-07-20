const mongoose = require("mongoose")

const notifactionSchema = new mongoose.Schema({
    ticketId: {
        type:String,
        required: true,
    },
    subject: {
        type: String,
        required: true
    },
    requester: {
        type: String
    },
    status : {
        type: String,
        required: true,
        default: "NOT_SENT"
    },
    recepientEmails :{
         type: [String],
         required: true
   },
   content : {
    type: String,
    required: true
   },
   createdAt: {
    type: Date,
     immutable: true,
     default: () => {
        return Date.now()
    }
   },
   updateAt: {
    type: Date,
     default: () => {
        return Date.now()
    }
   }


})

module.exports = mongoose.model("NotifactionServise", notifactionSchema)