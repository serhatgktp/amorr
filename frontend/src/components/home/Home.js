import React from 'react';
import '../../App.css';
import CoverPage from './CoverPage/CoverPage';
import Dashboard from './Dashboard/Dashboard';
import QuickGuide from './QuickGuide/QuickGuide';
import "./Home_styles.css"

function Home() {
    return (
        <body>
            <CoverPage></CoverPage>
            <Dashboard></Dashboard>
            <QuickGuide></QuickGuide>
        </body>
    );
}

export default Home;