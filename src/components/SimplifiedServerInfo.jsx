function SimplifiedServerInfo() {
  return (
    <div className="card text-center">
      <h2 style={{ color: 'var(--accent)', marginBottom: '2rem' }}>🐺 Wolfcraft Server</h2>
      <div className="grid grid-2" style={{ textAlign: 'left', marginBottom: '2rem' }}>
        <div>
          <h3 style={{ color: 'var(--accent)' }}>🎮 Server Details</h3>
          <p><strong>IP:</strong> play.wolfcraft.server</p>
          <p><strong>Version:</strong> 1.20.x</p>
          <p><strong>Mode:</strong> Survival & Creative</p>
          <p><strong>Status:</strong> <span style={{ color: 'var(--accent)' }}>Online 24/7</span></p>
        </div>
        <div>
          <h3 style={{ color: 'var(--accent)' }}>📊 Community</h3>
          <p><strong>Players Online:</strong> 42/100</p>
          <p><strong>Total Members:</strong> 1,337</p>
          <p><strong>Uptime:</strong> 99.8%</p>
          <p><strong>Founded:</strong> 2023</p>
        </div>
      </div>
      <div style={{ 
        marginTop: '2rem', 
        padding: '1.5rem', 
        background: 'rgba(255, 140, 66, 0.1)', 
        borderRadius: '8px',
        border: '1px solid rgba(255, 140, 66, 0.3)'
      }}>
        <p style={{ marginBottom: '1rem', fontSize: '1.1rem' }}>
          🚀 <strong>Premium Minecraft Server Experience</strong>
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button className="btn">🎯 Join Server</button>
          <button className="btn btn-secondary">📋 Copy IP</button>
        </div>
      </div>
    </div>
  );
}

export default SimplifiedServerInfo;