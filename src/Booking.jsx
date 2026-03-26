import React from "react";
import "./Booking.css";
import { NavLink } from "react-router-dom";
import { FaInstagram, FaFacebookF, FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import bg from "./assets/booking-bg.png";

function Booking() {
  return (
    <div className="booking-page" style={{ backgroundImage: `url(${bg})` }}>
      <div className="overlay"></div>
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

      <div className="booking-container">

        {/* HEADER */}
        <header className="booking-header animated">
          <span className="booking-eyebrow">Premium Reservation</span>
          <h1>Booking</h1>
          <p className="booking-sub">Secure your exclusive table at DUM & GRADUS</p>
        </header>

        {/* FORM */}
        <section className="booking-glass-panel animated-delayed">

          <div className="form-grid">
            <div className="input-box">
              <label>Guests</label>
              <div className="select-wrap">
                <svg className="field-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>
                </svg>
                <select defaultValue="default">
                  <option value="default" disabled>Number of guests</option>
                  <option>1 Person</option>
                  <option>2 Persons</option>
                  <option>4 Persons</option>
                  <option>VIP Lounge (6+)</option>
                </select>
              </div>
            </div>

            <div className="input-box">
              <label>Time</label>
              <div className="select-wrap">
                <svg className="field-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="9"/>
                  <path d="M12 7v5l3 3"/>
                </svg>
                <select defaultValue="default">
                  <option value="default" disabled>Select time</option>
                  <option>18:00</option>
                  <option>19:00</option>
                  <option>20:00</option>
                  <option>21:00</option>
                  <option>22:00</option>
                </select>
              </div>
            </div>

            <div className="input-box">
              <label>Date</label>
              <div className="input-wrap">
                <svg className="field-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="3" y="4" width="18" height="18" rx="2"/>
                  <line x1="16" y1="2" x2="16" y2="6"/>
                  <line x1="8" y1="2" x2="8" y2="6"/>
                  <line x1="3" y1="10" x2="21" y2="10"/>
                </svg>
                <input type="date" />
              </div>
            </div>

            <div className="input-box">
              <label>Your Name</label>
              <div className="input-wrap">
                <svg className="field-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/>
                  <circle cx="12" cy="7" r="4"/>
                </svg>
                <input type="text" placeholder="Full name" />
              </div>
            </div>
          </div>

          <div className="input-box full-width">
            <label>Special Requests</label>
            <div className="textarea-wrap">
              <svg className="field-icon field-icon--top" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
              </svg>
              <textarea placeholder="Tell us about dietary requirements, special occasions, or seating preferences..."></textarea>
            </div>
          </div>

          <button className="gold-reserve-btn">
            <span>Confirm Reservation</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
        </section>

        {/* WHY CARDS */}
        <div className="why-section-new">
          <div className="why-card-luxe">
            <div className="why-icon-wrap"><div className="icon">🍸</div></div>
            <h3>Exclusive Atmosphere</h3>
            <p>Luxurious setting crafted for an unforgettable night in Almaty.</p>
          </div>
          <div className="why-card-luxe">
            <div className="why-icon-wrap"><div className="icon">💎</div></div>
            <h3>Private VIP Rooms</h3>
            <p>Secluded spaces with dedicated premium service for your party.</p>
          </div>
          <div className="why-card-luxe">
            <div className="why-icon-wrap"><div className="icon">🛎️</div></div>
            <h3>Exceptional Service</h3>
            <p>Attentive and discreet staff ensuring every detail is perfect.</p>
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
          <div className="social-links">
            <a className="social-item" href="#"><FaInstagram /></a>
            <a className="social-item" href="#"><FaFacebookF /></a>
            <a className="social-item" href="#"><FaTiktok /></a>
            <a className="social-item" href="#"><FaXTwitter /></a>
          </div>
          <p className="copyright">© 2026 LUXURY EXPERIENCE</p>
        </div>
      </footer>
    </div>
  );
}

export default Booking;