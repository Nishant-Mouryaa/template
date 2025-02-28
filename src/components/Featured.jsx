// File: FeaturedProjects.js

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import 'bootstrap/dist/css/bootstrap.min.css';

// Sample project data (this can be imported from a JSON file or API)
const defaultProjects = [
  {
    id: 1,
    title: "AI-powered Website Builder",
    image: "https://i.postimg.cc/MHfDkzH6/aibuilder.png",
    description: "Build responsive websites with AI assistance.",
    tags: ["React", "Node.js", "Bootstrap"],
    liveDemo: "https://example.com/project1",
    codeLink: "https://github.com/username/project1",
    category: "Web Dev",
  },
  {
    id: 2,
    title: "Modern UI/UX Redesign",
    image: "https://i.postimg.cc/k44scQdt/port.png",
    description: "Revamp your UI/UX with modern design trends.",
    tags: ["UI/UX", "Figma"],
    liveDemo: "https://example.com/project2",
    codeLink: "https://github.com/username/project2",
    category: "UI/UX",
  },
  {
    id: 3,
    title: "E-commerce Platform",
    image: "https://i.postimg.cc/HLWRq7gT/portfolio-ss.png",
    description: "A scalable e-commerce solution with integrated payments.",
    tags: ["React", "Node.js", "Stripe"],
    liveDemo: "https://example.com/project3",
    codeLink: "https://github.com/username/project3",
    category: "E-commerce",
  },
  {
    id: 4,
    title: "Responsive Web App",
    image: "https://via.placeholder.com/500x300",
    description: "A modern web application built with React.",
    tags: ["React", "Bootstrap"],
    liveDemo: "https://example.com/project4",
    codeLink: "https://github.com/username/project4",
    category: "Web Dev",
  }
];

const filterCategories = ["All", "Web Dev", "UI/UX", "E-commerce"];

const FeaturedProjects = ({ projectsData = defaultProjects, theme = "light" }) => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState(projectsData);

  useEffect(() => {
    if (selectedCategory === "All") {
      setFilteredProjects(projectsData);
    } else {
      const filtered = projectsData.filter(
        (project) => project.category === selectedCategory
      );
      setFilteredProjects(filtered);
    }
  }, [selectedCategory, projectsData]);

  // Structured data for SEO (schema.org ItemList)
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": projectsData.map((project, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "CreativeWork",
        "name": project.title,
        "url": project.liveDemo,
        "image": project.image,
        "description": project.description
      }
    }))
  };

  // Framer Motion variant for project cards
  const cardVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className={`featured-projects-section py-5 ${theme === "dark" ? "bg-dark text-light" : "bg-light text-dark"}`}>
      {/* SEO Structured Data */}
      <script type="application/ld+json">{JSON.stringify(structuredData)}</script>

      <div className="container">
        {/* Section Heading */}
        <div className="row mb-4">
          <div className="col-12 text-center">
            <h2>Featured Projects</h2>
            <p className="text-muted">Explore some of my recent work and projects.</p>
          </div>
        </div>

        {/* Filter Navigation */}
        <div className="row mb-4">
          <div className="col-12 text-center">
            {filterCategories.map((category) => (
              <button
                key={category}
                className={`btn btn-sm mx-2 ${selectedCategory === category ? "btn-primary" : "btn-outline-primary"}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="row">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              className="col-md-6 col-lg-4 mb-4"
              initial="hidden"
              whileInView="visible"
              variants={cardVariant}
              transition={{ duration: 0.5, delay: 0.1 * project.id }}
              viewport={{ once: true }}
            >
              <div className="card h-100 shadow-sm border-0">
                <div className="overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="card-img-top"
                    loading="lazy"
                    style={{ transition: "transform 0.3s" }}
                    onMouseOver={(e) => e.currentTarget.style.transform = "scale(1.05)"}
                    onMouseOut={(e) => e.currentTarget.style.transform = "scale(1)"}
                  />
                </div>
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text text-truncate">{project.description}</p>
                  <div className="mb-3">
                    {project.tags.map((tag, index) => (
                      <span key={index} className="badge bg-secondary me-1">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="mt-auto">
                    <a href={project.liveDemo} target="_blank" rel="noreferrer" className="btn btn-primary btn-sm me-2">
                      View Project
                    </a>
                    <a href={project.codeLink} target="_blank" rel="noreferrer" className="btn btn-outline-primary btn-sm">
                      View Code
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
 
