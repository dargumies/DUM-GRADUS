import "./Menu.css";
import { NavLink } from "react-router-dom";
import bg from "./assets/menu-bg.png";
import { useEffect, useRef, useState } from "react";

const menuCategories = [
  {
    id: "drinks",
    icon: "🍸",
    label: "Cocktails",
    items: [
      { name: "Negroni Sbagliato", desc: "Campari, sweet vermouth, prosecco", price: "3 200 ₸" },
      { name: "Smoke & Gold", desc: "Mezcal, honey syrup, activated charcoal", price: "3 800 ₸" },
      { name: "Velvet Rose", desc: "Gin, elderflower, raspberry, tonic", price: "3 500 ₸" },
      { name: "Dark Reverie", desc: "Rum, cold brew, vanilla, cream", price: "3 400 ₸" },
    ],
  },
  {
    id: "hookah",
    icon: "💨",
    label: "Hookah",
    items: [
      { name: "Black Ice", desc: "Premium coal, blackcurrant & mint blend", price: "8 500 ₸" },
      { name: "Desert Rose", desc: "Rose petals, honey, light tobacco", price: "9 000 ₸" },
      { name: "Double Apple", desc: "Classic double apple, cooling crystals", price: "7 800 ₸" },
      { name: "Oriental Night", desc: "Exotic spice blend, cinnamon, clove", price: "9 500 ₸" },
    ],
  },
  {
    id: "lounge",
    icon: "🥂",
    label: "Wine & Spirits",
    items: [
      { name: "Dom Pérignon", desc: "Vintage 2013, Champagne, France", price: "85 000 ₸" },
      { name: "Macallan 18yr", desc: "Single malt Scotch whisky", price: "22 000 ₸" },
      { name: "Beluga Noble", desc: "Russian premium vodka, 50ml", price: "4 200 ₸" },
      { name: "Hennessy XO", desc: "Cognac, aged blend, 50ml", price: "6 500 ₸" },
    ],
  },
  {
    id: "vip",
    icon: "💎",
    label: "VIP Packages",
    items: [
      { name: "Gold Package", desc: "Bottle service + hookah + fruit platter", price: "45 000 ₸" },
      { name: "Diamond Night", desc: "Champagne tower + 2 hookahs + VIP room", price: "120 000 ₸" },
      { name: "Royal Table", desc: "Full exclusive room, butler service", price: "200 000 ₸" },
      { name: "Birthday Suite", desc: "Decorations + cake + bottle + hookah", price: "65 000 ₸" },
    ],
  },
];

function Menu() {
  const [activeTab, setActiveTab] = useState("drinks");
  const [visible, setVisible] = useState(false);
  const tabsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (tabsRef.current) observer.observe(tabsRef.current);
    return () => observer.disconnect();
  }, []);

  const active = menuCategories.find((c) => c.id === activeTab);

  return (
    <div className="menu-page" style={{ backgroundImage: `url(${bg})` }}>
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

      <div className="menu-container">

        {/* HEADER */}
        <header className="menu-header animated">
 
          <h1>Our Menu</h1>

          <p className="menu-sub">Curated flavours for the discerning palate</p>
        </header>

        {/* TABS */}
        <div ref={tabsRef} className={`menu-tabs ${visible ? "visible" : ""}`}>
          {menuCategories.map((cat, i) => (
            <button
              key={cat.id}
              className={`tab-btn tab-${i + 1} ${activeTab === cat.id ? "active" : ""}`}
              onClick={() => setActiveTab(cat.id)}
            >
              <span className="tab-icon">{cat.icon}</span>
              <span className="tab-label">{cat.label}</span>
            </button>
          ))}
        </div>

        {/* MENU ITEMS */}
        <div className="menu-items-grid">
          {active.items.map((item, i) => (
            <div
              key={item.name}
              className="menu-item-card"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="mic-top">
                <div className="mic-corner mic-corner--tl"></div>
                <div className="mic-corner mic-corner--tr"></div>
                <div className="item-name">{item.name}</div>
                <div className="item-price">{item.price}</div>
              </div>
              <div className="item-desc">{item.desc}</div>
              <div className="mic-bottom">
                <div className="mic-corner mic-corner--bl"></div>
                <div className="mic-corner mic-corner--br"></div>
              </div>
            </div>
          ))}
        </div>

        {/* BOOKING CTA */}
        <div className="menu-cta animated-delayed">
          <p>Ready to experience it in person?</p>
          <NavLink to="/booking">
            <button className="gold-cta-btn">
              Reserve Your Table
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>
          </NavLink>
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

export default Menu;
