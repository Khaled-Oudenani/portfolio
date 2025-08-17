import { useState, useEffect } from "react";
// Mui
import AddCallIcon from "@mui/icons-material/AddCall";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
const Contact = () => {
  const [result, setResult] = useState("");
  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "cc082ddc-d2ab-4fd7-9dc5-95f68c9aa30d");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  useEffect(() => {
    {
      setTimeout(() => {
        setResult("");
      }, 4000);
    }
  }, [result]);
  return (
    <div id="contact" className="contact">
      <h1 className="contact-title">Contact</h1>
      <div className="contact-form">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onSubmit(e);
            setForm({
              name: "",
              email: "",
              message: "",
            });
          }}
        >
          <div className="input-field">
            <label>Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              name="name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
          </div>
          <div className="input-field">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              name="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
          </div>
          <div className="input-field">
            <label>Message</label>
            <textarea
              placeholder="Enter your message"
              name="message"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
            />
          </div>
          <button type="submit">Send</button>
        </form>
        <p style={{ color: "white", textAlign: "center", margin: "0px" }}>
          {result}
        </p>
      </div>
      <div className="footer">
        <div className="social-icons">
          <div className="social-icon">
            <AddCallIcon />
            <p>+213541929912</p>
          </div>
          <div className="social-icon">
            <EmailIcon />
            <p>khaoud1234@gmail.com</p>
          </div>
          <div>or</div>
          <div className="social-icon">
            <a href="https://github.com/Khaled-Oudenani">
              <GitHubIcon />
            </a>
          </div>
          <div className="social-icon">
            <a href="https://www.facebook.com/kha.led.342487/">
              <FacebookIcon />
            </a>
          </div>
          <div className="social-icon">
            <a href="https://www.linkedin.com/in/khaled-oudenani/">
              <LinkedInIcon />
            </a>
          </div>
        </div>
        <p>
          © 2025 <i>KHALED</i>. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Contact;
