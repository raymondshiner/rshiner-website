import React, { useState } from "react";
import styled from "styled-components";

const Contact = () => {
  const [name, setName] = useState("");
  const sendEmail = () => {};

  return (
    <ContactWrapper>
      <Title>Contact Me</Title>
      <Form onSubmit={sendEmail}>
        <InputContainer>
          <Input
            placeholder=""
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Label>Name</Label>
        </InputContainer>
      </Form>
    </ContactWrapper>
  );
};

export default Contact;

const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: black;
  margin: 50px;
  padding: 40px;
  width: 100%;
  max-width: 600px;
  border-radius: 50px;
`;

const Title = styled.h1`
  color: ${(props) => props.theme.primary};
  white-space: nowrap;
  margin-bottom: 10px;
`;

const Form = styled.form`
  width: 100%;
`;

const Divider = styled.div`
  height: 5px;
  background-color: ${(props) => props.theme.backgroundHighlight};
  margin: 10px 0px;
  border-radius: 15px;
`;

const Label = styled.label.attrs({
  className: "label",
})`
  position: absolute;
  pointer-events: none;
  left: 20px;
  top: 37px;
  font-size: 14px;
  color: #808080;
  transition: all ease 0.5s;
`;

const InputContainer = styled.div`
  display: flex;
  position: relative;
  height: 90px;
  width: inherit;
  padding-left: 5px;
  align-items: center;
  border: 1px solid red;
`;

const Input = styled.input.attrs({
  type: "text",
  required: true,
})`
  height: 55px;
  width: inherit;
  font-size: 14px;
  caret-color: ${(props) => props.theme.secondaryText};
  padding-left: 10px;
  border-radius: 4px;
  border-style: solid;
  color: white;
  border-width: 0.5px;
  border-color: black;
  background-color: ${(props) => props.theme.backgroundHighlight};
  transition: border-color 0.3s;

  :hover {
    /* border-color: ${(props) => props.theme.secondaryText}; */
    border-color: #808080;
  }

  :focus {
    padding-left: 9px;
    border-width: 2px;
    border-color: ${(props) => props.theme.secondaryText};
    outline: none;
  }

  :focus + .label {
    top: 0px;
    left: 10px;
    font-size: 12px;
    color: ${(props) => props.theme.secondaryText};
    padding: 5px;
    padding-top: 2px;
  }

  :valid {
    top: 2px;
    left: 10px;
    font-size: 12px;
    background-color: ${(props) => props.theme.backgroundHighlight};
    padding-left: 10px;
    padding-right: 5px;
  }

  :valid + .label {
    top: 0px;
    left: 10px;
    font-size: 12px;
    color: ${(props) => props.theme.secondaryText};
    border-radius: 15px;
    padding: 5px;
    padding-top: 2px;
  }
`;
