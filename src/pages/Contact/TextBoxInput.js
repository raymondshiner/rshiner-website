import React from "react";
import styled from "styled-components";

const TextBoxInput = ({ label, ...props }) => {
  return (
    <InputContainer>
      <TextBox {...props} />
      <Label>{label}</Label>
    </InputContainer>
  );
};

export default TextBoxInput;

const InputContainer = styled.div`
  display: flex;
  position: relative;
  height: 235px;
  width: inherit;
  padding: 0px 5px;
  align-items: center;
  font-size: 14px;
`;

const TextBox = styled.textarea.attrs({
  type: "text",
  required: true,
})`
  height: 200px;
  width: inherit;
  caret-color: ${(props) => props.theme.secondaryText};
  padding-left: 10px;
  padding-top: 15px;
  border-radius: 4px;
  border-style: solid;
  color: white;
  border-width: 0.5px;
  border-color: black;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
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

const Label = styled.label.attrs({
  className: "label",
})`
  position: absolute;
  pointer-events: none;
  left: 20px;
  top: 37px;
  color: #808080;
  transition: all ease 0.5s;
`;
