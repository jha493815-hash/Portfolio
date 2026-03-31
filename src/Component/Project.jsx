import React from "react";
import "./Project.css";

const projects = [
  {
    title: "Rock,Paper",
    image: "https://res.cloudinary.com/dvn3f6gja/image/upload/v1774159475/Screenshot_2026-03-22_112954_sdgnhm.png",
    link: "//charming-praline-5d4ec2.netlify.app/"
  },

   {
    title: "E-commerce",
    image: "https://res.cloudinary.com/dvn3f6gja/image/upload/v1774176162/canva-pink-and-white-minimalist-e-commerce-presentation-pUrMakjsI6U_qkgjf2.jpg",
    link: "https://kaleidoscopic-sfogliatella-e34b61.netlify.app/"
  },

  {
    title: "Clock",
    image: "https://res.cloudinary.com/dvn3f6gja/image/upload/v1774176503/F3663137-01_h6egyx.jpg",
    link: "https://jovial-rugelach-2e5d0b.netlify.app/"
  },
  
  
  {
    title: "NetMeds",
    image: "https://res.cloudinary.com/dvn3f6gja/image/upload/v1774174798/Ffa0JseHJAwdN456ylkEaLbTlfh01BCF3vqPAtyszU8wrfQM0rZgfDwD72-woFIhEJM_w3840-h2160-rw_h56jcr.webp",
    link: "https://thunderous-cranachan-f9cd8a.netlify.app/",
  },
  {
    title: "Amazon",
    image: "https://res.cloudinary.com/dvn3f6gja/image/upload/v1774174393/31x451MtRuL._SY400__uk9chx.jpg",
    link: "https://superlative-cuchufli-198c2e.netlify.app/",
  },
  {
    title: "Carehub",
    image: "https://res.cloudinary.com/dvn3f6gja/image/upload/v1774174352/video-placeholder_cwygwo.png",
    link: "https://effervescent-medovik-67e046.netlify.app/",
  },
  {
    title: "Zomato",
    image: "https://res.cloudinary.com/dvn3f6gja/image/upload/v1774173957/wjxdrpn49ebvfmuporzm_mnps7n.jpg",
    link: "https://effortless-squirrel-eaf0f8.netlify.app/",
  },
];

function Portfolio() {
  return (
    <div className="portfolio">
      <h2 className="portfolio-heading">My Projects</h2>

      <div className="portfolio-grid">
        {projects.map((project, index) => (
          <div className="portfolio-card" key={index}>
            
            {/* Clickable Image */}
            <a href={project.link} target="_blank" rel="noreferrer">
              <img
                src={project.image}
                alt={project.title}
                className="portfolio-image"
              />
            </a>

            <h3>{project.title}</h3>

            {/* Button */}
            <a href={project.link} target="_blank" rel="noreferrer">
              <button className="portfolio-btn">View Project</button>
            </a>

          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
