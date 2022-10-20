import React from 'react';
import { useState, useEffect } from "react";
import './CoverPage.css';

const servicesLoop = [
    "Hairdressers",
    "Makeup Artists",
    "Eyebrow Tech",
    "Eyelash Tech",
    "Massages",
    "Barbers",
    "Cleaners"
  ];

function CoverPage() {
    const [index, setIndex] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
          setIndex((prevIndex) => {
            return prevIndex + 1 < servicesLoop.length ? prevIndex + 1 : 0;
          });
        }, 2000);
        return () => clearInterval(interval);
      });

    return (
        <div className='coverpage-container'>
            <div className='small-container'>
                <div class="text-container">
                    <h1 id="loop">{servicesLoop[index]}</h1>
                    <h2 className='subtext'>wherever, whenever.</h2>
                </div>
                <div class="search-bar">
                    <input class="inputSearchCP" type="text" placeholder="Search..."></input>
                    <a class="search-btn" href="http://localhost:3000/"> </a>
                </div>
            </div>
        </div>
    )
}

export default CoverPage