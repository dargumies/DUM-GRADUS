import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import Menu from "./Menu";
import Booking from "./Booking";
import Events from "./Events";
import Contact from "./contact";
import bgaaaw from "./assets/bg.png";
import cocktails from "./assets/cocktails.png";
import lounge from "./assets/lounge.png";
import hookah from "./assets/hookan.png";
import vip from "./assets/vip.png";

function Home() {
  return (
    <>
      {/* Ambient orbs */}
      <div className="ambient-left"></div>
      <div className="ambient-right"></div>

      {/* Hero center */}
      <div className="hero-center animated">
        <div className="hero-eyebrow">
          <div className="eyebrow-line"></div>
          <span>Premium Experience</span>
          <div className="eyebrow-line"></div>
        </div>
        <h1 className="hero-title">
          <span className="title-dum">DUM</span>
          <span className="title-amp">&</span>
          <span className="title-gradus">GRADUS</span>
        </h1>
        <div className="title-underline">
          <div className="line"></div>
          <div className="diamond"></div>
          <div className="line"></div>
        </div>
        <p className="hero-tagline">Luxury Lounge · Cocktail Bar · Hookah</p>
        <NavLink to="/booking">
          <button className="book-btn">
            <span>Reserve a Table</span>
            <svg className="btn-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
        </NavLink>
      </div>

      {/* Bottom cards */}
      <div className="cards-wrapper animated-delayed">
        <div className="cards-label">
          <div className="cl-line"></div>
          <span>What We Offer</span>
          <div className="cl-line"></div>
        </div>
        <div className="cards">
          <NavLink to="/menu" className="card animated-step-1">
            <div className="card-glow"></div>
            <div className="img-frame">
              <img src={cocktails} alt="Cocktails" />
            </div>
            <p>Signature Cocktails</p>
            <span className="card-hint">View Menu →</span>
          </NavLink>
          <div className="card animated-step-2">
            <div className="card-glow"></div>
            <div className="img-frame">
              <img src={lounge} alt="Lounge" />
            </div>
            <p>Luxury Lounge</p>
          </div>
          <div className="card animated-step-3">
            <div className="card-glow"></div>
            <div className="img-frame">
              <img src={hookah} alt="Hookah" />
            </div>
            <p>Exotic Hookahs</p>
          </div>
          <NavLink to="/events" className="card animated-step-4">
            <div className="card-glow"></div>
            <div className="img-frame">
              <img src={vip} alt="VIP" />
            </div>
            <p>VIP Experience</p>
            <span className="card-hint">See Events →</span>
          </NavLink>
        </div>
        <div className="bottom-line-decorator">
          <div className="long-line"></div>
          <div className="small-diamond"></div>
          <div className="long-line"></div>
        </div>
      </div>
    </>
  );
}

function NavBar() {
  const [open, setOpen] = useState(false);

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

      {/* Hamburger button */}
      <button
        className={`hamburger ${open ? "open" : ""}`}
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
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

      {/* Overlay */}
      {open && <div className="drawer-overlay" onClick={() => setOpen(false)}></div>}
    </nav>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <div className="hero" style={{ backgroundImage: `url(${bgaaaw})` }}>
            <div className="overlay"></div>
            <NavBar />
            <Home />
          </div>
        } />
        <Route path="/menu" element={<Menu />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/events" element={<Events />} />
        <Route path="/contacts" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
