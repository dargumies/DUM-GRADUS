import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">DUM & GRADUS</div>

      {/* Desktop links */}
      <div className="nav-links">
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/menu">Menu</NavLink>
        <NavLink to="/booking">Booking</NavLink>
        <NavLink to="/events">Events</NavLink>
        <NavLink to="/contacts">Contacts</NavLink>
      </div>

      {/* Hamburger */}
      <button
        className={`hamburger ${open ? "open" : ""}`}
        onClick={() => setOpen(!open)}
        aria-label="Toggle navigation"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Mobile drawer */}
      <div className={`mobile-drawer ${open ? "open" : ""}`}>
        <NavLink to="/" end onClick={() => setOpen(false)}>Home</NavLink>
        <NavLink to="/menu" onClick={() => setOpen(false)}>Menu</NavLink>
        <NavLink to="/booking" onClick={() => setOpen(false)}>Booking</NavLink>
        <NavLink to="/events" onClick={() => setOpen(false)}>Events</NavLink>
        <NavLink to="/contacts" onClick={() => setOpen(false)}>Contacts</NavLink>
      </div>

      {open && <div className="drawer-overlay" onClick={() => setOpen(false)}></div>}
    </nav>
  );
}
