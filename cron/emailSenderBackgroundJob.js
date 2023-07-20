const cron = require("node-cron")
const EmailTransporter = require("../notifire/emailServise")
const notifactionService = require("../models/notifactionService")
cron.schedule('*/30 * * * * *', async () =>{
    console.log("I am background job")

    const notification = await notifactionService.find({status:"NOT_SENT"})
    if(notification && notification.length > 0){
        notification.forEach(notification => {
      const emailObj = {
    from: 'crmapp54@gmail.com',
    to: notification.recepientEmails,
    subject: notification.subject,
    text: notification.content
}

EmailTransporter.sendMail(emailObj , async function (err, info) {
    if(err){
        console.log(err.massage)
    }else{
        console.log(info)

         //update notification document status
         notification.status = "SENT"
          await notification.save()
    }
          })
     });
    }

})
