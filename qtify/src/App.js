import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import AlbumsSection from './components/AlbumsSection/AlbumsSection';
import SongsSection from './components/SongsSection/SongsSection';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <main>
        <AlbumsSection />
        <SongsSection />
      </main>
    </div>
  );
}

export default App;
