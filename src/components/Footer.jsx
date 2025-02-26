// File: Footer.js

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// Example social links data (could be passed in as props or from JSON)
const defaultSocialLinks = [
  {
    name: 'LinkedIn',
    icon: 'bi bi-linkedin', // Bootstrap icon class
    url: 'https://www.linkedin.com/in/your-profile'
  },
  {
    name: 'GitHub',
    icon: 'bi bi-github',
    url: 'https://github.com/your-username'
  },
  {
    name: 'Twitter',
    icon: 'bi bi-twitter',
    url: 'https://twitter.com/your-handle'
  }
];

// Example quick links data (could be passed in as props or from JSON)
const defaultQuickLinks = [
  { label: 'Home', url: '/' },
  { label: 'Portfolio', url: '/portfolio' },
  { label: 'Services', url: '/services' },
  { label: 'Contact', url: '/contact' }
];

const Footer = ({
  socialLinks = defaultSocialLinks,
  quickLinks = defaultQuickLinks,
  name = 'Your Name',
  year = new Date().getFullYear()
}) => {
  return (
    <footer className="bg-light text-dark py-4 mt-5">
      <div className="container">
        <div className="row">
          {/* =========================
              SOCIAL LINKS
          ========================== */}
          <div className="col-md-4 mb-3 mb-md-0 text-center text-md-start">
            <h5 className="fw-bold">Follow Me</h5>
            <div className="d-flex justify-content-center justify-content-md-start gap-3 mt-2">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-dark"
                >
                  <i className={`${link.icon} fs-4`} />
                </a>
              ))}
            </div>
          </div>

          {/* =========================
              QUICK LINKS
          ========================== */}
          <div className="col-md-4 mb-3 mb-md-0 text-center">
            <h5 className="fw-bold">Quick Links</h5>
            <ul className="list-unstyled">
              {quickLinks.map((link) => (
                <li key={link.label} className="my-2">
                  <a href={link.url} className="text-dark text-decoration-none">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* =========================
              COPYRIGHT
          ========================== */}
          <div className="col-md-4 d-flex align-items-center justify-content-center justify-content-md-end">
            <p className="m-0 text-center text-md-end">
              © {year} {name}. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
 
