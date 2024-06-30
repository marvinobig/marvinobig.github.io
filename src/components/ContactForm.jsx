import { useState } from "react";
import formValidation from "../scripts/formValidation";
import FormInput from "./FormInput";
import FormTextareaInput from "./FormTextAreaInput";
import Button from "./Button";

function ContactForm() {
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
        "https://contact-api-33wd.onrender.com/api/contact",
        {
          headers: { "Content-Type": "application/json" },
          method: "POST",
          body: JSON.stringify(emailObj),
        }
      );
      const sendEmailJson = await sendEmail.json();

      setFromInput("");
      setNameInput("");
      setSubjectInput("");
      setMsgInput("");

      if (sendEmail.status === 200) {
        setSent(sendEmailJson.msg);
      } else setSent("email not sent successfully");
    }
  }

  const formStyle = {
    display: 'flex',
    height: "100%",
    width: "100%",
    gap: "20px",
  }

  const formSectionStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    gap: "20px",
    width: "100%",
    maxWidth: "50%"
  }

  return (
    <footer>
      <article>
        <h2>Contact Me</h2>
        <form style={formStyle} id="contact">
          <section style={formSectionStyle}>
            <FormInput labelText="From" inputType="email" inputValue={fromInput} setValue={setFromInput} placeHolder="Enter Your Email" error={errors.from} />
            <FormInput labelText="Name" inputType="text" inputValue={nameInput} setValue={setNameInput} placeHolder="Enter Your Full Name" error={errors.name} />
            <FormInput labelText="Subject" inputType="text" inputValue={subjectInput} setValue={setSubjectInput} placeHolder="Enter Email Subject" error={errors.subject} />
          </section>
          <section style={formSectionStyle}>
            <FormTextareaInput inputValue={msgInput} setValue={setMsgInput} placeHolder="Enter Your Message" error={errors.message} />
            <Button btnType="button" btnText="Send" eventFunction={handleContact} />
            {sent && <p className="success">{sent}</p>}
          </section>
        </form>
      </article>
    </footer>
  );
}

export default ContactForm;
