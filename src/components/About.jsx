// File: About.js

import React from 'react';
import { motion } from 'framer-motion';
import 'bootstrap/dist/css/bootstrap.min.css';

// Default bio content (can be imported from a JSON file or passed as props)
const defaultBioData = {
  title: "About Me",
  name: "John Doe",
  profession: "Front-End Developer & Designer",
  shortBio:
    "I am a passionate front-end developer with expertise in React and Bootstrap. I craft responsive, engaging web experiences that blend performance with visual appeal.",
  yearsExperience: "5+ Years",
  specializations: "Web Dev, UI/UX",
  achievements: "20+ Clients & 5+ Years in Industry",
  resumeLink: "/resume.pdf",
  contactSectionId: "contact",
  profileImage: "https://i.postimg.cc/d1Yp9rTw/christian-buehner-q5x-BHNmuf-k-unsplash.jpg", // Replace with your high-quality image URL
};

const About = ({ bioData = defaultBioData }) => {
  // Structured Data for SEO (schema.org Person type)
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": bioData.name,
    "jobTitle": bioData.profession,
    "image": bioData.profileImage,
    "url": window.location.href,
    "description": bioData.shortBio,
  };

  return (
    <section
      className="about-section py-5"
      itemScope
      itemType="https://schema.org/Person"
    >
      {/* Structured Data for SEO */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
      <div className="container">
        <motion.div
          className="row align-items-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Left Column: Profile Image with hover effect */}
          <div className="col-md-6 mb-4 mb-md-0">
            <motion.img
              src={bioData.profileImage}
              alt={`${bioData.name} Profile`}
              className="img-fluid rounded shadow"
              loading="lazy"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
          </div>

          {/* Right Column: Bio Content */}
          <div className="col-md-6">
            <h2 className="mb-3" itemProp="name">
              {bioData.title}
            </h2>
            <h4 className="text-primary mb-3">
              {bioData.name} - {bioData.profession}
            </h4>
            <p className="text-muted">{bioData.shortBio}</p>

            {/* Key Highlights */}
            <div className="row my-4">
              <div className="col-12 col-md-4">
                <div className="p-3 bg-light rounded text-center">
                  <h5>{bioData.yearsExperience}</h5>
                  <p className="mb-0 small">Experience</p>
                </div>
              </div>
              <div className="col-12 col-md-4">
                <div className="p-3 bg-light rounded text-center">
                  <h5>{bioData.specializations}</h5>
                  <p className="mb-0 small">Specializations</p>
                </div>
              </div>
              <div className="col-12 col-md-4">
                <div className="p-3 bg-light rounded text-center">
                  <h5>{bioData.achievements}</h5>
                  <p className="mb-0 small">Achievements</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div>
              <a
                href={bioData.resumeLink}
                className="btn btn-primary me-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download Resume
              </a>
              <a href={`#${bioData.contactSectionId}`} className="btn btn-outline-primary">
                Contact Me
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
 
