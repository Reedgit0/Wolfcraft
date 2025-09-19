import Header from './components/Header';
import ServerInfo from './components/ServerInfo';
import Features from './components/Features';
import Community from './components/Community';
import Footer from './components/Footer';

function App() {
  return (
    <div className="container" style={{ minHeight: '100vh', paddingTop: '2rem', paddingBottom: '2rem' }}>
      <Header />
      <ServerInfo />
      <Features />
      <Community />
      <Footer />
    </div>
  );
}

export default App;
