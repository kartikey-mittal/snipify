import React from 'react';
import LoginPage from './login/LoginPage';
import Navbar from './Navbar';
import Home from './learner/Home';
import CustomSwitch from './components/CustomSwitch';
const TestPage = () => {
  return (
    <>
     <Navbar/>
    <Home/>
    <CustomSwitch/>
      {/* <LoginPage/> */}
    </>
  );
};

export default TestPage;