import contact from "./Contacts.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import formValidation from "../../validation/formValidation";

function Contacts() {
  const [nameInput, setNameInput] = useState("");
  const [fromInput, setFromInput] = useState("");
  const [subjectInput, setSubjectInput] = useState("");
  const [msgInput, setMsgInput] = useState("");
  const [sent, setSent] = useState("");
  const [errors, setErrors] = useState({
    from: undefined,
    name: undefined,
    subject: undefined,
    message: undefined,
  });

  async function handleContact() {
    const emailObj = {
      sender: fromInput,
      subject: subjectInput,
      name: nameInput,
      message: msgInput,
    };

    if (formValidation(setErrors, emailObj)) {
      const sendEmail = await fetch(
        "https://busy-red-elephant-hem.cyclic.app/api/contact",
        {
          headers: { "Content-Type": "application/json" },
          method: "POST",
          body: JSON.stringify(emailObj),
        }
      );
      const sendEmailJson = await sendEmail.json();

      if (sendEmail.status === 200) {
        setFromInput("");
        setNameInput("");
        setSubjectInput("");
        setMsgInput("");
        setSent(sendEmailJson.msg);
      } else setSent("Not Sent Successfully");
    } else setSent("Not Sent Successfully");
  }

  return (
    <footer id="contact" className={contact.contact}>
      <h2 className={contact.title}>Contact Me</h2>
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
        {errors.from && <p className={contact.error}>{errors.from}</p>}
        <label>
          Name
          <input
            type="text"
            value={nameInput}
            onChange={(e) => setNameInput(e.target.value)}
            placeholder="Enter Your Full Name"
          />
        </label>
        {errors.name && <p className={contact.error}>{errors.name}</p>}
        <label>
          Subject
          <input
            type="text"
            value={subjectInput}
            onChange={(e) => setSubjectInput(e.target.value)}
            placeholder="Enter Email Subject"
          />
        </label>
        {errors.subject && <p className={contact.error}>{errors.subject}</p>}
        <textarea
          value={msgInput}
          onChange={(e) => setMsgInput(e.target.value)}
          placeholder="Enter Message"
        />
        {errors.message && <p className={contact.error}>{errors.message}</p>}
        <button
          className={contact.contactFormBtn}
          type="button"
          onClick={handleContact}
        >
          Send <FontAwesomeIcon icon={faEnvelope} />
        </button>
        {sent && <p className={contact.error}>{sent}</p>}
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
