import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import AlbumsSection from './components/AlbumsSection/AlbumsSection';
import SongsTab from "./components/songsTab/SongsTab";
import Footer from "./components/Footer/Footer";
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <main>
        <AlbumsSection />
        <SongsTab/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
