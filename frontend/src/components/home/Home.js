import React from 'react';
import '../../App.css';
import CoverPage from './CoverPage/CoverPage';
import Dashboard from './Dashboard/Dashboard';
import QuickGuide from './QuickGuide/QuickGuide';

function Home() {
    return (
        <>
            <CoverPage></CoverPage>
            <Dashboard></Dashboard>
            <QuickGuide></QuickGuide>
        </>
    );
}

export default Home;