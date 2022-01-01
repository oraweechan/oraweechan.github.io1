import React, { useState } from "react";
import styled from "styled-components";
import SectionTitle from "../components/SectionTitle";

const FormStyle = styled.form`
  padding: 5rem;
  // background-color: red;
  .form-container {
      height: 350px;
      width: 500px
      margin: 0 auto;
      position: absolute
      display: flex;
      justify-content: center;

  }
  .form-group {
    width: 50%;
    margin-bottom: 2rem;
  }
  label {
    font-size: 1.8rem;
  }
  input,
  textarea {
    width: 100%;
    font-size: 2rem;
    padding: 1.2rem;
    color: var(--beige);
    background-color: var(--deep-dark);
    outline: none;
    border: none;
    border-radius: 8px;
    margin-top: 1rem;
  }
  textarea {
    min-height: 250px;
    resize: vertical;
  }
  button[type="submit"] {
    background-color: var(--gray-1);
    color: var(--black);
    font-size: 2rem;
    display: inline-block;
    outline: none;
    border: none;
    padding: 1rem 3rem;
    border-radius: 8px;
    cursor: pointer;
    background-color: red;
    float: right;
  }
`;

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  return (
    <>
      <FormStyle>
        <div className="form-container">
            <div className="form-header">
                <SectionTitle />
            </div>
          <div className="form-group">
            <label htmlFor="name">
              Your Name
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>
          </div>
          <div className="form-group">
            <label htmlFor="email">
              Your Email
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
          </div>
          <div className="form-group">
            <label htmlFor="message">
              Your message
              <textarea
                type="text"
                id="message"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </label>
          </div>
          <button type="submit">Send</button>
        </div>
      </FormStyle>
    </>
  );
}
