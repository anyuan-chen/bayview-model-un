import React, { useState } from "react";
import Navbar from "../components/navbar";
export default function Contact() {
  const sendToEmail = async (event) => {
    // TODO need to fix
    event.preventDefault();
    const data = fetcher("/api/email");
    console.log(data);
  };
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const fetcher = (url) =>
    fetch(url, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        subject: subject,
        name: name,
        message: message,
      }),
    }).then((res) => res.json());

  return (
    <div className="flex flex-col ">
      <Navbar></Navbar>
      <div className="flex flex-col items-center">
        <div className="w-screen/2">
          <form onSubmit={sendToEmail}>
            <div className="grid grid-rows-3 grid-cols-2 gap-16">
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
              <div className="flex flex-col col-span-2">
                <label for="subject">subject</label>
                <input
                  type="text"
                  name="subject"
                  className=""
                  value={subject}
                  onChange={(event) => setSubject(event.target.value)}
                ></input>
              </div>
              <div className="flex flex-col col-span-2">
                <label for="subject">message</label>
                <input
                  type="text"
                  name="message"
                  className=""
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                ></input>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
