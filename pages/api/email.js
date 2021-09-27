// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { GoogleSpreadsheet } from "google-spreadsheet";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const client_email = process.env.CLIENT_EMAIL;
      const private_key = process.env.PRIVATE_KEY.replace(/\\n/g, "\n");
      console.log(client_email, private_key);
      const doc = new GoogleSpreadsheet(process.env.SPREADSHEET_ID);
      await doc.useServiceAccountAuth({
        client_email: client_email,
        private_key: private_key,
      });
      await doc.loadInfo();

      const sheet = doc.sheetsByIndex[0];
      await sheet.addRow({
        Timestamp: new Date().getTime(),
        "Email Address (Personal)": req.body.email,
        "Name (First and Last)": req.body.name,
        "Student Number": req.body.stuNum,
        Grade: req.body.grade,
      });
      res.status(200).end();
    } catch (err) {
      res.status(405).end();
    }
  }
}
