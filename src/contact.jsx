import React, { useEffect, useRef } from "react";
import "./contact.css";
import { NavLink } from "react-router-dom";
import { FaInstagram, FaFacebookF, FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import bg from "./assets/contact-bg.png";

const Contact = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    // Load 2GIS map script
    const script = document.createElement("script");
    script.src = "https://mapgl.2gis.com/api/js/v1";
    script.async = true;
    script.onload = () => {
      if (mapRef.current && window.mapgl) {
        const map = new window.mapgl.Map(mapRef.current, {
          center: [76.9286, 43.2567], // Almaty center
          zoom: 15,
          key: "demos", // public demo key
          style: "c080bb6a-8134-4993-93d4-d5b4897c61f0", // dark style
        });

        new window.mapgl.Marker(map, {
          coordinates: [76.9286, 43.2567],
          label: {
            text: "DUM & GRADUS",
            offset: [0, -10],
          },
        });
      }
    };
    document.head.appendChild(script);

    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="contact-page" style={{ backgroundImage: `url(${bg})` }}>
      <div className="overlay-dark"></div>

      {/* Ambient light effects */}
      <div className="ambient-left"></div>
      <div className="ambient-right"></div>

      {/* NAVBAR */}
      <nav className="navbar">
        <div className="nav-links">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/menu">Menu</NavLink>
          <NavLink to="/booking">Booking</NavLink>
          <NavLink to="/events">Events</NavLink>
          <NavLink to="/contacts">Contacts</NavLink>
        </div>
        <div className="logo">DUM & GRADUS</div>
      </nav>

      <div className="contact-container">

        {/* HEADER */}
        <header className="contact-header animated">
    
          <h1>Contacts</h1>

        </header>

        {/* MAIN GRID */}
        <div className="contact-main-grid">

          {/* LEFT: INFO PANEL */}
          <div className="contact-info-panel animated-delayed">

            <div className="brand-block">
              <h2>DUM <span className="amp">&</span> GRADUS</h2>
              <p className="brand-sub">Luxury Lounge & Cocktail Bar</p>
              <div className="brand-accent-line"></div>
            </div>

            <ul className="info-list">
              <li className="info-item">
                <div className="info-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                    <circle cx="12" cy="9" r="2.5"/>
                  </svg>
                </div>
                <div className="info-text">
                  <span className="info-label">Address</span>
                  <span className="info-value">г. Алматы, ул. Чтото, 84</span>
                </div>
              </li>

              <li className="info-item">
                <div className="info-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="12" cy="12" r="9"/>
                    <path d="M12 7v5l3 3"/>
                  </svg>
                </div>
                <div className="info-text">
                  <span className="info-label">Working Hours</span>
                  <span className="info-value">Пн-Пт: 17:00 – 01:00</span>
                  <span className="info-value">Сб-Вс: 09:00 – 04:00</span>
                </div>
              </li>

              <li className="info-item">
                <div className="info-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 11.5a19.79 19.79 0 01-3-8.58A2 2 0 012.07 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 8.09a16 16 0 006 6l.86-.86a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
                  </svg>
                </div>
                <div className="info-text">
                  <span className="info-label">Phone</span>
                  <span className="info-value">+1 234 567 8990</span>
                </div>
              </li>

              <li className="info-item">
                <div className="info-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
                <div className="info-text">
                  <span className="info-label">Email</span>
                  <span className="info-value">Dargumies@mail.ru</span>
                </div>
              </li>
            </ul>

            {/* FOLLOW US */}
            <div className="follow-block">
              <div className="follow-divider">
                <div className="fd-line"></div>
                <span className="follow-label">Follow Us</span>
                <div className="fd-line"></div>
              </div>
              <div className="social-row">
                <a className="s-btn" href="#"><FaInstagram /></a>
                <a className="s-btn" href="#"><FaFacebookF /></a>
                <a className="s-btn" href="#"><FaTiktok /></a>
                <a className="s-btn" href="#"><FaXTwitter /></a>
              </div>
            </div>

          </div>

          {/* RIGHT: MAP */}
          <div className="map-panel animated-delayed-more">
            <div className="map-corner map-corner--tl"></div>
            <div className="map-corner map-corner--tr"></div>
            <div className="map-corner map-corner--bl"></div>
            <div className="map-corner map-corner--br"></div>
            <div className="map-inner" ref={mapRef}></div>
            <div className="map-glow-ring"></div>
          </div>

        </div>
      </div>

      {/* FOOTER */}
      <footer className="luxury-footer">
        <div className="footer-content">
          <div className="footer-logo">DUM & GRADUS</div>
          <div className="footer-divider">
            <div className="line-sm"></div>
            <div className="dot"></div>
            <div className="line-sm"></div>
          </div>
          <p className="copyright">© 2026 LUXURY EXPERIENCE</p>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
