function Features() {
  const features = [
    {
      icon: '🏰',
      title: 'Custom Builds',
      description: 'Amazing custom builds and structures created by our talented community.'
    },
    {
      icon: '⚔️',
      title: 'PvP Arena',
      description: 'Competitive PvP battles in our custom-designed arena with tournaments.'
    },
    {
      icon: '🛡️',
      title: 'Land Protection',
      description: 'Secure your builds with our advanced land claiming and protection system.'
    },
    {
      icon: '💎',
      title: 'Economy System',
      description: 'Trade, buy, and sell items with other players in our balanced economy.'
    },
    {
      icon: '🎁',
      title: 'Daily Rewards',
      description: 'Login daily to receive exclusive rewards and special items.'
    },
    {
      icon: '👥',
      title: 'Active Community',
      description: 'Join our friendly community of builders, explorers, and adventurers.'
    }
  ];

  return (
    <div className="mb-2">
      <h2 className="text-center" style={{ marginBottom: '2rem' }}>✨ Server Features</h2>
      <div className="grid grid-3">
        {features.map((feature, index) => (
          <div key={index} className="card text-center">
            <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
              {feature.icon}
            </div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Features;