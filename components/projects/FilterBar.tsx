"use client";

interface FilterBarProps {
  activeFilter: string;
  setActiveFilter: React.Dispatch<React.SetStateAction<string>>;
}

const filters = [
  "ALL",
  "RESIDENCES",
  "HOTELS",
  "RESORTS",
];

export default function FilterBar({
  activeFilter,
  setActiveFilter,
}: FilterBarProps) {
  return (
    <div
      style={{
        width: "100%",
        height: "64px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#242323",
        borderTop: "1px solid rgba(255,255,255,0.14)",
        borderBottom: "1px solid rgba(255,255,255,0.14)",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "120px",
          whiteSpace: "nowrap",
        }}
      >
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => setActiveFilter(filter)}
            style={{
              position: "relative",
              flexShrink: 0,
              border: "none",
              outline: "none",
              background: "transparent",
              padding: "24px 0",
              color:
                activeFilter === filter
                  ? "#fff"
                  : "rgba(255,255,255,0.55)",
              fontFamily: "inherit",
              fontSize: "13px",
              fontWeight: 400,
              lineHeight: "1",
              letterSpacing: "0.12em",
              whiteSpace: "nowrap",
              cursor: "pointer",
            }}
          >
            {filter}

            {/* Active underline */}
            {activeFilter === filter && (
              <span
                style={{
                  position: "absolute",
                  left: 0,
                  right: 0,
                  bottom: "10px",
                  height: "1px",
                  background: "#fff",
                }}
              />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}