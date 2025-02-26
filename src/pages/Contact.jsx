// File: Contact.js

import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [validated, setValidated] = useState(false);

  // Update form data on input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;

    // Bootstrap form validation check
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      // Form is valid; you can now send formData to an email service or API
      console.log('Form submitted:', formData);
      alert('Your message has been sent successfully!');
      // Reset form or keep data as needed
      setFormData({ name: '', email: '', subject: '', message: '' });
    }

    setValidated(true);
  };

  return (
    <div className="contact-page py-5">
      <div className="container">
        {/* =========================
            CONTACT HEADER
        ========================== */}
        <div className="text-center mb-5">
          <h2 className="fw-bold">Contact Me</h2>
          <p className="text-muted">Got a question or proposal? Feel free to reach out!</p>
        </div>

        <Row>
          {/* =========================
              CONTACT FORM
          ========================== */}
          <Col md={6}>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Form.Group controlId="contactFormName" className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Enter your name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
                <Form.Control.Feedback type="invalid">
                  Please provide your name.
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId="contactFormEmail" className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  required
                  type="email"
                  placeholder="Enter your email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid email address.
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId="contactFormSubject" className="mb-3">
                <Form.Label>Subject</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Enter the subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a subject.
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId="contactFormMessage" className="mb-3">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  required
                  as="textarea"
                  rows={4}
                  placeholder="Enter your message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a message.
                </Form.Control.Feedback>
              </Form.Group>

              <Button variant="primary" type="submit">
                Send Message
              </Button>
            </Form>
          </Col>

          {/* =========================
              GOOGLE MAP + SOCIAL LINKS
          ========================== */}
          <Col md={6} className="mt-5 mt-md-0">
            {/* Optional Google Maps Embed */}
            <div className="mb-4">
              <h5>Location</h5>
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.094009240943!2d-122.41941518468148!3d37.774929779759585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c7ece3707%3A0xd6bf3d3ccc52bd11!2sSan%20Francisco%20City%20Hall!5e0!3m2!1sen!2sus!4v1631715147661!5m2!1sen!2sus"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>

            {/* Social Media Links */}
            <div>
              <h5>Connect with me</h5>
              <div className="d-flex align-items-center gap-3 mt-2">
                {/* LinkedIn */}
                <a
                  href="https://linkedin.com/in/yourprofile"
                  target="_blank"
                  rel="noreferrer"
                  className="text-decoration-none"
                >
                  <i className="bi bi-linkedin fs-3"></i>
                </a>
                {/* GitHub */}
                <a
                  href="https://github.com/yourprofile"
                  target="_blank"
                  rel="noreferrer"
                  className="text-decoration-none"
                >
                  <i className="bi bi-github fs-3"></i>
                </a>
                {/* Twitter */}
                <a
                  href="https://twitter.com/yourprofile"
                  target="_blank"
                  rel="noreferrer"
                  className="text-decoration-none"
                >
                  <i className="bi bi-twitter fs-3"></i>
                </a>
                {/* Add more as needed */}
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Contact;
 
