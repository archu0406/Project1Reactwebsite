import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Components/Header'
import Banner from './Components/Banner'
import Card from './Components/Card'
import Footer from './Components/Footer'
import './css/Banner.css'
import './css/Header.css'
import './css/Footer.css'
import './css/Card.css'

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Banner />
    <Card />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);
