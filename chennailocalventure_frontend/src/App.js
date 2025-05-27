import React from 'react';
import './App.css';
// Add React Router DOM for route-based navigation
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";

// PUBLIC_INTERFACE
/**
 * Main App component for ChennaiLocalVenture.
 * Sets up routing, navbar, routed content area, and footer.
 */
function App() {
  return (
    <Router>
      <div className="app">
        {/* Global Navigation Bar */}
        <nav className="navbar">
          <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div className="logo">
              <span className="logo-symbol" role="img" aria-label="Explore">*</span>
              ChennaiLocalVenture
            </div>
            <NavBar />
          </div>
        </nav>
        {/* Routed Page Content Area */}
        <main style={{ flex: 1, paddingTop: 80 }}>
          <div className="container">
            <MainRoutes />
          </div>
        </main>
        {/* Global Footer */}
        <footer style={{
          background: 'var(--background-card)',
          borderTop: '1px solid var(--border-color)',
          padding: '24px 0',
          marginTop: 'auto',
          fontSize: '1rem',
          color: 'var(--text-secondary)',
          textAlign: 'center',
        }}>
          © {new Date().getFullYear()} ChennaiLocalVenture &mdash; Discover Your City, Authentically!
        </footer>
      </div>
    </Router>
  );
}

/**
 * Navigation bar component with links, using react-router-dom's Link and route awareness.
 */
