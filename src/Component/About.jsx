import React from "react";
import './About.css';

const About=()=>{
    return(
        <section className="about">
            <h2  className="section-title">About</h2>
            <p className="about-desc">
               I am a passionate Web Developer who loves building modern and responsive websites. 
            </p>
            <div className="about-container">
                <div className="about-img">
                              <img src="https://res.cloudinary.com/dvn3f6gja/image/upload/v1773929722/IMG-20250218-WA0012_zthq17.jpg" alt="profile" />

                </div>


                <div className="about-content">
                    <h3>Web developer & React Developer</h3>
                    <p className="about-text">
                I enjoy creating user-friendly interfaces and solving real-world problems using code.
                    </p>
<div className="about-info"> <div>
     <p><span>Birthday:</span> 26 march 2006</p>
      <p><span>Website:</span> yoursite.com</p>
       <p><span>Phone:</span> +91 8789592706</p>
        <p><span>City:</span> India</p> </div> 
        <div> <p><span>Age:</span> 20</p> 
        <p><span>Degree:</span> BCA</p>
         <p><span>Email:</span> jha493815@gmail.com</p>
          <p><span>Freelance:</span> Available</p> 
          </div> </div> <p className="about-bottom"> I am always learning new technologies and improving my skills to build better projects. </p>
          <p className="acknowledgement">
            Special Thanks to my Mentors, Mr.Radheshyam sir and Mr.sita ram sir for valuable time and helping me during the making this project and Mention one more special name that is OpenAi who help in giving interesting ideas.

            </p> 
</div>
 </div>



    
        </section>
    )
}
export default About;