import React from 'react';
import '../App.css'
import BigCard from '../components/home/BigCard'
import Dashboard from '../components/home/Dashboard';
import QuickGuide from '../components/home/QuickGuide';

function Home() {
    return (
        <>
            <BigCard></BigCard>
            <Dashboard></Dashboard>
            <QuickGuide></QuickGuide>
        </>
    );
}

export default Home;