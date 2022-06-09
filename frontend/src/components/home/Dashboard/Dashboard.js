import React from 'react';
import './Dashboard.css';
import CardItem from './CardItem';
import hairdresser from "../../../assets/home/hairdresser.png";
import makeup from "../../../assets/home/makeup.png";
import eyebrowTech from "../../../assets/home/eyebrowTech.png";
import eyelashTech from "../../../assets/home/eyelashTech.png";
import massage from "../../../assets/home/massage.png";
import barber from "../../../assets/home/barber.png";
import cleaner from "../../../assets/home/cleaner.png";
import seeMore from "../../../assets/home/seeMore.png";

function Dashboard() {

  return (
      <div className='all_container'>
        <h1 className='hdg'>Services offered at 
            <font color="#d46f5e"> a</font>
            <font color="#0b5394">morr</font></h1>
        <div className='cards_container'>
            <ul className='cards_items'>
                <CardItem title='Hairdresser' img={hairdresser} redirection="http://localhost:3000/"></CardItem>
                <CardItem title='Makeup' img={makeup} redirection="http://google.com"></CardItem>
                <CardItem title='Eyebrow Tech' img={eyebrowTech} redirection="http://localhost:3000/"></CardItem>
                <CardItem title='Eyelash Tech' img={eyelashTech} redirection="http://localhost:3000/"></CardItem>
            </ul>
            <ul className='cards_items'>
                <CardItem title='Massage' img={massage} redirection="http://localhost:3000/"></CardItem>
                <CardItem title='Barber' img={barber} redirection="http://localhost:3000/"></CardItem>
                <CardItem title='Cleaner' img={cleaner} redirection="http://localhost:3000/"></CardItem>
                <CardItem title='See More' img={seeMore} redirection="http://localhost:3000/"></CardItem>
            </ul>
        </div>
      </div>
  )
}

export default Dashboard