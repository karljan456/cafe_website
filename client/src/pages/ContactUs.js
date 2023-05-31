import ContactForm from "../components/ContactForm";


export default function ContactUs() {

    return (<div className="container mt-5 col col-md-8">
        <div className="contact_details">
            <h1>Contact Us</h1>
            <h2>Contact information:</h2>
            <p>Address: Pohjolankatu 12, Tampere</p>
            <p>Phone: +358 555555555</p>
            <p>Email: info@caffeexclusivo.com</p>
        </div>
        <div className="contact_form d-flex align-items-center justify-content-center">
            <ContactForm />
        </div>
    </div>)

}