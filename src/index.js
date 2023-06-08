import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Dashboard from './pages/Dashboard';
import Layout from './pages/Layout';
import Login from './pages/login';
import NoPage from './pages/NoPage';
import SelectCase from './pages/SelectCase';
import './styles/index.css';
import CaseForm from './components/CaseForm';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<App />} />
        <Route path="*" element={<NoPage />} />
        <Route path="selectcase" element={<SelectCase />} />
        <Route path="dashboard/:user" element={<Dashboard />} />
        <Route path="/form" element={<CaseForm />} />

        <Route path="login" element={<Login />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
