

export default function ContactForm() {

    return (<div className="col col-md-6 mt-4">
        <h3>You can send us a message directly through the contact form below.</h3>
        <form>
            <label for="first-name">Your First Name: <input id="first-name" name="first-name" type="text" placeholder="First Name" required />
            </label>
            <label for="last-name">Enter Last Name: <input id="last-name" name="last-name" type="text" placeholder="Last Name" required /></label>
            <label for="email">Enter Your Email: <input id="email" name="email" type="email" placeholder="Email" required /></label>
            <label for="inquiry">What is the type of your inquiry?
          <select id="inquiry" name="inquiry">
            <option value="">What is your inquiry?</option>
            <option value="press">Press Inquiry</option>
            <option value="personal">Personal Inquiry</option>
          </select>
        </label>
        <label for="message">Your message:
          <textarea id="message" name="message" rows="3" cols="30" placeholder="Your message"></textarea>
        </label>
        <input type="submit" value="Submit" />
        </form>
    </div>);

}