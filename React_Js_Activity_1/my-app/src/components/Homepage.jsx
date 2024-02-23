// import './src/App.css';
import Header from './Header';
import Footer from './Footer';
import AboutPage from './AboutPage';
import ContactPage from './ContactPage';
import { useEffect, useState } from 'react';
import DataFormulate from './dataFormulation';
import './Homepage.css';

export default function HomePage(){
  let Component = DataFormulate;
  switch (window.location.pathname){

    case "/about":
      Component = AboutPage
      break
    case "/login":
      Component = ContactPage
      break
   
  }


  return (
    <>
        <Header/>
        <Component/>  
        
        <div class = 'space'></div>
       
        <Footer/>
        </>
      
        );
}