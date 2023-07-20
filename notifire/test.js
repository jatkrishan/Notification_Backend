const EmailTransporter = require("./emailServise")

const emailObj = {
    from: 'crmapp54@gmail.com',
    to: ["krishanjaat8432@gmail.com", "rachanachoudhary129@gmail.com"],
    subject: "Test email from CRM",
    text: "Hellow welcome to CRM"
}

EmailTransporter.sendMail(emailObj , async function (err, info) {
    if(err){
        console.log(err.massage)
    }else{
        console.log(info)
    }
})