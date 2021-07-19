import emailjs from "emailjs-com";
import React from "react";
import Particles from "react-particles-js";
import styled from "styled-components";
import Input from "./Input";
import TextBoxInput from "./TextBoxInput";

const Contact = () => {
  const [emailValue, setEmailValue] = React.useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "rshiner_website",
        "template_rshiner_website",
        e.target,
        "user_kgnL7hoNrgbuMFaJ614M0"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    alert(
      "'Success - Thank you for contacting me! I'll get back to you shortly."
    );

    setEmailValue("");
    e.target.reset();
  };

  return (
    <ContactWrapper>
      <StyledParticles />
      <Form onSubmit={sendEmail}>
        <Title>Contact Me</Title>
        <Input label="Name" name="name" />
        <Input
          value={emailValue}
          label="Email address"
          type="email"
          name="email"
          onChange={(e) => setEmailValue(e.target.value)}
        />
        <Input label="Subject" name="subject" />
        <TextBoxInput label="Your message" name="message" />
        <SubmitButton />
      </Form>
    </ContactWrapper>
  );
};

export default Contact;

const ContactWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  color: ${(props) => props.theme.primary};
  font-size: 40px;
  white-space: nowrap;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Form = styled.form`
  background: black;
  margin: 50px;
  padding: 40px;
  width: 90%;
  max-width: 500px;
  border-radius: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1;
`;

const SubmitButton = styled.input.attrs({
  type: "submit",
  value: "submit",
})`
  width: 100px;
  height: 40px;
  border-radius: 20px;
  border: none;
  letter-spacing: 1px;
  font-size: 15px;
  text-transform: uppercase;
  transition: all ease 0.5s;
  color: black;
  background-color: ${(props) => props.theme.primary};
  cursor: pointer;

  :hover {
    transform: translateY(-3px);
  }

  :active {
    transform: translateY(1px);
    transition: none;
  }

  :disabled {
    background-color: ${(props) => props.theme.backgroundHighlight};
    cursor: unset;
    :hover {
      transform: translateY(0px);
    }
  }
`;

const StyledParticles = styled(Particles)`
  position: absolute;
  top: 0;
  left: 0;
  padding: 15px;
  height: 100%;
  width: 100%;
  transition: all 0.5s ease;
`;
