// File: Hero.js

import React from 'react';
import { motion } from 'framer-motion';
import 'bootstrap/dist/css/bootstrap.min.css';

// Default hero data (this could also be imported from a JSON file)
const defaultHeroData = {
  greeting: "Hi, I'm John Doe 👋",
  headline: "John Doe - Front-End Developer",
  tagline: "Crafting exceptional web experiences with React & Bootstrap",
  availabilityStatus: "Available for Freelance Work",
  resumeLink: "/resume.pdf",
  contactSectionId: "contact",
  profileImage: "https://i.postimg.cc/YCXCZ2z5/christian-buehner-Ivopur-Fm-Ai8-unsplash.jpg", // Replace with your high-quality image URL
};

const Hero = ({ heroData = defaultHeroData, theme = "light" }) => {
  // Structured data for SEO (schema.org Person type)
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": heroData.headline,
    "jobTitle": "Front-End Developer",
    "image": heroData.profileImage,
    "url": window.location.href,
    "description": heroData.tagline,
  };

  // Framer Motion variants for text and image animations
  const textVariant = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  const imageVariant = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
    hover: { scale: 1.05 },
  };

  return (
    <section
      className={`hero-section py-5 ${theme === "dark" ? "bg-dark text-light" : "bg-light text-dark"}`}
    >
      {/* Structured Data for SEO */}
      <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      <div className="container">
        <div className="row align-items-center">
          {/* Left Column: Text Content */}
          <div className="col-md-6 mb-4 mb-md-0">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={textVariant}
              transition={{ duration: 0.8 }}
            >
              <p className="lead">{heroData.greeting}</p>
              <h1 className="display-4 fw-bold">{heroData.headline}</h1>
              <p className="fs-5 my-3">{heroData.tagline}</p>
              {heroData.availabilityStatus && (
                <p className="fst-italic text-success">{heroData.availabilityStatus}</p>
              )}
              <div className="mt-4">
                <a
                  href={heroData.resumeLink}
                  className="btn btn-primary btn-lg me-3"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download Resume
                </a>
                <a
                  href={`#${heroData.contactSectionId}`}
                  className="btn btn-outline-primary btn-lg"
                >
                  Hire Me
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Profile Image / Interactive SVG */}
          <div className="col-md-6 text-center">
            <motion.img
              src={heroData.profileImage}
              alt="Profile"
              className="img-fluid rounded shadow"
              loading="lazy"
              initial="hidden"
              animate="visible"
              variants={imageVariant}
              whileHover="hover"
              transition={{ duration: 0.8 }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
 
