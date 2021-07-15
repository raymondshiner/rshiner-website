import React, { useState } from "react";
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
  );
};

export default Contact;

const Title = styled.h1`
  color: ${(props) => props.theme.primary};
  font-size: 40px;
  white-space: nowrap;
  margin-bottom: 10px;
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
