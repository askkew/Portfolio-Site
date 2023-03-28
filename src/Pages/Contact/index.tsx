import { ContactCard, SocialButtons, ContactDiv, ContactCardMessageTitle, CustomTextField, CustomTextFieldMessage, ContactContainer, StyledForm, SendStyledButton, SendStyledButtonIcon, IconWrapper } from "./ContactStyles";
import { StyledButton } from "../../utils/Button";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { RiSendPlaneFill } from "react-icons/ri";
import { IoDocumentTextOutline } from "react-icons/io5";
import './contactindex.css';

const Contact = () => {

  const service = "service_u7benu6"
  const second = "template_2qgjlda"
  const third = "CdGTRBxS7QeIBfyP4"

  const [loading, setLoading] = useState(false);
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: { target: any; }) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        service,
        second,
        {
          from_name: form.name,
          to_name: "JavaScript Mastery",
          from_email: form.email,
          to_email: "sujata@jsmastery.pro",
          message: form.message,
        },
        third
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };
  return (
    <section id="contact">
      <ContactDiv>
        <ContactContainer>
          <ContactCard>
            <ContactCardMessageTitle>Contact Me</ContactCardMessageTitle>
            {/* @ts-ignore */}
            <StyledForm ref={formRef} onSubmit={handleSubmit}>
              <CustomTextField placeholder="Name" name="name" onChange={handleChange}/>
              <CustomTextField placeholder="Email" name="email" onChange={handleChange}/>
              <CustomTextFieldMessage
                placeholder="Write your message"
                name="message"
                rows={10}
                onChange={handleChange}
              />
              <SendStyledButton>Send</SendStyledButton>
              <SendStyledButtonIcon><RiSendPlaneFill /></SendStyledButtonIcon>
              {/* {loading ? "Sending..." : "Send"} */}
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
            <SendStyledButton>Resume</SendStyledButton>
            <SendStyledButtonIcon><IoDocumentTextOutline /></SendStyledButtonIcon>
          </ContactCard>
        </ContactContainer>
      </ContactDiv>
    </section> 
  );
};

export default Contact
