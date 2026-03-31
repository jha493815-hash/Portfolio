import React, { useState } from "react";
import "./Contact.css";

function Message() {
  const [name, setName] = useState("");
 const [Email, setemail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); 

    
    console.log("Name:", name);
    console.log("email:", Email);
    console.log("Message:", message);

    // Clear fields after submit
    setName("");
    setemail("");
    setMessage("");

    alert("Message Sent Successfully!");

  };

  return (
    <section className="message">
      <h2>Send Message</h2>

      <form onSubmit={handleSubmit}>
        
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
          <input
          type="Email"
          placeholder="Email"
          value={name}
          onChange={(e) => setemail(e.target.value)}
          required
        />


        <textarea
          placeholder="Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>

        <button type="submit">Send</button>
      </form>
    </section>
  );
}

export default Message;
