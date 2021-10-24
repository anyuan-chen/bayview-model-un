let nodemailer = require("nodemailer");

export default async function (req, res) {
  if (req.method === "POST") {
    const transporter = nodemailer.createTransport({
      port: 465,
      host: "smtp.gmail.com",
      auth: {
        user: "modelunbayview@gmail.com",
        pass: process.env.GMAIL_PASSWORD,
      },
      secure: true,
    });
    await new Promise((resolve, reject) => {
      // verify connection configuration
      transporter.verify(function (error, success) {
        if (error) {
          console.log(error);
          reject(error);
        } else {
          console.log("Server is ready to take our messages");
          resolve(success);
        }
      });
    });

    const mailData = {
      from: "modelunbayview@gmail.com",
      to: "modelunbayview@gmail.com",
      subject: `Message From ${req.body.name} : ${req.body.subject}`,
      text: req.body.message + " | Sent from: " + req.body.email,
      html: `<div>${req.body.message}</div><p>Sent from:
        ${req.body.email}</p>`,
    };
    await new Promise((resolve, reject) => {
      transporter.sendMail(mailData, function (err, info) {
        // if (err) console.log(err);
        // else console.log(info);
      });
    });
    res.status(200);
  }
}
