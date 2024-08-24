import nodemailer from 'nodemailer';


const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'harshnayan36@gmail.com', 
    pass: 'janb yrcm kotj xkvq'        
  }
});


export const sendMail = (to, subject, text) => {
  const mailOptions = {
    from: 'Y4D Foundation',
    to ,                           
    subject: "Your Application has been approved ",                       
    text: "Thankyou for applying to our organisation, we have been applied to the"
  };


  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log('Error sending email:', error);
    } else {
      console.log('Email sent successfully:', info.response);
    }
  });
};