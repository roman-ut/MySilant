import React, {useState} from 'react';
import '../styles/App.css';
import MachineListPublic from './MachineListPublic'
import Header from "./Header";
import Footer from "./Footer";
import {Route, Routes} from "react-router-dom";
import Test from "./Test";
import {OpenAPI} from "../api";
import NavigationBar from "./NavigationBar";
import ModelMachineList from "./ReferenceBook/ModelMachineList";
import ModelDriveAxleList from "./ReferenceBook/ModelDriveAxleList";
import ModelEngineList from "./ReferenceBook/ModelEngineList";
import ModelSteeringAxleList from "./ReferenceBook/ModelSteeringAxleList";
import ModelTransmissionList from "./ReferenceBook/ModelTransmissionList";
import RecoveryMethodList from "./ReferenceBook/RecoveryMethodList";
import TypeMaintenanceList from "./ReferenceBook/TypeMaintenanceList";
import TypeFailureList from "./ReferenceBook/TypeFailureList";
import ServiceCompanyList from "./ReferenceBook/ServiceCompanyList";
import MachineListPrivate from "./MachineListPrivate";
import MaintenanceList from "./MaintenanceList";
import ClaimList from "./ClaimList";
import MachineItem from "./MachineItem";


function App() {

    const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('isLoggedIn'));
    const [token, setToken] = useState(localStorage.getItem('Token'));
    if (token != null) {
        OpenAPI.HEADERS = {
            Authorization: `Token ${token}`
        }
    }
    return (
      <div className="font-face-as">
          <div className="App">
              <Header
                  isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}
                  token={token} setToken={setToken}
              />
              {isLoggedIn !== 'true' &&
                  <MachineListPublic/>
              }
              {isLoggedIn === 'true' &&
                  <>
                      <NavigationBar/>
                      <Routes>
                          <Route path="/" element={<MachineListPrivate isLoggedIn={isLoggedIn}/>}/>
                          <Route path="/machineitem" element={<MachineItem />}/>
                          <Route path="/maintenance" element={<MaintenanceList isLoggedIn={isLoggedIn}/>}/>
                          <Route path="/claim" element={<ClaimList isLoggedIn={isLoggedIn}/>}/>
                          <Route path="/modelmachine" element={<ModelMachineList isLoggedIn={isLoggedIn}
                                                                                 token={token}/>}/>
                          <Route path="/modeldriveaxle" element={<ModelDriveAxleList isLoggedIn={isLoggedIn}
                                                                                     token={token}/>}/>
                          <Route path="/modelengine" element={<ModelEngineList isLoggedIn={isLoggedIn}
                                                                               token={token}/>}/>
                          <Route path="/modelsteeringaxle" element={<ModelSteeringAxleList isLoggedIn={isLoggedIn}
                                                                                           token={token}/>}/>
                          <Route path="/modeltransmission" element={<ModelTransmissionList isLoggedIn={isLoggedIn}
                                                                                           token={token}/>}/>
                          <Route path="/recoverymethod" element={<RecoveryMethodList isLoggedIn={isLoggedIn}
                                                                                     token={token}/>}/>
                          <Route path="/typemaintenance" element={<TypeMaintenanceList isLoggedIn={isLoggedIn}
                                                                                       token={token}/>}/>
                          <Route path="/typefailure" element={<TypeFailureList isLoggedIn={isLoggedIn}
                                                                               token={token}/>}/>
                          <Route path="/servicecompany" element={<ServiceCompanyList isLoggedIn={isLoggedIn}
                                                                                     token={token}/>}/>

                          <Route path="/test" element={<Test/>}/>
                      </Routes>
                  </>
              }
              <Footer/>
          </div>
      </div>
  );
}

export default App;

