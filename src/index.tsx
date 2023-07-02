import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

import './styles/reset.css';
import './styles/main.css';

import Header from './components/Header';
import Footer from './components/Footer';
import { MainBanner, Partner, Functions, Management, Example, Service, Guide, BusinessBanner } from './components/sections/Sections'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <div className="container__page">
      <Header />

      <MainBanner />
      <Partner />
      <Functions />
      <Management />
      <Example />
      <Service />
      <Guide />
      <BusinessBanner />

      <Footer />
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
