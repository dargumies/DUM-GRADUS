import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Close menu on route change or resize
  useEffect(() => {
    const close = () => setOpen(false);
    window.addEventListener("resize", close);
    return () => window.removeEventListener("resize", close);
  }, []);

  return (
    <nav className="navbar">
      <div className="logo">DUM & GRADUS</div>

      {/* Desktop links */}
      <div className="nav-links">
        <NavLink to="/" end onClick={() => setOpen(false)}>Home</NavLink>
        <NavLink to="/menu" onClick={() => setOpen(false)}>Menu</NavLink>
        <NavLink to="/booking" onClick={() => setOpen(false)}>Booking</NavLink>
        <NavLink to="/events" onClick={() => setOpen(false)}>Events</NavLink>
        <NavLink to="/contacts" onClick={() => setOpen(false)}>Contacts</NavLink>
      </div>

      {/* Burger button (mobile only) */}
      <button
        className={`burger ${open ? "burger--open" : ""}`}
        onClick={() => setOpen((o) => !o)}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Mobile drawer */}
      <div className={`mobile-menu ${open ? "mobile-menu--open" : ""}`}>
        <NavLink to="/" end onClick={() => setOpen(false)}>Home</NavLink>
        <NavLink to="/menu" onClick={() => setOpen(false)}>Menu</NavLink>
        <NavLink to="/booking" onClick={() => setOpen(false)}>Booking</NavLink>
        <NavLink to="/events" onClick={() => setOpen(false)}>Events</NavLink>
        <NavLink to="/contacts" onClick={() => setOpen(false)}>Contacts</NavLink>
      </div>
    </nav>
  );
}
