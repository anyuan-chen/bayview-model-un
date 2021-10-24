import React, { useState } from "react";
import Navbar from "../components/navbar";
import Modal from "../components/modal";
export default function Contact() {
  const sendToEmail = async (event) => {
    // TODO need to fix
    event.preventDefault();
    const data = fetcher("/api/sendGrid");
    console.log(data);
    setEmail("");
    setName("");
    setSubject("");
    setMessage("");
    setShowModal(true);
  };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [showModal, setShowModal]= useState(false);

  const fetcher = (url) =>
    fetch(url, {
      method: "POST",
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

  const getClassName = () => {
    return showModal? "visible" : "hidden";
  }  

  return (
    <div className="flex flex-col" onClick={() => setShowModal(false)}>
      <Navbar></Navbar>
      <div className={getClassName()}>
        <Modal 
          caption="Message sent!"
          message="Your message has been delivered and we will get back to you as soon as possible."
        >
        </Modal>
      </div>
      <div className="text-white bg-main flex justify-start pl-10 py-10 sm:justify-center sm:pl-0">
        <h1 className="bold text-4xl pb-6">Contact</h1>
      </div>
      <div className="flex flex-col items-center">
        <div className="px-8 py-12 w-screen md:w-7/12">
          <form onSubmit={sendToEmail}>
            <div className="grid grid-rows-3 grid-cols-2 gap-x-16 gap-y-8">
              <div className="flex flex-col col-span-2 md:col-span-1">
                <label for="name">name</label>
                <input
                  type="text"
                  name="name"
                  className=""
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                ></input>
              </div>
              <div className="flex flex-col col-span-2 md:col-span-1">
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
                <textarea
                  type="text"
                  name="message"
                  className=""
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                ></textarea>
              </div>
              <div className="flex flex-col col-span-2">
                <button
                  type="submit"
                  className="border bg-main text-white py-2"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <footer></footer>
    </div>
  );
}
