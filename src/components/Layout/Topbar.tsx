export function Topbar() {
  return (
    <header className="topbar">
      <div className="topbar-title">Dashboard</div>
      <div className="topbar-right">
        <input
          className="topbar-search"
          placeholder="Search context…"
        />
      </div>
    </header>
  );
}
