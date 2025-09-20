import Header from './components/Header';
import SimplifiedServerInfo from './components/SimplifiedServerInfo';

function App() {
  return (
    <div className="container" style={{ minHeight: '100vh', paddingTop: '2rem', paddingBottom: '2rem' }}>
      <Header />
      <SimplifiedServerInfo />
    </div>
  );
}

export default App;
