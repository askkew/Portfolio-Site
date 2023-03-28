import { ContactCard, SocialButtons, ContactDiv, ContactCardMessageTitle, CustomTextField, CustomTextFieldMessage, ContactContainer, StyledForm } from "./ContactStyles";
import { StyledButton } from "../../utils/Button";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
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
              <StyledButton style={{width: '50%', paddingLeft: '25px', marginLeft: '10px', marginTop: '10px'}}>Send</StyledButton>
              {/* {loading ? "Sending..." : "Send"} */}
            </StyledForm>
            <ContactCardMessageTitle>Connect with me</ContactCardMessageTitle>
            {/* <SocialButtons>
              {
                ToolIcons.map((icon, index) => {
                  return (
                    <StyledSocialButton disableRipple key={index}>
                      {icon}
                    </StyledSocialButton>
                  )
                })
              }
            </SocialButtons> */}
            <div className="iconwrapper">
              <div className="icons">
                <a href="https://github.com/askkew" className="icon icon--github">
                  <i className="ri-github-line"></i>
                </a>
                <a href="https://www.linkedin.com/in/luke-overbey-37b342235/" className="icon icon--linkedin">
                  <i className="ri-linkedin-box-line"></i>
                </a>
                <a onClick={() => window.open('mailto:lucasaoverbey@gmail.com')} className="icon icon--email">
                  <i className="ri-mail-line"></i>
                </a>
              </div>
            </div>
            <StyledButton style={{width: '50%', paddingLeft: '25px', marginTop: '10px', marginBottom: '10px'}}>Resume</StyledButton>
          </ContactCard>
        </ContactContainer>
      </ContactDiv>
    </section> 
  );
};

export default Contact
