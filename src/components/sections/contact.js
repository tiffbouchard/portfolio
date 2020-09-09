import React, { Component } from "react"
import AOS from "aos"
import "aos/dist/aos.css"
import emailjs from "emailjs-com"
import styled from "styled-components"

const SERVICE_ID = process.env.REACT_APP_SERVICE_ID
const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID
const USER_ID = process.env.REACT_APP_USER_ID

const FormContainer = styled.form`
  h1 {
    text-align: center;
    font-family: "NMBold";
    font-size: 47px;
  }
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    input {
      height: 10px;
    }
    input,
    textarea {
      width: 50vw;
      max-width: 500px;
      font-size: 16px;
      font-family: "NeueMontreal";
      margin: 5px;
      padding: 15px;
      border: 1px solid black;
      border-radius: 2px;
      &:focus {
      }
    }
    button {
      margin: 5px;
      padding: 15px;
      width: 150px;
      border: 1px solid black;
      border-radius: 2px;
      transition: 0.5s ease-in-out;
      &:hover {
        cursor: pointer;
        box-shadow: 2px 2px;
      }
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

  componentDidMount() {
    AOS.init()
  }

  render() {
    return (
      <section className="sub-section" id="contact">
        <FormContainer
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="100"
        >
          <h1>CONTACT</h1>
          <form onSubmit={this.handleSubmit}>
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
          </form>
        </FormContainer>
      </section>
    )
  }
}

export default Form
