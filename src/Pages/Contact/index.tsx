import { ContactCard, SocialButtons, ContactDiv, ContactCardMessageTitle, CustomTextField, CustomTextFieldMessage, ContactContainer } from "./ContactStyles";
import { IconButton, Button, Link, Typography, TextField, FormControlLabel, FormGroup, InputBase, Divider, FormControl } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import { Parallax } from "react-scroll-parallax";
import { StyledSocialButton, ToolIconLabel, ToolIcons } from "./icons";
import Map from "../../components/Map";
import { StyledButton } from "../../utils/Button";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

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
  // const ref = useRef();
  // const [success, setSuccess] = useState(null);

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   emailjs
  //     .sendForm(
  //       "service_u7benu6",
  //       "CdGTRBxS7QeIBfyP4",
  //       ref.current,
  //       "CdGTRBxS7QeIBfyP4"
  //     )
  //     .then(
  //       (result) => {
  //         console.log(result.text);
  //         setSuccess(true);
  //       },
  //       (error) => {
  //         console.log(error.text);
  //         setSuccess(false);
  //       }
  //     );
  // };
  return (
    <section id="contact">
      <ContactDiv>
      {/* <img src="TEXASMAP23.png" alt='tempimage' height='1000px' style={{width: '100%'}}/> */}
        <ContactContainer>
          <ContactCard>
            <ContactCardMessageTitle>Contact Me</ContactCardMessageTitle>
            {/* @ts-ignore */}
            <form ref={formRef} onSubmit={handleSubmit}>
              <CustomTextField placeholder="Name" name="name" onChange={handleChange}/>
              <CustomTextField placeholder="Email" name="email" onChange={handleChange}/>
              <CustomTextFieldMessage
                placeholder="Write your message"
                name="message"
                rows={10}
                onChange={handleChange}
              />
              <StyledButton style={{width: '90%', marginLeft: '10px'}}>Send</StyledButton>
              {loading ? "Sending..." : "Send"}
            </form>
            {/* <Divider style={{color: 'white', height: '10px'}}/> */}
            <ContactCardMessageTitle>Connect with me</ContactCardMessageTitle>
            <SocialButtons>
              {
                ToolIcons.map((icon, index) => {
                  return (
                    <StyledSocialButton disableRipple key={index}>
                      {icon}
                    </StyledSocialButton>
                  )
                })
              }
            </SocialButtons>
            <StyledButton style={{width: '90%', marginLeft: '10px', marginTop: '10px', marginBottom: '10px'}}>Resume</StyledButton>
          </ContactCard>
        </ContactContainer>
      </ContactDiv>
    </section> 
  );
};

export default Contact
