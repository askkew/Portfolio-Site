import { ContactCard, ContactCardMessageTitle, CustomTextField, CustomTextFieldMessage, StyledForm, SendStyledButton, SendStyledButtonIcon, IconWrapper } from "./ContactStyles";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { RiSendPlaneFill } from "react-icons/ri";
import './contactindex.css';

const Contact = () => {
  const service = process.env.REACT_APP_SERVICE_ID;
  const template = process.env.REACT_APP_TEMPLATE_ID;
  const user = process.env.REACT_APP_USER_ID;
  const form = useRef();

  const sendEmail = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    console.log('test')
    console.log({service, template, user})
    if (form.current) {
      emailjs
        .sendForm(
          service || "",
          template || "",
          form.current,
          user
        )
        .then(
          (result) => {
            console.log(result.text);
            console.log("message sent");
          },
          (error) => {
            console.log(error.text);
          }
        );
    } else {
      console.log("Form is not defined");
    }
  };

  return (
    <section id="contact">
      <ContactCard>
        <ContactCardMessageTitle>Contact Me</ContactCardMessageTitle>
        {/* @ts-ignore */}
        <StyledForm ref={form}>
          <CustomTextField placeholder="Name" name="name"/>
          <CustomTextField placeholder="Email" name="email"/>
          <CustomTextFieldMessage
            placeholder="Write your message"
            name="message"
            rows={10}
          />
          <SendStyledButton type="submit" onClick={sendEmail}>Send</SendStyledButton>
          <SendStyledButtonIcon type="button" onClick={sendEmail}><RiSendPlaneFill /></SendStyledButtonIcon>
        </StyledForm>
        <ContactCardMessageTitle>Connect with me</ContactCardMessageTitle>
        <div className="iconwrapper">
          <IconWrapper className="icons">
            <a href="https://github.com/askkew" className="icon icon--github">
              <i className="ri-github-line"></i>
            </a>
            <a href="https://www.linkedin.com/in/luke-overbey-37b342235/" className="icon icon--linkedin">
              <i className="ri-linkedin-box-line"></i>
            </a>
            <a onClick={() => window.open('mailto:lucasaoverbey@gmail.com')} className="icon icon--email">
              <i className="ri-mail-line"></i>
            </a>
          </IconWrapper>
        </div>
      </ContactCard>
    </section> 
  );
};

export default Contact
