import * as mui from '@mui/material';
import * as React from 'react';
import './styles/App.css';
import Navbar from "./components/Navbar";
import CentralPlayer from "./components/central-player";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <div className="main-layout">
        <CentralPlayer />
      </div>
    </React.Fragment>
    
  );
}

export default App;
