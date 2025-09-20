function Header() {
  return (
    <header className="text-center mb-2">
      <h1>🐺 Wolfcraft</h1>
      <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)' }}>
        Premium Minecraft Server Experience
      </p>
      <div className="status online">
        <span className="status-dot"></span>
        Server Online - 24/7
      </div>
    </header>
  );
}

export default Header;