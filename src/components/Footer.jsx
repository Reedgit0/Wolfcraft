function Footer() {
  return (
    <footer style={{ 
      marginTop: '3rem', 
      padding: '2rem 0', 
      borderTop: '1px solid rgba(255, 255, 255, 0.1)',
      textAlign: 'center'
    }}>
      <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>
        © 2024 Wolfcraft Minecraft Server. All rights reserved.
      </p>
      <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
        Not affiliated with Mojang Studios or Microsoft. Minecraft is a trademark of Mojang Studios.
      </p>
      <div style={{ marginTop: '1rem' }}>
        <span style={{ color: 'var(--accent)' }}>Made with ❤️ for our amazing community</span>
      </div>
    </footer>
  );
}

export default Footer;