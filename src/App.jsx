import Header from './components/Header';
import SimplifiedServerInfo from './components/SimplifiedServerInfo';
import Footer from './components/Footer';

function App() {
  return (
    <div className="container" style={{ minHeight: '100vh', paddingTop: '2rem', paddingBottom: '2rem' }}>
      <Header />
      <SimplifiedServerInfo />
      <Footer />
    </div>
  );
}

export default App;
