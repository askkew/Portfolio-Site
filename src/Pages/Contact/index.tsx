import { ContactCard, ContactCardMessageTitle, CustomTextField, CustomTextFieldMessage, StyledForm, SendStyledButton, IconWrapper } from "./ContactStyles";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import { RiSendPlaneFill } from "react-icons/ri";
import './contactindex.css';

const Contact = () => {
  const service = process.env.REACT_APP_SERVICE_ID;
  const template = process.env.REACT_APP_TEMPLATE_ID;
  const user = process.env.REACT_APP_USER_ID;
  const form = useRef();

  const sendEmail = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
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
            toast.success('Message Sent Successfully!', {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
              });
          },
          (error) => {
            console.log(error.text);
            toast.error('Error!', {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
              });
          }
        );
    } else {
      console.log("Form is not defined");
      toast.error('Error!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
    }
  };

  return (
    <section id="contact">
      <ContactCard>
        <ContactCardMessageTitle>Lets have a chat!</ContactCardMessageTitle>
        {/* @ts-ignore  */}
        <StyledForm ref={form}>
          <CustomTextField placeholder="Name" name="name" id="custominput"/>
          <CustomTextField placeholder="Email" name="email" id="custominput"/>
          <CustomTextFieldMessage
            placeholder="Write your message"
            name="message"
            rows={10}
            id="custominput"
          />
          <SendStyledButton type="submit" onClick={sendEmail}>Send</SendStyledButton>
        </StyledForm>
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

{/* <ContactCard>
  <ContactCardMessageTitle>Contact Me</ContactCardMessageTitle>
  {/* @ts-ignore 
  <StyledForm ref={form}>
    <CustomTextField placeholder="Name" name="name" id="custominput"/>
    <CustomTextField placeholder="Email" name="email" id="custominput"/>
    <CustomTextFieldMessage
      placeholder="Write your message"
      name="message"
      rows={10}
      id="custominput"
    />
    <SendStyledButton type="submit" onClick={sendEmail}>Send</SendStyledButton>
    <SendStyledButtonIcon type="button" onClick={sendEmail}><RiSendPlaneFill /></SendStyledButtonIcon>
  </StyledForm>
  <ContactCardSocialTitle>Connect with me</ContactCardSocialTitle>
</ContactCard> */}

// <div className="iconwrapper">
// <IconWrapper className="icons">
//   <a href="https://github.com/askkew" className="icon icon--github">
//     <i className="ri-github-line"></i>
//   </a>
//   <a href="https://www.linkedin.com/in/luke-overbey-37b342235/" className="icon icon--linkedin">
//     <i className="ri-linkedin-box-line"></i>
//   </a>
//   <a onClick={() => window.open('mailto:lucasaoverbey@gmail.com')} className="icon icon--email">
//     <i className="ri-mail-line"></i>
//   </a>
// </IconWrapper>
// </div>