// File: Services.js

import React from 'react';
import { motion } from 'framer-motion';
import 'bootstrap/dist/css/bootstrap.min.css';

// Default service data (this could be replaced or imported from JSON/API)
const defaultServices = [
  {
    id: 1,
    icon: "fas fa-code",
    name: "Web Development",
    description: "Creating modern and responsive websites.",
    cta: "Learn More",
    link: "#",
  },
  {
    id: 2,
    icon: "fas fa-paint-brush",
    name: "UI/UX Design",
    description: "Designing intuitive and engaging interfaces.",
    cta: "Learn More",
    link: "#",
  },
  {
    id: 3,
    icon: "fas fa-mobile-alt",
    name: "Mobile App Development",
    description: "Building sleek mobile experiences for iOS & Android.",
    cta: "Learn More",
    link: "#",
  },
  {
    id: 4,
    icon: "fas fa-search",
    name: "SEO Optimization",
    description: "Enhancing digital presence and search rankings.",
    cta: "Learn More",
    link: "#",
  },
];

// Default highlights for the optional "Why Choose Me" section
const defaultHighlights = [
  { id: 1, icon: "fas fa-calendar-alt", text: "5+ Years Experience" },
  { id: 2, icon: "fas fa-check-circle", text: "100+ Completed Projects" },
  { id: 3, icon: "fas fa-award", text: "Award-Winning Designs" },
];

const Services = ({ servicesData = defaultServices, highlightsData = defaultHighlights, theme = "light" }) => {
  // Structured data for SEO (schema.org Service)
  const structuredData = servicesData.map(service => ({
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.name,
    "description": service.description,
    "provider": {
      "@type": "Organization",
      "name": "Your Company Name" // Customize as needed
    }
  }));

  // Framer Motion variants for service cards
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    hover: { scale: 1.03 },
  };

  return (
    <section className={`services-section py-5 ${theme === "dark" ? "bg-dark text-light" : "bg-light text-dark"}`}>
      {/* SEO Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
      <div className="container">
        {/* Section Heading */}
        <div className="row mb-4">
          <div className="col-12 text-center">
            <h2>What I Offer</h2>
            <p className="text-muted">
              Explore the range of services I provide to help your business succeed.
            </p>
          </div>
        </div>
        
        {/* Service Cards Grid */}
        <div className="row g-4">
          {servicesData.map(service => (
            <div key={service.id} className="col-md-6 col-lg-3">
              <motion.div
                className="service-card text-center p-4 shadow-sm rounded"
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                variants={cardVariants}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                style={{
                  background: theme === "dark" ? "#343a40" : "#fff",
                  border: "none",
                }}
              >
                {/* Icon Container */}
                <div 
                  className="icon-container mb-3" 
                  style={{
                    background: theme === "dark" ? "#495057" : "#e9ecef",
                    width: "80px",
                    height: "80px",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto",
                  }}
                >
                  <i className={`${service.icon} fa-2x`} style={{ color: "#0d6efd" }} aria-hidden="true"></i>
                </div>
                <h5 className="service-title mt-3">{service.name}</h5>
                <p className="service-description text-muted">{service.description}</p>
                {service.cta && (
                  <a
                    href={service.link}
                    className={`btn btn-sm mt-3 ${theme === "dark" ? "btn-outline-light" : "btn-outline-primary"}`}
                  >
                    {service.cta}
                  </a>
                )}
              </motion.div>
            </div>
          ))}
        </div>

        {/* Optional: Why Choose Me Section */}
        {highlightsData && highlightsData.length > 0 && (
          <div className="row mt-5">
            <div className="col-12 text-center">
              <h3>Why Choose Me?</h3>
            </div>
            {highlightsData.map(highlight => (
              <div key={highlight.id} className="col-12 col-md-4 mt-3">
                <div className="d-flex justify-content-center align-items-center">
                  <i className={`${highlight.icon} fa-2x me-2 text-primary`} aria-hidden="true"></i>
                  <span>{highlight.text}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Services;
