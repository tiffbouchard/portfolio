import React, { Component } from "react"
import emailjs from "emailjs-com"

const SERVICE_ID = process.env.REACT_APP_SERVICE_ID
const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID
const USER_ID = process.env.REACT_APP_USER_ID

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
      <section className="sub-section">
        <form onSubmit={this.handleSubmit}>
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
        </form>
      </section>
    )
  }
}

export default Form
