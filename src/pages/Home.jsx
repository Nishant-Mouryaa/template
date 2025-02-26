// File: Home.js

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { motion } from 'framer-motion';
import { Carousel } from 'react-bootstrap';
import './Home.css';

// Example Data (replace with real JSON imports as needed)
const portfolioData = [
  {
    id: 1,
    title: "Project One",
    image: "https://via.placeholder.com/300x200",
    link: "#"
  },
  {
    id: 2,
    title: "Project Two",
    image: "https://via.placeholder.com/300x200",
    link: "#"
  },
  {
    id: 3,
    title: "Project Three",
    image: "https://via.placeholder.com/300x200",
    link: "#"
  }
];

const servicesData = [
  {
    id: 1,
    title: "Web Development",
    icon: "bi bi-laptop", // Using Bootstrap Icons
    description: "Building responsive and scalable web apps."
  },
  {
    id: 2,
    title: "UI/UX Design",
    icon: "bi bi-brush",
    description: "Crafting user-friendly and modern interfaces."
  },
  {
    id: 3,
    title: "SEO Optimization",
    icon: "bi bi-bar-chart-line",
    description: "Improving search engine ranking and visibility."
  }
];

const testimonialsData = [
  {
    id: 1,
    name: "John Doe",
    review:
      "Amazing experience working with you! Highly professional and delivered on time.",
    rating: 5
  },
  {
    id: 2,
    name: "Jane Smith",
    review: "Fantastic design sense and superb attention to detail!",
    rating: 4
  }
];

// Framer Motion variants for fade-in animations
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
};

const Home = () => {
  return (
    <div className="home-page">

      {/* =========================
          HERO SECTION
      ========================== */}
      <motion.section
        className="hero-section d-flex align-items-center py-5"
        style={{
          backgroundImage: "url('https://i.postimg.cc/3N8RmdhN/harps-joseph-t-Avp-DE7f-Xg-Y-unsplash.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          // Optional: specify a minimum height if you want a tall hero
          minHeight: '80vh'
        }}
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        {/* Optional overlay (uncomment if desired) 
        <div 
          style={{
            position: 'absolute',
            top: 0, left: 0,
            width: '100%', height: '100%',
            backgroundColor: 'rgba(0,0,0,0.3)'
          }}
        /> 
        */}
        <div className="container">
          <div className="row align-items-center">
            {/* Single Column: Hero Text */}
            <div className="col-lg-8 offset-lg-0 text-center text-lg-start">
              <h1 className="display-3 fw-bold text-white">
                Hello, I'm John Portfolio
              </h1>
              <p className="lead text-light mb-4">
                Creative Front-End Developer &amp; Designer
              </p>
              <div>
                <a href="/resume.pdf" className="resume btn btn-outline-light me-2" >
                  Download Resume
                </a>
                <a href="#contact" className="hire btn">
                  Hire Me
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

 {/* =========================
    ABOUT SECTION
========================== */}
<motion.section
  className="about-section py-5 bg-light"
  initial="hidden"
  whileInView="visible"
  variants={fadeInUp}
  transition={{ duration: 0.5 }}
  viewport={{ once: true }}
>
  <div className="container">
    <div className="row">
      <div className="col-12 text-center mb-4">
        <h2>About Me</h2>
        <p className="text-muted">
          I am a passionate front-end developer with expertise in React,
          Bootstrap, and creating responsive, user-friendly UIs. My goal is
          to build high-quality web experiences that are both performant
          and visually appealing.
        </p>
      </div>
    </div>

    {/* Highlight Cards Row */}
    <div className="row g-4">
      <div className="col-md-3">
        <div className="bg-white text-center p-3 shadow-sm rounded">
          <h4>5+ Years</h4>
          <p className="mb-0">Web Dev Experience</p>
        </div>
      </div>
      <div className="col-md-3">
        <div className="bg-white text-center p-3 shadow-sm rounded">
          <h4>Expert</h4>
          <p className="mb-0">React &amp; Bootstrap</p>
        </div>
      </div>
      <div className="col-md-3">
        <div className="bg-white text-center p-3 shadow-sm rounded">
          <h4>UX/UI</h4>
          <p className="mb-0">Design Principles</p>
        </div>
      </div>
      <div className="col-md-3">
        <div className="bg-white text-center p-3 shadow-sm rounded">
          <h4>On-Time</h4>
          <p className="mb-0">Project Delivery</p>
        </div>
      </div>
    </div>

    {/* Additional Details / Bullet Points */}
    <div className="row mt-5">
      <div className="col-12">
        <ul>
          <li>Committed to delivering projects on-time and on-budget</li>
          <li>Strong background in UX/UI design principles</li>
          <li>Proficient in modern JavaScript and performance optimizations</li>
          <li>Enthusiastic about continuous learning and collaboration</li>
        </ul>
      </div>
    </div>
  </div>
</motion.section>


      {/* =========================
          PORTFOLIO SHOWCASE
      ========================== */}
      <motion.section
        className="portfolio-section py-5"
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="container">
          <h2 className="mb-4 text-center">Featured Work</h2>
          <div className="row">
            {portfolioData.map((project) => (
              <div key={project.id} className="col-md-4 mb-4">
                <div className="card h-100">
                  <img
                    src={project.image}
                    className="card-img-top"
                    alt={project.title}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{project.title}</h5>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-primary"
                    >
                      View Project
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* =========================
          SERVICES SECTION
      ========================== */}
      <motion.section
        className="services-section py-5 bg-light"
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="container">
          <h2 className="mb-4 text-center">Services</h2>
          <div className="row">
            {servicesData.map((service) => (
              <div key={service.id} className="col-md-4 mb-4">
                <div className="card h-100 text-center">
                  <div className="card-body">
                    <i
                      className={`${service.icon} display-4 mb-3`}
                      aria-hidden="true"
                    ></i>
                    <h5 className="card-title">{service.title}</h5>
                    <p className="card-text text-muted">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* =========================
          TESTIMONIALS SECTION
      ========================== */}
      <motion.section
        className="testimonials-section py-5"
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="container">
          <h2 className="mb-4 text-center">Testimonials</h2>
          <Carousel>
            {testimonialsData.map((testimonial) => (
              <Carousel.Item key={testimonial.id}>
                <div className="text-center">
                  <p className="mb-2">"{testimonial.review}"</p>
                  <p className="fw-bold">- {testimonial.name}</p>
                  {/* Simple star rating (e.g., 5 = "★★★★★") */}
                  <p className="text-warning">
                    {"★".repeat(testimonial.rating)}
                    {"☆".repeat(5 - testimonial.rating)}
                  </p>
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </motion.section>

      {/* =========================
          CONTACT CTA SECTION
      ========================== */}
      <motion.section
        className="contact-cta-section py-5 bg-dark text-white"
        id="contact"
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="container text-center">
          <h2>Ready to start your project?</h2>
          <p className="lead my-3">
            Get in touch and let's build something amazing together.
          </p>
          <a href="mailto:someone@example.com" className="btn btn-primary btn-lg">
            Contact Me
          </a>
        </div>
      </motion.section>

    </div>
  );
};

export default Home;