function NavBar() {
  const location = useLocation();
  const navLinks = [
    { name: 'Home', to: '/' },
    { name: 'Discover', to: '/discover' },
    { name: 'Bookings', to: '/bookings' },
    { name: 'Hosts', to: '/hosts' },
    { name: 'Profile', to: '/profile' }
  ];
  return (
    <nav role="navigation" aria-label="Main navigation">
      <ul style={{ display: 'flex', gap: 24, margin: 0, padding: 0, listStyle: 'none' }}>
        {navLinks.map(link => {
          const isActive =
            link.to === '/'
              ? location.pathname === '/'
              : location.pathname.startsWith(link.to);
          return (
            <li key={link.name}>
              <Link
                to={link.to}
                className={`btn btn-secondary${isActive ? ' bg-primary text-on-primary' : ''}`}
                style={{
                  textDecoration: 'none',
                  padding: '8px 20px',
                  fontWeight: isActive ? 600 : 500,
                  borderRadius: 6,
                  fontSize: '1rem',
                  border: 'none',
                  margin: 0,
                  background: 'none',
                  color: 'inherit',
                  transition: 'background 0.1s',
                  ...(isActive ? {pointerEvents: 'none'} : {}) // visually clear highlight for active
                }}
              >
                {link.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

/**
 * React Router routes for all main app sections.
 */
function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/discover" element={<DiscoverPage />} />
      <Route path="/bookings" element={<BookingsPage />} />
      <Route path="/hosts" element={<HostsPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      {/* fallback, may add 404 later */}
      <Route path="*" element={<HomePage />} />
    </Routes>
  );
}

// ---------- Page Stubs ----------

// PUBLIC_INTERFACE
function HomePage() {
  // Feature blocks: Search Bar, Categories, Trending Experiences
  return (
    <section>
      <div className="hero" style={{ paddingTop: 48, paddingBottom: 32 }}>
        <div className="subtitle">Chennai's Hyperlocal Experiences</div>
        <h1 className="title" style={{ fontSize: '2.5rem' }}>Discover, Book & Host Micro-Adventures</h1>
        <div className="description" style={{ maxWidth: 640 }}>
          Find authentic local activities, workshops, and adventures handpicked for you. Go beyond the ordinary and explore Chennai through the eyes of locals!
        </div>
        <SearchBar />
      </div>
      <FeatureCategories />
      <TrendingExperiences />
    </section>
  );
}

// PUBLIC_INTERFACE
function DiscoverPage() {
  return (
    <section>
      <h2 className="title" style={{ fontSize: '2rem', marginTop: 0 }}>Discover Experiences</h2>
      <div style={{ margin: "24px 0" }}>
        <SearchBar />
      </div>
      {/* Placeholder: results or more UI goes here */}
      <div className="description">Browse curated experiences and adventures based on your interests. (Coming soon...)</div>
    </section>
  );
}

// PUBLIC_INTERFACE
function BookingsPage() {
  return (
    <section>
      <h2 className="title" style={{ fontSize: '2rem', marginTop: 0 }}>Your Bookings</h2>
      <div className="description" style={{ margin: "16px 0" }}>
        Manage your upcoming and past adventure bookings here.
      </div>
      <div className="card text-secondary">Bookings feature under construction.</div>
    </section>
  );
}

// PUBLIC_INTERFACE
function HostsPage() {
  return (
    <section>
      <h2 className="title" style={{ fontSize: '2rem', marginTop: 0 }}>Hosts</h2>
      <div className="description" style={{ margin: "16px 0" }}>
        Are you a local expert? List your experience or manage bookings here.
      </div>
      <div className="card text-secondary">Host tools and profile coming soon.</div>
    </section>
  );
}

// PUBLIC_INTERFACE
function ProfilePage() {
  return (
    <section>
      <h2 className="title" style={{ fontSize: '2rem', marginTop: 0 }}>My Profile</h2>
      <div className="card text-secondary">Profile dashboard for users and hosts. (In progress...)</div>
    </section>
  );
}

// ---------- Feature Components ----------

// PUBLIC_INTERFACE
function SearchBar() {
  return (
    <form className="card" style={{ display: "flex", alignItems: "center", gap: 12, maxWidth: 480, margin: "0 auto" }}>
      <input
        type="search"
        aria-label="Search experiences"
        placeholder="Search for experiences, hosts, or places..."
        style={{
          flex: 1,
          padding: "12px",
          border: "1px solid var(--border-color)",
          borderRadius: 6,
          fontSize: "1rem"
        }}
        disabled
      />
      <button className="btn btn-accent" type="submit" disabled>
        Search
      </button>
    </form>
  );
}

// PUBLIC_INTERFACE
function FeatureCategories() {
  // Show three example categories
  const cats = [
    { icon: "🍲", name: "Food & Culture" },
    { icon: "🎨", name: "Art & Workshops" },
    { icon: "🥾", name: "Nature & Outdoors" }
  ];
  return (
    <div style={{ display: "flex", justifyContent: "center", gap: 24, marginBottom: 32 }}>
      {cats.map(cat => (
        <div className="card" key={cat.name} style={{ minWidth: 160, textAlign: "center" }}>
          <div style={{ fontSize: "2.2rem", marginBottom: 8 }}>{cat.icon}</div>
          <span style={{ fontWeight: 600 }}>{cat.name}</span>
        </div>
      ))}
    </div>
  );
}

// PUBLIC_INTERFACE
function TrendingExperiences() {
  // Show example "experience" cards
  const items = [
    { title: "Traditional Filter Coffee Walk", desc: "Taste Chennai's finest filter coffee, learn brewing secrets with a local barista.", img: "☕" },
    { title: "Street Art Trail", desc: "Uncover hidden murals and speak with city artists.", img: "🖼️" },
    { title: "Sunrise Kayak at Kovalam", desc: "Paddle out at dawn with safety gear. Beginners welcome!", img: "🛶" }
  ];
  return (
    <section>
      <h3 className="subtitle" style={{ marginBottom: 20 }}>Trending This Week</h3>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px,1fr))", gap: 24 }}>
        {items.map(item => (
          <div className="card" key={item.title} style={{ display: "flex", flexDirection: "column", alignItems: "start" }}>
            <div style={{ fontSize: "2rem", marginBottom: 8 }}>{item.img}</div>
            <div style={{ fontWeight: 600, fontSize: "1.15rem", marginBottom: 6 }}>{item.title}</div>
            <div style={{ color: "var(--text-secondary)", fontSize: "1rem", marginBottom: 12 }}>{item.desc}</div>
            <button className="btn btn-accent" disabled>Book Now</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default App;
