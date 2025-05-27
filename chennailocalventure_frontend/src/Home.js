import React from 'react';

/**
 * PUBLIC_INTERFACE
 * Home page - feature layout for ChennaiLocalVenture.
 * 
 * - Features a search bar (placeholder)
 * - Curated category blocks (placeholders)
 * - Trending experience cards (placeholders)
 * Uses project card/button/container classes, ready for ExperienceCard/SearchBar drop-in.
 */
function Home() {
  return (
    <section>
      <div className="hero" style={{ paddingTop: 48, paddingBottom: 32 }}>
        <div className="subtitle">Chennai's Hyperlocal Experiences</div>
        <h1 className="title" style={{ fontSize: '2.5rem' }}>Discover, Book & Host Micro-Adventures</h1>
        <div className="description" style={{ maxWidth: 640, margin: "0 auto" }}>
          Find authentic local activities, workshops, and adventures handpicked for you. Go beyond the ordinary and explore Chennai through the eyes of locals!
        </div>
        {/* Placeholder for search bar - will swap for actual SearchBar subcomponent */}
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
      </div>

      {/* Curated Category Blocks (placeholders, can be made into links in future) */}
      <div style={{ display: "flex", justifyContent: "center", gap: 24, marginBottom: 32 }}>
        <div className="card" style={{ minWidth: 160, textAlign: "center", cursor: "pointer" }}>
          <div style={{ fontSize: "2.2rem", marginBottom: 8 }}>🍲</div>
          <span style={{ fontWeight: 600 }}>Food & Culture</span>
        </div>
        <div className="card" style={{ minWidth: 160, textAlign: "center", cursor: "pointer" }}>
          <div style={{ fontSize: "2.2rem", marginBottom: 8 }}>🎨</div>
          <span style={{ fontWeight: 600 }}>Art & Workshops</span>
        </div>
        <div className="card" style={{ minWidth: 160, textAlign: "center", cursor: "pointer" }}>
          <div style={{ fontSize: "2.2rem", marginBottom: 8 }}>🥾</div>
          <span style={{ fontWeight: 600 }}>Nature & Outdoors</span>
        </div>
      </div>

      {/* Trending Experiences: will be replaced by list of ExperienceCard subcomponents */}
      <section>
        <h3 className="subtitle" style={{ marginBottom: 20 }}>Trending This Week</h3>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px,1fr))", gap: 24 }}>
          <div className="card" style={{ display: "flex", flexDirection: "column", alignItems: "start" }}>
            <div style={{ fontSize: "2rem", marginBottom: 8 }}>☕</div>
            <div style={{ fontWeight: 600, fontSize: "1.15rem", marginBottom: 6 }}>Traditional Filter Coffee Walk</div>
            <div style={{ color: "var(--text-secondary)", fontSize: "1rem", marginBottom: 12 }}>Taste Chennai's finest filter coffee, learn brewing secrets with a local barista.</div>
            <button className="btn btn-accent" disabled>Book Now</button>
          </div>
          <div className="card" style={{ display: "flex", flexDirection: "column", alignItems: "start" }}>
            <div style={{ fontSize: "2rem", marginBottom: 8 }}>🖼️</div>
            <div style={{ fontWeight: 600, fontSize: "1.15rem", marginBottom: 6 }}>Street Art Trail</div>
            <div style={{ color: "var(--text-secondary)", fontSize: "1rem", marginBottom: 12 }}>Uncover hidden murals and speak with city artists.</div>
            <button className="btn btn-accent" disabled>Book Now</button>
          </div>
          <div className="card" style={{ display: "flex", flexDirection: "column", alignItems: "start" }}>
            <div style={{ fontSize: "2rem", marginBottom: 8 }}>🛶</div>
            <div style={{ fontWeight: 600, fontSize: "1.15rem", marginBottom: 6 }}>Sunrise Kayak at Kovalam</div>
            <div style={{ color: "var(--text-secondary)", fontSize: "1rem", marginBottom: 12 }}>Paddle out at dawn with safety gear. Beginners welcome!</div>
            <button className="btn btn-accent" disabled>Book Now</button>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Home;
