import React, { Component } from "react"
import emailjs from "emailjs-com"
import styled from "styled-components"

const SERVICE_ID = process.env.REACT_APP_SERVICE_ID
const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID
const USER_ID = process.env.REACT_APP_USER_ID

const FormContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    font-size: 40px;
    margin: 10px;
  }
  input {
    width: 50%;
    background: transparent;
    font-family: NeueMontreal;
    font-size: 15px;
    border: 1px solid black;
    border-bottom-style: none;
    padding: 15px;
    &::placeholder {
      font-family: NeueMontreal;
      font-size: 15px;
    }
  }
  textarea {
    width: 50%;
    font-family: NeueMontreal;
    font-size: 15px;
    border: 1px solid black;
    padding: 15px;
    &::placeholder {
      font-family: NeueMontreal;
      font-size: 15px;
    }
  }
`

class Form extends Component {
  state = {
    name: "",
    email: "",
    message: "",
    isLoading: false,
  }

  handleSubmit = e => {
    e.preventDefault()

    this.setState({ isLoading: true })

    let templateParams = {
      from_name: this.state.email,
      to_name: "Tiffany",
      message_html: this.state.message,
      reply_to: this.state.email,
    }

    emailjs
      .send("gmail", { TEMPLATE_ID }, templateParams, { SERVICE_ID })
      .then(
        function () {
          alert("Email sent successfully!")
        },
        function (error) {
          alert("FAILED!" + error)
        }
      )
      .then(this.resetForm())
  }

  resetForm() {
    this.setState({
      name: "",
      email: "",
      message: "",
      isLoading: false,
    })
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    return (
      <FormContainer onSubmit={this.handleSubmit}>
        <h1>Contact</h1>
        <input
          type="text"
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
          placeholder="Name"
        />
        <input
          required
          type="email"
          name="email"
          value={this.state.email}
          onChange={this.handleChange}
          placeholder="Email"
        />
        <textarea
          required
          rows="10"
          name="message"
          value={this.state.message}
          onChange={this.handleChange}
          placeholder="Message"
        />
        <button type="submit">Send</button>
        {this.state.isLoading ? "Loading..." : null}
      </FormContainer>
    )
  }
}

export default Form
