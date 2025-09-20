function Community() {
  return (
    <div className="card text-center">
      <h2>🌟 Join Our Community</h2>
      <p style={{ fontSize: '1.1rem', marginBottom: '2rem' }}>
        Connect with other players, get support, and stay updated with the latest news!
      </p>
      
      <div className="grid grid-2">
        <div>
          <h3>💬 Discord Server</h3>
          <p>Join our Discord community for real-time chat, events, and support.</p>
          <button className="btn">Join Discord</button>
        </div>
        <div>
          <h3>📖 Server Rules</h3>
          <p>Read our community guidelines to ensure everyone has a great time.</p>
          <button className="btn btn-secondary">View Rules</button>
        </div>
      </div>
      
      <div style={{ marginTop: '2rem', padding: '1rem', background: 'rgba(255, 255, 255, 0.05)', borderRadius: '8px' }}>
        <h3>🎉 Current Events</h3>
        <p><strong>Building Competition:</strong> Submit your best medieval castle by December 31st!</p>
        <p><strong>Double XP Weekend:</strong> Earn twice the experience points all weekend long!</p>
      </div>
    </div>
  );
}

export default Community;