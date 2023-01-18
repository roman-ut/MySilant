import React, {useState} from 'react';
import './App.css';
import MachineList from './components/MachineList'
import Header from "./components/Header";
import Footer from "./components/Footer";
import {Route, Routes} from "react-router-dom";
import ModelMachineList from "./components/ModelMachineList";
import Test from "./components/Test";
import {OpenAPI} from "./api";


function App() {

    const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('isLoggedIn'));
    const [token, setToken] = useState(localStorage.getItem('Token'));
    if (token != null)
        OpenAPI.HEADERS = {
            Authorization: `Token ${token}`
    }

    return (
      <div className="font-face-as">
          <div className="App">
              <Header
                  isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}
                  token={token} setToken={setToken}
              />
              <Routes>
                  <Route path="/" element={<MachineList/>}/>
                  <Route path="/modelmachine" element={<ModelMachineList
                      isLoggedIn={isLoggedIn} token={token}
                  />}/>
                  <Route path="/test" element={<Test/>}/>
              </Routes>
              <Footer/>
          </div>
      </div>
  );
}

export default App;

