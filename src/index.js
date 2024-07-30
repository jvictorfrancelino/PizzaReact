import React from 'react';
import './index.css';
import { createRoot } from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Modal from 'react-modal'; // Importe o Modal
import HomePage from './pages/HomePage';
import Nav from './components/Nav/Nav';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";


export default function App(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Nav/>}>
            <Route index element={<HomePage />} />
            <Route path="*" element={<HomePage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
Modal.setAppElement('#root');

const root = createRoot(document.getElementById('root'));
root.render(
    <App />
);

reportWebVitals();
