import { useState } from 'react';
import axios from 'axios'

export default function ContactForm() {

  const [message, setMessage] = useState({
    firstname: "",
    lastname: "",
    email: "",
    inquirytype: "",
    inquiry: ""
  })


  const { firstname, lastname, email, inquirytype, inquiry } = message;


  const onInputChange = (e) => {

    setMessage({ ...message, [e.target.name]: e.target.value });

  }

  const onSubmit = async (e) => {

    e.preventDefault();

    await axios.post("http://localhost:8080/message", message);

    setMessage({
      firstname: "",
      lastname: "",
      email: "",
      inquirytype: "",
      inquiry: ""
    });

  }

  return (<div className="col col-md-6 mt-4">
    <h3>You can send us a message directly through the contact form below.</h3>
    <form onSubmit={(e) => onSubmit(e)}>
      <label for="firstname">Your First Name: <input id="first-name" name="firstname" type="text" value={firstname}
        onChange={(e) => onInputChange(e)} placeholder="First Name" required />
      </label>
      <label for="lastname">Enter Last Name: <input id="last-name" name="lastname" type="text" value={lastname}
        onChange={(e) => onInputChange(e)} placeholder="Last Name" required /></label>
      <label for="email">Enter Your Email: <input id="email" name="email" type="email" value={email}
        onChange={(e) => onInputChange(e)} placeholder="Email" required /></label>
      <label for="inquiry">What is the type of your inquiry?
        <select id="inquiry" name="inquirytype" value={inquirytype} onChange={(e) => onInputChange(e)}>
          <option value="">What is your inquiry?</option>
          <option value="press">Press Inquiry</option>
          <option value="personal">Personal Inquiry</option>
        </select>
      </label>
      <label for="inquiry">Your message:
        <textarea id="inquiry" name="inquiry" rows="3" cols="30" value={inquiry} onChange={(e) => onInputChange(e)} placeholder="Your message"></textarea>
      </label>
      <input type="submit" value="Submit" />
    </form>
  </div>);

}