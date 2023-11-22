import './App.css';
import React from 'react';
import { About } from './components/About';
import { Services } from './components/Services';
import Layout from './components/Layout';
import Team from './components/Team';
import Reviews from './components/Review';
import Landing from './components/Landing';
import Contact from './components/Contact';



const App = () =>{
  return (
    <div>
      <Layout>
      <Landing/>
      <Services/>
      <About/>
      <Reviews/>
      <Team/>
      <Contact/>
      </Layout>

    </div>
  );
}
export default App;
