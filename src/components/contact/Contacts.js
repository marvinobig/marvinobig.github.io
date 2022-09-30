import contact from "./Contacts.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function Contacts() {
  const [nameInput, setNameInput] = useState("");
  const [fromInput, setFromInput] = useState("");
  const [subjectInput, setSubjectInput] = useState("");
  const [msgInput, setMsgInput] = useState("");

  async function handleContact() {
    const emailObj = {
      sender: fromInput,
      subject: subjectInput,
      name: nameInput,
      message: msgInput,
    };

    const sendEmail = await fetch("http://localhost:8080/api/contact", {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify(emailObj),
    });

    const sendEmailJson = await sendEmail.json();

    if (sendEmail.status === 200) {
      console.log(sendEmailJson.msg);
    } else console.log("Not Sent Successfully");
  }

  return (
    <footer id="contact" className={contact.contact}>
      <form className={contact.contactForm}>
        <label>
          From
          <input
            type="email"
            value={fromInput}
            onChange={(e) => setFromInput(e.target.value)}
            placeholder="Enter Your Email"
          />
        </label>
        <label>
          Name
          <input
            type="email"
            value={nameInput}
            onChange={(e) => setNameInput(e.target.value)}
            placeholder="Enter Your Full Name"
          />
        </label>
        <label>
          Subject
          <input
            type="email"
            value={subjectInput}
            onChange={(e) => setSubjectInput(e.target.value)}
            placeholder="Enter Subject of Email"
          />
        </label>
        <textarea
          type="email"
          value={msgInput}
          onChange={(e) => setMsgInput(e.target.value)}
          placeholder="Enter Message"
        />
        <button
          className={contact.contactFormBtn}
          type="button"
          onClick={handleContact}
        >
          Send <FontAwesomeIcon icon={faEnvelope} />
        </button>
      </form>
      <div className={contact.socialLinksContainer}>
        <a
          href="https://github.com/marvinobig"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faGithubSquare} />
        </a>
        <a
          href="https://www.linkedin.com/in/marvin-obigwilo/"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </div>
    </footer>
  );
}

export default Contacts;
