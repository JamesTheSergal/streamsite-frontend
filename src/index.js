import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';
import Test from './pages/Test';
import FancyPlayer from './components/FancyPlayer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Register from './pages/register';

export default function Router(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" />
          <Route index element={<App />} />
          <Route path="test" element={<FancyPlayer />}/>
          <Route path="register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);


