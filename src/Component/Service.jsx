import React from "react";
import "./Service.css";

const Services = () => {
  const services = [
    {
      title: "Web Development",
      desc: "I build modern, responsive and fast websites using the latest technologies like HTML, CSS, JavaScript and React.",
      icon: "🌐",
    },
    {
      title: "Custom Website",
      desc: "I create fully customized websites based on your needs, ensuring unique design and functionality.",
      icon: "🛠️",
    },
    {
      title: "E-Commerce Website",
      desc: "I develop e-commerce websites with product pages, cart systems, and smooth user experience.",
      icon: "🛒",
    },
    {
      title: "Static Websites",
      desc: "Fast, simple and SEO-friendly static websites perfect for portfolios and landing pages.",
      icon: "📄",
    },
    {
      title: "Dynamic Websites",
      desc: "Interactive and data-driven websites with real-time features and advanced functionality.",
      icon: "⚙️",
    },
    {
      title: "Frontend Development",
      desc: "I specialize in creating beautiful UI using React with responsive layouts and smooth UX.",
      icon: "💻",
    },
  ];

  return (
    <section className="services">
      <h1 className="services-title">My Services</h1>
      <div className="underline"></div>

      <p className="services-desc">
        I offer a range of web development services to help businesses and individuals
        build a strong and modern online presence.
      </p>

      <div className="services-grid">
        {services.map((item, index) => (
          <div className="service-card" key={index}>
            <div className="service-icon">{item.icon}</div>
            <div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
