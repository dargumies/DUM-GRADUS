import React, { useEffect, useRef, useState } from "react";
import "./Events.css";
import { NavLink } from "react-router-dom";
import bg from "./assets/enet-bg.png";
import img1 from "./assets/event1.png";
import img2 from "./assets/event2.png";
import img3 from "./assets/event3.png";

const events = [
  {
    img: img1,
    tag: "Every Friday",
    title: "Live Music",
    sub: "Jazz & Soul Nights",
    desc: "Immerse yourself in live performances by talented local and international artists in our intimate lounge setting.",
    detail: "Doors open 20:00",
  },
  {
    img: img2,
    tag: "Monthly",
    title: "Exclusive Parties",
    sub: "VIP Social Events",
    desc: "Join our curated private events and VIP soirées — an evening designed for those who appreciate the finer things.",
    detail: "By invitation only",
  },
  {
    img: img3,
    tag: "Weekends",
    title: "Cocktail Workshop",
    sub: "Mixology Masterclass",
    desc: "Master the art of mixology with guidance from our award-winning bartenders. Limited seats per session.",
    detail: "Max 12 guests",
  },
];

export default function Events() {
  const [visible, setVisible] = useState(false);
  const gridRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (gridRef.current) observer.observe(gridRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="events-page" style={{ backgroundImage: `url(${bg})` }}>
      <div className="overlay-dark"></div>
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

      <div className="events-container">

        {/* HEADER */}
        <header className="events-header animated">

          <h1>Events</h1>

          <p className="events-sub">Special moments curated for you</p>
        </header>

        {/* EVENTS GRID */}
        <div ref={gridRef} className={`events-grid ${visible ? "visible" : ""}`}>
          {events.map((ev, i) => (
            <div key={ev.title} className={`event-card ec-${i + 1}`}>
              {/* Image */}
              <div className="event-img-wrap">
                <img src={ev.img} alt={ev.title} />
                <div className="event-img-overlay"></div>
                <span className="event-tag">{ev.tag}</span>
              </div>

              {/* Body */}
              <div className="event-body">
                <div className="event-title-row">
                  <div>
                    <h2 className="event-title">{ev.title}</h2>
                    <p className="event-subtitle">{ev.sub}</p>
                  </div>
                  <div className="event-detail">{ev.detail}</div>
                </div>
                <p className="event-desc">{ev.desc}</p>
                <div className="event-footer-row">
                  <div className="ef-line"></div>
                  <NavLink to="/booking">
                    <button className="event-btn">
                      Book Now
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </button>
                  </NavLink>
                </div>
              </div>

              {/* Corner accents */}
              <div className="ec-corner ec-tl"></div>
              <div className="ec-corner ec-br"></div>
            </div>
          ))}
        </div>

        {/* NEWSLETTER STRIP */}
        <div className="events-newsletter animated-delayed">
          <div className="nl-left">
            <div className="nl-icon">✦</div>
            <div>
              <h3>Stay in the know</h3>
              <p>Get notified about upcoming events and exclusive invitations.</p>
            </div>
          </div>
          <div className="nl-right">
            <input type="email" placeholder="your@email.com" />
            <button>Subscribe</button>
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
}
