import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import Header from './components/Header';
import './styles/reset.css';
import './styles/main.css';
import MainBanner from './components/sections/MainBanner';
import Partner from './components/sections/Partner';
import Footer from './components/Footer';
import Functions from './components/sections/Functions';
import Management from './components/sections/Management';

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
      <Footer />
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
