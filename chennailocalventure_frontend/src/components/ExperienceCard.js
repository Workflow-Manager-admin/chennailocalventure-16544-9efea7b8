import React from "react";

// PUBLIC_INTERFACE
/**
 * ExperienceCard stub component.
 * Displays a placeholder for experience card structure, ready for props-based rendering.
 * 
 * Props:
 * - title: string
 * - description: string
 * - image: string (emoji or image URL)
 * - ...any additional props for future experience features
 */
function ExperienceCard({ title = "Experience Title", description = "Short description for the experience.", image = "🌟", ...rest }) {
  return (
    <div className="card" style={{ display: "flex", flexDirection: "column", alignItems: "start", ...rest.style }}>
      <div style={{ fontSize: "2rem", marginBottom: 8 }}>{image}</div>
      <div style={{ fontWeight: 600, fontSize: "1.15rem", marginBottom: 6 }}>
        {title}
      </div>
      <div style={{ color: "var(--text-secondary)", fontSize: "1rem", marginBottom: 12 }}>
        {description}
      </div>
      <button className="btn btn-accent" disabled>
        Book Now
      </button>
    </div>
  );
}

export default ExperienceCard;
