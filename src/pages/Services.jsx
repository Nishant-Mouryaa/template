// File: Services.js

import React from 'react';
import { Accordion, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';

// Example Services Data (replace with an import from a JSON file or an API fetch)
const servicesData = [
  {
    id: 1,
    icon: 'bi bi-laptop', // Using Bootstrap Icons
    title: 'Web Development',
    description:
      'High-quality web development services using modern technologies like React, Node.js, and more.',
    ctaLink: '#contact',
  },
  {
    id: 2,
    icon: 'bi bi-brush',
    title: 'UI/UX Design',
    description:
      'Crafting visually appealing and user-centric interfaces for websites and mobile applications.',
    ctaLink: '#contact',
  },
  {
    id: 3,
    icon: 'bi bi-bar-chart-line',
    title: 'SEO & Marketing',
    description:
      'Optimizing sites for search engines, running marketing campaigns, and driving more traffic.',
    ctaLink: '#contact',
  },
];

// Example FAQ Data (optional)
const faqData = [
  {
    id: 1,
    question: 'What technologies do you use?',
    answer:
      'I specialize in React, Node.js, Express, MongoDB, and various front-end libraries like Bootstrap and Tailwind CSS.'
  },
  {
    id: 2,
    question: 'How long does a typical project take?',
    answer:
      'Project timelines vary depending on complexity. Most websites range between 2-6 weeks from inception to launch.'
  },
  {
    id: 3,
    question: 'Do you offer ongoing support?',
    answer:
      'Yes! I provide maintenance plans, updates, and support to ensure your site continues to run smoothly.'
  }
];

// Framer Motion variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      // Stagger child animations
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const Services = () => {
  return (
    <div className="services-page py-5">
      <div className="container">
        {/* =========================
            SERVICES HEADER
        ========================== */}
        <motion.section
          className="text-center mb-5"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="fw-bold">Services</h2>
          <p className="text-muted">
            I offer a variety of services to help your business or personal
            brand stand out online.
          </p>
        </motion.section>

        {/* =========================
            SERVICES CARD GRID
        ========================== */}
        <motion.section
          className="mb-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="row">
            {servicesData.map((service) => (
              <motion.div
                key={service.id}
                className="col-md-4 mb-4"
                variants={itemVariants}
              >
                <div className="card h-100 text-center">
                  <div className="card-body">
                    <i className={`${service.icon} display-4 mb-3`} />
                    <h5 className="card-title">{service.title}</h5>
                    <p className="card-text text-muted">{service.description}</p>
                    <Button
                      variant="primary"
                      href={service.ctaLink}
                      className="mt-2"
                    >
                      Get Started
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* =========================
            WHY CHOOSE ME
        ========================== */}
        <motion.section
          className="why-choose-me-section mb-5 p-4 bg-light"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-4">
            <h3 className="fw-bold">Why Choose Me?</h3>
          </div>
          <div className="row">
            <div className="col-md-3 text-center mb-3">
              <i className="bi bi-check-circle-fill display-5 text-primary" />
              <h5 className="mt-2">10+ Years of Experience</h5>
              <p className="text-muted">
                Proven track record in delivering modern, scalable solutions.
              </p>
            </div>
            <div className="col-md-3 text-center mb-3">
              <i className="bi bi-star-fill display-5 text-primary" />
              <h5 className="mt-2">100+ Completed Projects</h5>
              <p className="text-muted">
                From startups to established brands, I’ve worked with a diverse
                clientele.
              </p>
            </div>
            <div className="col-md-3 text-center mb-3">
              <i className="bi bi-people-fill display-5 text-primary" />
              <h5 className="mt-2">Client-Centric Approach</h5>
              <p className="text-muted">
                I focus on understanding your goals to deliver the best results
                for your business.
              </p>
            </div>
            <div className="col-md-3 text-center mb-3">
              <i className="bi bi-award-fill display-5 text-primary" />
              <h5 className="mt-2">Quality & Reliability</h5>
              <p className="text-muted">
                Committed to high standards, timely delivery, and ongoing
                support.
              </p>
            </div>
          </div>
        </motion.section>

        {/* =========================
            FAQ SECTION (OPTIONAL)
        ========================== */}
        <motion.section
          className="faq-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-4">
            <h3 className="fw-bold">Frequently Asked Questions</h3>
          </div>
          <Accordion defaultActiveKey={null}>
            {faqData.map((faq) => (
              <Accordion.Item eventKey={faq.id.toString()} key={faq.id}>
                <Accordion.Header>{faq.question}</Accordion.Header>
                <Accordion.Body>{faq.answer}</Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </motion.section>
      </div>
    </div>
  );
};

export default Services;
 
