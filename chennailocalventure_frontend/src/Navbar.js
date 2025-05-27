import React from "react";
import { Link, useLocation } from "react-router-dom";

// PUBLIC_INTERFACE
/**
 * Navbar component for ChennaiLocalVenture.
 * Supports navigation and highlights the active section.
 */
function Navbar() {
  const location = useLocation();
  const navLinks = [
    { name: "Home", to: "/" },
    { name: "Discover", to: "/discover" },
    { name: "Bookings", to: "/bookings" },
    { name: "Hosts", to: "/hosts" },
    { name: "Profile", to: "/profile" }
  ];

  return (
    <nav role="navigation" aria-label="Main navigation">
      <ul style={{ display: "flex", gap: 24, margin: 0, padding: 0, listStyle: "none" }}>
        {navLinks.map((link) => {
          const isActive =
            link.to === "/"
              ? location.pathname === "/"
              : location.pathname.startsWith(link.to);

          return (
            <li key={link.name}>
              <Link
                to={link.to}
                className={`btn btn-secondary${isActive ? " bg-primary text-on-primary" : ""}`}
                style={{
                  textDecoration: "none",
                  padding: "8px 20px",
                  fontWeight: isActive ? 600 : 500,
                  borderRadius: 6,
                  fontSize: "1rem",
                  border: "none",
                  margin: 0,
                  background: "none",
                  color: "inherit",
                  transition: "background 0.1s",
                  ...(isActive ? { pointerEvents: "none" } : {})
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

export default Navbar;
