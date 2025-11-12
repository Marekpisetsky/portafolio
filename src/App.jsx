import Navbar from './components/Navbar.jsx';
import Hero from './sections/Hero.jsx';
import Strategy from './sections/Strategy.jsx';
import Technology from './sections/Technology.jsx';
import Experience from './sections/Experience.jsx';
import Languages from './sections/Languages.jsx';
import Contact from './sections/Contact.jsx';

const App = () => (
  <div className="font-['Inter',sans-serif]">
    <Navbar />
    <main className="overflow-hidden">
      <Hero />
      <Strategy />
      <Technology />
      <Experience />
      <Languages />
      <Contact />
    </main>
  </div>
);

export default App;
