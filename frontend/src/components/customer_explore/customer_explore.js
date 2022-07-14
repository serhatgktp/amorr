import React , { useEffect, useState } from "react";
import InteractiveCard from "./interactive_sp_cards/interactive_sp_cards";
import './customer_explore_styles.css'
import { BrowserRouter as Router } from 'react-router-dom'

const CustomerExplore = () => {
    //const SP = {name: "Lorem Ipsum Salons", rating: 4.0, num_rating: 50, services: 75, fee: 4.95};
    const [allSp, setAllSp] = React.useState([]);
    const [filteredSp, setFilteredSp] = React.useState([]);
    const [searchValue, setSearchValue] = React.useState("");
    const [searchTerm, setSearchTerm ] = React.useState("");

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
                tos: ['Hairdresser'],
            },
            {
                id: 2,
                name: "Hairdresser B",
                tos: ['Hairdresser'],
            },
            {
                id: 3,
                name: "Hairdresser C",
                tos: ['Hairdresser'],
            },
            {
                id: 4,
                name: "Barber A",
                tos: ['Barber'],
            },
            {
                id: 5,
                name: "Barber B",
                tos: ['Barber'],
            },
            {
                id: 6,
                name: "Cleaner A",
                tos: ['Cleaner'],
            },
            {
                id: 7,
                name: "Cleaner B",
                tos: ['Cleaner'],
            },
            {
                id: 8,
                name: "Cleaner C",
                tos: ['Cleaner'],
            },
            {
                id: 9,
                name: "Massage X",
                tos: ['Massage'],
            },
            {
                id: 10,
                name: "Makeup Y",
                tos: ['Makeup'],
            },
            {
                id: 11,
                name: 'Eyebrow Tech Z',
                tos: ['Eyebrow Tech'],
            },
            {
                id: 12,
                name: 'Eyelash Tech C',
                tos: ['Eyelash Tech'],
            },
            {
                id: 13,
                name: 'Tech Master',
                tos: ['Eyebrow Tech','Eyelash Tech'],
            }
          ]);
          
          setFilteredSp([
            {
                id: 1,
                name: "Hairdresser A",
                tos: ['Hairdresser'],
            },
            {
                id: 2,
                name: "Hairdresser B",
                tos: ['Hairdresser'],
            },
            {
                id: 3,
                name: "Hairdresser C",
                tos: ['Hairdresser'],
            },
            {
                id: 4,
                name: "Barber A",
                tos: ['Barber'],
            },
            {
                id: 5,
                name: "Barber B",
                tos: ['Barber'],
            },
            {
                id: 6,
                name: "Cleaner A",
                tos: ['Cleaner'],
            },
            {
                id: 7,
                name: "Cleaner B",
                tos: ['Cleaner'],
            },
            {
                id: 8,
                name: "Cleaner C",
                tos: ['Cleaner'],
            },
            {
                id: 9,
                name: "Massage X",
                tos: ['Massage'],
            },
            {
                id: 10,
                name: "Makeup Y",
                tos: ['Makeup'],
            },
            {
                id: 11,
                name: 'Eyebrow Tech Z',
                tos: ['Eyebrow Tech'],
            },
            {
                id: 12,
                name: 'Eyelash Tech C',
                tos: ['Eyelash Tech'],
            },
            {
                id: 13,
                name: 'Tech Master',
                tos: ['Eyebrow Tech','Eyelash Tech'],
            }
          ]);
      }, []);

      useEffect(() => {
        if (searchTerm.length > 0) {
            setFilteredSp(allSp.filter(({ name }) => name.includes(searchTerm)));
          }
        else{
            setFilteredSp(allSp);
        }
      }, [searchTerm]);



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

        <ul>
        {filteredSp.map(data => (
            <li key={data.id}>
                --------------------------------------------
                <p>SP name: {data.name}</p>
                <p>SP Type of Services:</p>
                {data.tos.map(element => 
                    <p>{element}</p>
                )}
                ---------------------------------------------
            </li>
        ))}
        </ul>
        </>
    )
}

export default CustomerExplore