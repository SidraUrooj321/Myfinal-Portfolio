import React, { useState } from "react";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");

    const formData = new FormData(event.target);
    formData.append("access_key", "283696dc-f89d-4b84-9835-2d15b417eb12");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Message Sent Successfully ✔");
      event.target.reset();
    } else {
      setResult("Something went wrong. Please try again.");
    }
  };

  return (
    <section className="contact-form" id="contact">
      <h2>Contact <span>Me</span></h2>
      <form onSubmit={onSubmit}>
        <div className="input-bo">
          <input type="text" name="name" placeholder="Full Name" required />
          <input type="email" name="email" placeholder="Email" required />
        </div>
        <div className="input-bo">
          <input type="number" name="phone" placeholder="Phone Number" required />
          <input type="text" name="subject" placeholder="Subject" required />
        </div>
        <textarea name="message" placeholder="Your Message" required></textarea>
        <button type="submit" className="btn-2">Send Message</button>
        <p style={{ marginTop: "10px", color: "black" }}>{result}</p>
      </form>
    </section>
  );
};

export default Contact;
