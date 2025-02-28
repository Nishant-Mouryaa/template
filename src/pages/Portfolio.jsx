// File: Portfolio.js

import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';

// Example project data (replace with real JSON/API data)
const projectData = [
  {
    id: 1,
    title: 'Portfolio Website',
    category: 'Web Dev',
    image: 'https://i.postimg.cc/MHfDkzH6/aibuilder.png',
    description: 'A modern portfolio site built with React and Bootstrap.',
    techStack: ['React', 'Bootstrap', 'CSS'],
    previewLink: 'https://your-portfolio-link.com',
    details:
      'This project showcases my personal portfolio, featuring a responsive design, interactive UI, and a dynamic project gallery.'
  },
  {
    id: 2,
    title: 'Mobile App UI/UX',
    category: 'UI/UX',
    image: 'https://i.postimg.cc/HLWRq7gT/portfolio-ss.png',
    description: 'Concept design and prototype for a mobile finance app.',
    techStack: ['Figma', 'Sketch', 'Adobe XD'],
    previewLink: 'https://dribbble.com/your-uiux-showcase',
    details:
      'Created a seamless user experience flow, including low-fidelity wireframes, high-fidelity mockups, and interactive prototypes.'
  },
  {
    id: 3,
    title: 'E-commerce Platform',
    category: 'Web Dev',
    image: 'https://i.postimg.cc/k44scQdt/port.png',
    description: 'A robust full-stack e-commerce solution.',
    techStack: ['React', 'Node.js', 'MongoDB'],
    previewLink: 'https://your-ecommerce-link.com',
    details:
      'Built a scalable online store with user authentication, product management, and payment gateway integration. Optimized for performance and SEO.'
  },
  {
    id: 4,
    title: 'Branding Package',
    category: 'UI/UX',
    image: 'https://i.postimg.cc/HLWRq7gT/portfolio-ss.png',
    description: 'Complete brand identity design for a new startup.',
    techStack: ['Illustrator', 'Photoshop'],
    previewLink: 'https://www.behance.net/your-branding-portfolio',
    details:
      'Developed a cohesive brand strategy including logo, color palettes, typography guidelines, and marketing materials.'
  },
];

// ** Framer Motion Variants **

// Container variants for staggering child animations
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      // Stagger children animations by 0.1s
      staggerChildren: 0.1,
    },
  },
};

// Card/item variants for fade-in + slight translate
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Portfolio = () => {
  // Categories (could be generated dynamically from project data if you prefer)
  const categories = ['All', 'Web Dev', 'UI/UX'];

  // State for selected category
  const [selectedCategory, setSelectedCategory] = useState('All');

  // State for modal
  const [showModal, setShowModal] = useState(false);
  const [activeProject, setActiveProject] = useState(null);

  // Filter function
  const filteredProjects = projectData.filter((project) => {
    if (selectedCategory === 'All') return true;
    return project.category === selectedCategory;
  });

  // Handle category change
  const handleCategoryChange = (cat) => {
    setSelectedCategory(cat);
  };

  // Handle opening the modal with project details
  const handleOpenModal = (project) => {
    setActiveProject(project);
    setShowModal(true);
  };

  // Handle closing the modal
  const handleCloseModal = () => {
    setShowModal(false);
    setActiveProject(null);
  };

  return (
    <div className="portfolio-page py-5">
      <div className="container">
        {/* =========================
            PORTFOLIO HEADER
        ========================== */}
        <div className="text-center mb-5">
          <h2 className="fw-bold">My Portfolio</h2>
          <p className="text-muted">
            A selection of my recent work and personal projects showcasing my
            skills in Web Development and UI/UX.
          </p>
        </div>

        {/* =========================
            CATEGORIES FILTER
        ========================== */}
        <div className="text-center mb-4">
          {categories.map((cat) => (
            <Button
              key={cat}
              variant={cat === selectedCategory ? 'primary' : 'outline-primary'}
              className="me-2 mb-2"
              onClick={() => handleCategoryChange(cat)}
            >
              {cat}
            </Button>
          ))}
        </div>

        {/* =========================
            PROJECT GRID
        ========================== */}
        <motion.div
          className="row"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              className="col-md-6 col-lg-4 mb-4"
              variants={itemVariants}
            >
              <div className="card h-100">
                <img
                  src={project.image}
                  className="card-img-top"
                  alt={project.title}
                  style={{ objectFit: 'cover', height: '200px' }}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text flex-grow-1">{project.description}</p>
                  <p className="text-muted">
                    <strong>Tech Stack:</strong> {project.techStack.join(', ')}
                  </p>
                  <div>
                    <a
                      href={project.previewLink}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-sm btn-primary me-2"
                    >
                      Live Preview
                    </a>
                    {/* Button to open modal */}
                    <Button
                      size="sm"
                      variant="outline-primary"
                      onClick={() => handleOpenModal(project)}
                    >
                      More Info
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* =========================
            PROJECT DETAILS MODAL
        ========================== */}
        <Modal show={showModal} onHide={handleCloseModal} centered>
          {activeProject && (
            <>
              <Modal.Header closeButton>
                <Modal.Title>{activeProject.title}</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <img
                  src={activeProject.image}
                  alt={activeProject.title}
                  className="img-fluid mb-3"
                />
                <p>{activeProject.details}</p>
                <p className="text-muted">
                  <strong>Tech Stack:</strong> {activeProject.techStack.join(', ')}
                </p>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleCloseModal}>
                  Close
                </Button>
                <Button
                  variant="primary"
                  href={activeProject.previewLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Preview
                </Button>
              </Modal.Footer>
            </>
          )}
        </Modal>
      </div>
    </div>
  );
};

export default Portfolio;
 
