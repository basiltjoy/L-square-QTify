import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import AlbumsSection from './components/AlbumsSection/AlbumsSection';
import SongsTab from "./components/songsTab/SongsTab";
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <main>
        <AlbumsSection />
        <SongsTab/>
      </main>
    </div>
  );
}

export default App;
