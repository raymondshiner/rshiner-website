import React, { useState } from "react";
import Particles from "react-particles-js";
import styled from "styled-components";
import Input from "./Input";
import TextBoxInput from "./TextBoxInput";

const Contact = () => {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const allFormsFilled = name && email && subject && message;

  const sendEmail = () => {};

  return (
    <ContactWrapper>
      <StyledParticles />
      <Form onSubmit={sendEmail}>
        <Title>Contact Me</Title>
        <Input
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          label="Email address"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          label="Subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
        <TextBoxInput
          label="Your message"
          onChange={(e) => setMessage(e.target.value)}
          disabled={!true}
        />
        <SubmitButton disabled={!allFormsFilled} />
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
  width: 100%;
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
