import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setError("");
    setSuccess("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.message.trim()
    ) {
      setError("Please fill in all fields.");
      return;
    }

    if (!formData.email.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }

    setSuccess("Message submitted successfully!");

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="page">
      <h1>Contact Us</h1>

      <form onSubmit={handleSubmit} className="contact-form">
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
        />

        <textarea
          name="message"
          placeholder="Enter your message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
        />

        <button type="submit">
          Send Message
        </button>
      </form>

      {error && (
        <p className="form-error">
          {error}
        </p>
      )}

      {success && (
        <p className="success-message">
          {success}
        </p>
      )}
    </div>
  );
}

export default Contact;