
var email   = require('emailjs/email');
var constructor = {};
constructor.sendMail = function(req,res){
    var subject;
    console.log(req.body)
    if(!req.body.tourName){
        subject="Contact"
    }
    if(req.body.tourName){
        subject=`Tourname  ${req.body.tourName}`
    }
    var server  = email.server.connect({
        user:    "gohar180614@gmail.com", 
        password: "gogi001148", 
        port:587,
        host:    "smtp.gmail.com", 
        tls:     true
     });
      
     // send the message and get a callback with an error or details of the message that was sent
     server.send({
        text:    "You have signed up", 
        from:    "gohar180614@gmail.com", 
        to:      "seroj.ivanyan@gmail.com",
        subject: `New Message from ${req.body.email}`,
        attachment: 
        [
           {data:`<html> <p>Subject:${subject}</p>
           <i>Name:${req.body.name}</i> 
           <p>Telephone:${req.body.telephone}</p>
           <p>Email:${req.body.email}</p>
           <p>Message:${req.body.message}</p>
               </html>`, alternative:true},
        //  {path:"pathtofile.zip", type:"application/zip", name:"renamed.zip"}
        ]
     }, function(err, message) { 
         if(err)
         console.log(err);
         else
         res.json({success: true, msg: 'sent'});
      });
             
         }


module.exports = constructor