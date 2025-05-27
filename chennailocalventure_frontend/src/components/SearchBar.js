import React from "react";

// PUBLIC_INTERFACE
/**
 * SearchBar stub component.
 * Renders a disabled search form styled as per the app theme. Props ready for actual search logic.
 * 
 * Props:
 * - value: string (optional)
 * - onChange: function (optional)
 * - onSubmit: function (optional)
 * - placeholder: string (optional)
 */
function SearchBar({
  value = "",
  onChange = () => {},
  onSubmit = (e) => e.preventDefault(),
  placeholder = "Search for experiences, hosts, or places...",
  ...rest
}) {
  return (
    <form
      className="card"
      style={{
        display: "flex",
        alignItems: "center",
        gap: 12,
        maxWidth: 480,
        margin: "0 auto",
        ...rest.style,
      }}
      onSubmit={onSubmit}
      aria-label="SearchBar form"
    >
      <input
        type="search"
        aria-label="Search experiences"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        style={{
          flex: 1,
          padding: "12px",
          border: "1px solid var(--border-color)",
          borderRadius: 6,
          fontSize: "1rem",
        }}
        disabled
      />
      <button className="btn btn-accent" type="submit" disabled>
        Search
      </button>
    </form>
  );
}

export default SearchBar;
