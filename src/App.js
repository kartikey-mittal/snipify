import "./fonts/DMM.ttf"
import './App.css';
import { Routes,Route } from 'react-router-dom';
import TestPage from './TestPage';
import TeamWork from "./TeamWork";
import Aviral from "./team/Aviral";
import Benjamin from "./team/Benjamin";
import Lakshay from "./team/Lakshay";
import Kartikey from "./team/Kartikey";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<TeamWork/>}   />
        <Route path="/test" element={<TestPage/>}   />
        

        <Route path="/test/Lakshay" element={<Lakshay />} />
        <Route path="/test/Benjamin" element={<Benjamin />} />
        <Route path="/test/Kartikey" element={<Kartikey />} />
        <Route path="/test/Aviral" element={<Aviral />} />
      </Routes>
    </div>
  );
}

export default App;
