import "./Navbar.css";
import { FaHome, FaUser, FaFileAlt, FaImage, FaServicestack, FaEnvelope } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { HashLink as Link } from "react-router-hash-link";

function Navabar() {
  return (
    <div className="sidebar">
      
      <div className="profile">
        <img
          src="https://res.cloudinary.com/dvn3f6gja/image/upload/v1774935453/Gemini_Generated_Image_laoxavlaoxavlaox_uwh6bu.png"
          alt="profile"
        />
        <h2>Aman kr.jha</h2>
      </div>

      <ul className="nav-links">
        <li><Link smooth to="/#home"><FaHome /> Home</Link></li>
        <li><Link smooth to="/#about"><FaUser /> About</Link></li>
        <li><Link smooth to="/#resume"><FaFileAlt /> Resume</Link></li>
        <li><Link smooth to="/#skills"><FaImage /> Skills</Link></li>
        <li><Link smooth to="/#projects"><FaServicestack /> Project</Link></li>
        <li><Link smooth to="/#services"><FaEnvelope /> Services</Link></li>
        <li><Link smooth to="/#contact"><IoMdSettings /> Contact</Link></li>
      </ul>

    </div>
  );
}

export default Navabar;
