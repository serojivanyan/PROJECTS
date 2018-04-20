
var email   = require('emailjs/email');
var constructor = {};
constructor.sendMail = function(req,res){
    console.log(req.body)
    var server  = email.server.connect({
        user:    "vahemur86@gmail.com", 
        password: "Q!w2e3r4t5", 
        // port:587,
        host:    "smtp.gmail.com", 
        ssl:     true
     });
      
     // send the message and get a callback with an error or details of the message that was sent
     server.send({
        text:    "You have signed up", 
        from:    "vahemur86@gmail.com", 
        to:      "sur.avdalyan@gmail.com",
        subject: `New Message from ${req.body.email}`,
        attachment: 
        [
           {data:`<html> <i>Name:${req.body.name}</i> 
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