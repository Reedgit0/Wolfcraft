function ServerInfo() {
  return (
    <div className="card text-center">
      <h2>🎮 Server Information</h2>
      <div className="grid grid-2" style={{ textAlign: 'left' }}>
        <div>
          <h3>Server Details</h3>
          <p><strong>IP:</strong> play.wolfcraft.server</p>
          <p><strong>Version:</strong> 1.20.x</p>
          <p><strong>Mode:</strong> Survival & Creative</p>
          <p><strong>Difficulty:</strong> Normal</p>
        </div>
        <div>
          <h3>Community Stats</h3>
          <p><strong>Players Online:</strong> 42/100</p>
          <p><strong>Total Members:</strong> 1,337</p>
          <p><strong>Uptime:</strong> 99.8%</p>
          <p><strong>Founded:</strong> 2023</p>
        </div>
      </div>
      <div style={{ marginTop: '1.5rem' }}>
        <button className="btn">🎯 Join Server</button>
        <button className="btn btn-secondary">📋 Copy IP</button>
      </div>
    </div>
  );
}

export default ServerInfo;