export default async function (req, res) {
  if (req.method === "POST") {
    let nodemailer = require("nodemailer");
    const transporter = nodemailer.createTransport({
      port: 465,
      host: "smtp.gmail.com",
      auth: {
        user: "modelunbayview@gmail.com",
        pass: process.env.GMAIL_PASSWORD,
      },
      secure: true,
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
        if (err) console.log(err);
        else console.log(info);
      });
    });
    res.status(200);
  }
}
