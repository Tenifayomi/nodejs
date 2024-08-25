const nodemailer = require('nodemailer')

const sendMail = async (user, subject, body)=> {
   const Transporter = nodemailer.createTransport({
    host:"smtp.gmail.com",
    port:465,
    secure:true,
    auth:{
        user:process.env.THE_EMAIL,
        pass:process.env.EMAIL_PASSWORD
    },
    tls:{
        rejectUnauthorized:false
    }


    })
    const options =  {
        from: "Klaus",
        to: " ladybeerah00@gmail.com",
        reply_to:"tenifayo307@gmail.com",
        html: '<h1>Hello World</h1>'
     }
     Transporter.sendMail(options,function(err,info){
        if(err){
            console.log(err);
        }else{
            console.log(info);
        }
     })
}

module.exports = sendMail