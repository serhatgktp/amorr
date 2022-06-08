import React from 'react';
import './QuickGuide.css';

function QuickGuide() {
  return (
    <div className='all_QuickGuide'>
        <div className='guide_container'>
            <h1 class="hdg_guide">
                <span>
                    <span>Quick Guide to using </span>
                    <span>a</span>
                    <span>morr</span>
                </span>
            </h1>
            <p className='p_QuickGuide'>1. Use the search bar to search for the name of a specific service provider or select one of the services provided above</p>
            <p className='p_QuickGuide'>2. Scroll through the options provided and select your desired service provider</p>
            <p className='p_QuickGuide'>3. Check availability of service provider and find a time that fits your schedule</p>
            <p className='p_QuickGuide'>4. Select a specific service offered by the service provider, fill out the required information and request an appointment by clicking the 'request' button</p>
            <p className='p_QuickGuide'>5. Wait for confirmation from the service provider, it will appear as 'confirmed' in the 'my appointments' page</p>
        </div>
        {/* <div className='imgRight'>
            <img src='../../home/makeup_QG.png' alt='sideImg'></img>
        </div> */}
    </div>
  )
}

export default QuickGuide