import './App.css';
import Header from './Home.tsx/Header'; 
import ContactInfo from './Home.tsx/contact'; 
import Skills1 from './Home.tsx/skills1'; 
import Skills2 from './Home.tsx/skills2';  
import Skills3 from './Home.tsx/skills3';  
import Skills4 from './Home.tsx/skills4';  
import Skills5 from './Home.tsx/skills5';  
import Skills6 from './Home.tsx/skills6';  
import Footer from './Home.tsx/Footer'; 
function App() {
  return (
    <div className="App">
      <Header /> {/* Utilisation du composant Header */}
      <hr />
      <ContactInfo /> {/* Utilisation du composant ContactInfo */}
      <hr />
      <Skills1 /> {/* Utilisation du composant Skills */}
      <hr />
      <Skills2 /> {/* Utilisation du composant Skills */}
      <hr />
      <Skills3 /> {/* Utilisation du composant Skills */}
      <hr />
      <Skills4 /> {/* Utilisation du composant Skills */}
      <hr />
      <Skills5 /> {/* Utilisation du composant Skills */}
      <hr />
      <Skills6 /> {/* Utilisation du composant Skills */}
      <hr />
      <Footer /> {/* Utilisation du composant Footer */}
    </div>
  );
}

export default App;
