const nodemailer = require("nodemailer");
import { emailTemplate } from "./templates/email.template";

export const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  secure: false,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});



export const sendEmail = async (receipient:string, subject:string, content:string, message?:string )=>{
    let template = emailTemplate(content, message)

    const info = await transporter.sendMail({
        from: 'benedictdev31@gmail.com', 
        to: receipient, 
        subject: subject, 
        // text: "Hello world?", 
        html: template, 
      });
}

