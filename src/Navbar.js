import React from 'react';
import logo from './food-word-sign.jpg';
import './App.css';
import nm from './hulled-coconut.jpg';

const Navbar =()=> {

    return (
        <header className="Appp-header">
            <nav className="navbar">
                <div className="navbav-container">
                    <ul className="navbar"> 
                    <img src={logo}  className="App-logo" alt="logo"></img>
                         <li><a href="#"> ABOUT US</a></li>
                         <li><a href="#"> FAQS </a></li>
                         <li><a href="#"> CORPORATE </a></li>
                         <li><a href=""> QUICK FRUITS </a></li>
                    </ul>
                </div>
                <div className='bg-img'>
                <img src={nm}  className="gault" alt="logo"></img>
        </div>
            
            </nav>
        </header>
        
    );
}

export default Navbar;