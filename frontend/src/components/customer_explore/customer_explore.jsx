import React , { useEffect, useState } from "react";
import InteractiveCard from "./interactive_sp_cards/interactive_sp_cards";
import './customer_explore_styles.css'
import { BrowserRouter as Router } from 'react-router-dom'

const CustomerExplore = () => {
    //const SP = {name: "Lorem Ipsum Salons", rating: 4.0, num_rating: 50, services: 75, fee: 4.95};
    const [allSp, setAllSp] = React.useState([]);
    const [searchValue, setSearchValue] = React.useState("");
    const [searchTerm, setSearchTerm ] = React.useState("");

    const [noFilter, setNoFilter] = React.useState(0);

    const [hairdresserFilter, setHairdresserFilter] = React.useState(false);
    const [barberFilter, setBarberFilter] = React.useState(false);
    const [cleanerFilter, setCleanerFilter] = React.useState(false);
    const [massageFilter, setMassageFilter] = React.useState(false);
    const [eyebrowFilter, setEyebrowFilter] = React.useState(false);
    const [eyelashFilter, setEyelashFilter] = React.useState(false);

    // this useEffect runs upon render
    useEffect(() => {

        // this is where we should send the fetch request, sample code below
        //fetch("http://localhost:5000/whatever", {credentials: 'include'}).then(response =>
        //  response.json().then(data => {
        //    setSomething(data);
        //  })
        //);

        // sample data below
        setAllSp([
            {
                id: 1,
                name: "Hairdresser A",
                avg_rating: 3.5,
                num_ratings: 2,
                tos: ['Hairdresser'],
                services: "Hairdresser"
            },
            {
                id: 2,
                name: "Hairdresser B",
                avg_rating: 4.0,
                num_ratings: 9,
                tos: ['Hairdresser'],
                services: "Hairdresser"
            },
            {
                id: 3,
                name: "Hair Master C",
                avg_rating: 4.5,
                num_ratings: 12,
                tos: ['Hairdresser', 'Barber', 'Cleaner'],
                services: "Hairdresser, Barber and more"
            },
            {
                id: 4,
                name: "Barber A",
                avg_rating: 4.2,
                num_ratings: 6,
                tos: ['Barber'],
                services: "Barber"

            },
            {
                id: 5,
                name: "Barber B",
                avg_rating: 3.6,
                num_ratings: 2,
                tos: ['Barber'],
                services: "Barber"
            },
            {
                id: 6,
                name: "Cleaner A",
                avg_rating: 4.0,
                num_ratings: 8,
                tos: ['Cleaner'],
                services: "Cleaner"
            },
            {
                id: 7,
                name: "Cleaner B",
                avg_rating: 4.0,
                num_ratings: 1,
                tos: ['Cleaner'],
                services: "Cleaner"
            },
            {
                id: 8,
                name: "Cleaner C",
                avg_rating: 3.5,
                num_ratings: 6,
                tos: ['Cleaner'],
                services: "Cleaner"
            },
            {
                id: 9,
                name: "Massage X",
                avg_rating: 5.0,
                num_ratings: 1,
                tos: ['Massage'],
                services: "Massage"
            },
            {
                id: 10,
                name: "Makeup Y",
                avg_rating: 3.0,
                num_ratings: 6,
                tos: ['Makeup'],
                services: "Makeup"
            },
            {
                id: 11,
                name: 'Eyebrow Tech Z',
                avg_rating: 4.0,
                num_ratings: 6,
                tos: ['Eyebrow Tech'],
                services: "Eyebrow Tech"
            },
            {
                id: 12,
                name: 'Eyelash Tech C',
                avg_rating: 4.2,
                num_ratings: 5,
                tos: ['Eyelash Tech'],
                services: "Eyelash Tech"
            },
            {
                id: 13,
                name: 'Tech Master',
                avg_rating: 4.8,
                num_ratings: 10,
                tos: ['Eyebrow Tech','Eyelash Tech'],
                services: "Eyebrow Tech and Eyelash Tech"
            }
          ]);
      }, []);


    const filteredSp = React.useMemo(() => {
        if (noFilter == 0) {
            console.log('no filters');
            return allSp;
        }
        else{

            console.log('some filters');
            return allSp.filter(({ tos }) => 
            (tos.includes("Hairdresser") && (hairdresserFilter)) ||
            (tos.includes("Barber") && (barberFilter)) ||
            (tos.includes("Cleaner") && (cleanerFilter)) ||
            (tos.includes("Massage") && (massageFilter)) ||
            (tos.includes("Eyebrow Tech") && (eyebrowFilter)) ||
            (tos.includes("Eyelash Tech") && (eyelashFilter))
            )
        }
    }, [noFilter, hairdresserFilter, barberFilter, cleanerFilter, massageFilter, eyebrowFilter, eyelashFilter, allSp])

    const filteredSearchedSp = React.useMemo(() => {
        if (searchTerm.length > 0) {
          return filteredSp.filter(({ name }) => name.includes(searchTerm));
        }
        return filteredSp;
    }, [ searchTerm, filteredSp ])


    function incNoFilter(){
        setNoFilter(noFilter + 1);
    }

    function decNoFilter(){
        setNoFilter(noFilter - 1);
    }

    const handleHairdresser = event => {
        if (event.target.checked) {
            incNoFilter();
          } else {
            decNoFilter();
          }
        setHairdresserFilter(current => !current);
    }

    const handleBarber = event => {
        if (event.target.checked) {
            incNoFilter();
          } else {
            decNoFilter();
          }
        setBarberFilter(current => !current); 
    }

    const handleCleaner = event => {
        if (event.target.checked) {
            incNoFilter();
          } else {
            decNoFilter();
          }
        setCleanerFilter(current => !current); 
    }

    const handleMassage = event => {
        if (event.target.checked) {
            incNoFilter();
          } else {
            decNoFilter();
          }
        setMassageFilter(current => !current); 
    }

    const handleEyebrow = event => {
        if (event.target.checked) {
            incNoFilter();
          } else {
            decNoFilter();
          }
        setEyebrowFilter(current => !current); 
    }

    const handleEyelash = event => {
        if (event.target.checked) {
            incNoFilter();
          } else {
            decNoFilter();
          }
        setEyelashFilter(current => !current); 
    }

    return(
      <>
        <input
          name="searchname"
          placeholder="Search"
          value={searchValue}
          onChange={e => setSearchValue(e.target.value)}
        />

        <button
          type="button"
          onClick={() => setSearchTerm(searchValue)}
        >Search</button>

        <div>Filters:</div>

        <div>
          Hairdresser
          <input
            type="checkbox"
            value={hairdresserFilter}
            onChange={handleHairdresser}
            id="isHairdresser"
            name="isHairdresser"
          />
        </div>

        <div>
          Barber
          <input
            type="checkbox"
            value={barberFilter}
            onChange={handleBarber}
            id="isBarber"
            name="isBarber"
          />
        </div>

        <div>
          Cleaner
          <input
            type="checkbox"
            value={cleanerFilter}
            onChange={handleCleaner}
            id="isCleaner"
            name="isCleaner"
          />
        </div>

        <div>
          Massage
          <input
            type="checkbox"
            value={massageFilter}
            onChange={handleMassage}
            id="isMassage"
            name="isMassage"
          />
        </div>

        <div>
        Eyebrow Tech
          <input
            type="checkbox"
            value={eyebrowFilter}
            onChange={handleEyebrow}
            id="isEyebrow"
            name="isEyebrow"
          />
        </div>

        <div>
          Eyelash Tech
          <input
            type="checkbox"
            value={eyelashFilter}
            onChange={handleEyelash}
            id="isEyelash"
            name="isEyelash"
          />
        </div>

        <ul>
          {filteredSearchedSp.map(data => (
            <InteractiveCard SP={data}></InteractiveCard>
          ))}
        </ul>
      </>
    )
}

export default CustomerExplore