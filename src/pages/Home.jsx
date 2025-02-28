// File: Home.js

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { motion } from 'framer-motion';
import { Carousel } from 'react-bootstrap';
import './Home.css';
import About from '../components/About';
import Hero from '../components/Hero';
import FeaturedProjects from '../components/Featured';
import Services from '../components/Services';

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

<Hero />
<About />
<FeaturedProjects />
<Services />


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
