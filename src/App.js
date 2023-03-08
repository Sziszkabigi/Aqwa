import { Fragment } from 'react';
import Header from './components/Layout/Header';
import Hero from './components/Layout/Hero';
import Content from './components/Layout/Content';
import Footer from './components/Layout/Footer';
import './components/Layout/Navbar.module.css';

function App() {
  return (
    <Fragment>
      <Header/>
      <Hero/>
      <Content/>
      <Footer/>
    </Fragment>
  );
}

export default App;
