import React, { useState } from "react";
import Navbar from "../components/navbar";
import { GoogleSpreadsheet } from "google-spreadsheet";

export default function Mailing() {
  const addToMailingList = async (event) => {
    event.preventDefault();

    const client_email =
      process.env.GOOGLE_APPLICATION_CREDENTIALS.client_email;
    const private_key = process.env.GOOGLE_APPLICATION_CREDENTIALS.private_key;
    const doc = new GoogleSpreadsheet(process.env.SPEADSHEET_ID);

    await doc.useServiceAccountAuth({
      client_email: client_email,
      private_key: private_key,
    });
    await doc.loadInfo();

    const sheet = doc.sheetsByID[process.env.SHEET_ID];
    await sheet.addRow({
      Timestamp: new Date().getTime(),
      "Email Address (Personal)": email,
      "Name (First and Last)": name,
      "Student Number": stuNum,
      Grade: grade,
    });
  };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [stuNum, setstuNum] = useState("");
  const [grade, setGrade] = useState("");

  return (
    <div className="h-screen">
      <Navbar></Navbar>
      <div className="grid grid-cols-2">
        <div className="bg-main h-screen text-white font-body px-36 flex flex-col pt-32">
          <h1 className="text-3xl font-bold">Join Our Mailing List</h1>
          <h2 className="pt-20 text-xl">
            By joining our mailing list, you gain access to many benefits.
          </h2>
          <ul className="pt-5 text-lg">
            <li className="list-inside list-disc">a</li>
            <li className="list-inside list-disc">b</li>
            <li className="list-inside list-disc">c</li>
          </ul>
        </div>
        <div className="">
          <form onSubmit={addToMailingList} className=" flex justify-center">
            <div className="w-8/12 flex flex-col space-y-8 pt-64">
              <div className="flex flex-col">
                <label for="name">name</label>
                <input
                  type="text"
                  name="name"
                  className=""
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                ></input>
              </div>
              <div className="flex flex-col">
                <label for="name">email</label>
                <input
                  type="text"
                  name="email"
                  className=""
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                ></input>
              </div>
              <div className="flex flex-col">
                <label for="name">grade</label>
                <input
                  type="text"
                  name="grade"
                  className=""
                  value={grade}
                  onChange={(event) => setGrade(event.target.value)}
                ></input>
              </div>
              <div className="flex flex-col">
                <label for="name">student number</label>
                <input
                  type="text"
                  name="student number"
                  className=""
                  value={stuNum}
                  onChange={(event) => setstuNum(event.target.value)}
                ></input>
              </div>
              <button type="submit" className="border border-black py-2">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
