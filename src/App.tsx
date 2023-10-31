import './App.css';
import Form from './component.tsx/Form';
import Cv from './component.tsx/cv';
import {Routes , Route,NavLink} from 'react-router-dom'
function App() {
  return (
    <div >
      <nav>
       <NavLink to='/'> Formulaire</NavLink>
       <NavLink to='/cv'>CV</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Form/>} />
        <Route path="/cv" element={< Cv/>} />
      </Routes>
    </div>
  );
}
export default App;

