import React from "react";
import "./Resume.css";

function Resume() {
  return (
    <section id="resume" className="resume">
      <h1>My Resume</h1>

      {/* First Page Preview (Image) */}
      <div className="resume-preview">
        <img src="/cv.jpeg" alt="Resume Preview" />
        
        {/* Overlay Message */}
        <div className=" resume-overlay">
          <p>Download to view full resume</p>
        </div>
      </div>

      {/* Download Button */}
      <a href="/cv.pdf" download className="btn">
        Download Resume
      </a>
    </section>
  );
}

export default Resume;
