import { Fragment } from 'react';
import Header from './components/Layout/Header';
import Hero from './components/Layout/Hero';
import Content from './components/Layout/Content';
import Footer from './components/Layout/Footer';
import './components/Layout/Navbar.module.css';
import Customers from './components/Content/Customers';

function App() {
  return (
    <Fragment>
      <Header/>
      <Hero/>
      <Content/>
      <Customers/>
      <Footer/>
    </Fragment>
  );
}

export default App;
