import { MailService, SendMailData } from "../mailService";
import nodemailer from "nodemailer";


//configure email system
const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "1910f53bee0c52",
    pass: "3d04dd5de72ee1"
  }
});



export class NodemailerMailService implements MailService{
  async sendMail({subject, body}: SendMailData) {
  //email send for new feedbacks

  await transport.sendMail({
    from: 'Equipe Fernandez <Fernandez@noreply.com>',
    to: 'Fernandez <jose.fernandes@feac.ufal.br>',
    subject,
    html: body,
  });

  } 

}