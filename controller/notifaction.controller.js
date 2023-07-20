const  notifactionSchema = require("../models/notifactionService")

exports.acceptNotifactionRequest = async (req, res) => {

    const notifaction = ({
        ticketId: req.body.ticketId,
        subject: req.body.subject,
        status: req.body.status,
        requester: req.body.requester,
        content: req.body.content,
        recepientEmails: req.body.recepientEmails,
   })
   try{
    const notification = await  notifactionSchema.create(notifaction)
   
    if(notification){
        res.status(201).send({
            requestId: notification._id,
            messgae: "Request has been accepted user notification sent"
        })
    }else{
        res.status(401).send({message: "error by user side"})
    }

   }catch(e){
    res.status(500).send({message: "Error while user side"})
   }



} 
exports.getNotifactionServise = async (req, res) => {
   
    const notification = await notifactionSchema.findById({_id: req.params.id})
    try{
    if(notification){
        res.status(201).send(notification)
    }else{
        res.status(401).send({message: "Error! by user side"})
    }

   }catch(e){
    res.status(500).send({message: "Error while user side"})
   }

}



