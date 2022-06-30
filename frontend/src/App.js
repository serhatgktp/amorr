import React from 'react';
// import LoginPage from './components/login-page/login-page.jsx';
import SuccessLoginPopup from './components/success_login_popup/SuccessLoginPopup';

function App(){
  return (
    <body>
    {/* <LoginPage/> */}
    <SuccessLoginPopup trigger={true}/>
    </body>
  )
 }
export default App;