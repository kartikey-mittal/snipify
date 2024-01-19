import "./fonts/DMM.ttf"
import './App.css';
import { Routes,Route } from 'react-router-dom';
import TestPage from './TestPage';

import TeamWork from "./team/TeamWork";
import Aviral from "./team/Aviral";
import Benjamin from "./team/Benjamin";
import Lakshay from "./team/Lakshay";
import Kartikey from "./team/Kartikey";
import LoginPage from "./login/LoginPage";
import Home from "./learner/Home";
import Test1 from "./learner/Test1";
import SignUpPage from "./login/SignupPage";
import Profile from "./skilled/Profile";
import HomeSkilled from "./skilled/HomeSkilled";
import HomeConnect from "./learner/HomeConnect";
import HomeSkilledConnect from "./skilled/HomeSkilledConnect";
import Room from "./room/Room";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<TeamWork/>}   />
        <Route path="/test" element={<TestPage/>}   />
        <Route path="/login" element={<LoginPage/>}   />
        <Route path="/signup" element={<SignUpPage/>}   />
        <Route path="/skilled/profile/:id" element={<Profile/>}   />
        <Route path="/learner/home" element={<Home/>}   />
        <Route path="/learner/connect/:documentId" element={<HomeConnect/>}   />
        <Route path="/skilled/home" element={<HomeSkilled/>}   />
        <Route path="/skilled/connect/:docId" element={<HomeSkilledConnect/>}   />
        <Route path="/room/:roomId" element={<Room/>}   />
        <Route path="/t2" element={<Test1/>}   />
        <Route path="/test/Lakshay" element={<Lakshay />} />
        <Route path="/test/Benjamin" element={<Benjamin />} />
        <Route path="/test/Kartikey" element={<Kartikey />} />
        <Route path="/test/Aviral" element={<Aviral />} />



      </Routes>
    </div>
  );
}

export default App;
