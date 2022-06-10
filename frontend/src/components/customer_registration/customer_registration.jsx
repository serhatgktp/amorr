import { useRef, useState, useEffect} from 'react';
import React from 'react';
import "./customer_registration.css";

const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
const NONEMPTY_REGEX = /([^\s])/

const CustomerRegistration = () => {

  const userRef = useRef();
  const errRef = useRef();

  const [emailAddress, setEmailAddress] = useState('');
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [pwd, setPwd] = useState('');
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState('');
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [userAddress, setUserAddress] = useState('');
  const [validAddress, setValidAddress] = useState(false);
  const [AddressFocus, setAddressFocus] = useState(false);

  const [idFile, setIdFile] = useState('');
  const [validIdFile, setValidId] = useState(false);
  const [idFocus, setidFocus] = useState(false);

  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false)

  useEffect(() => {
    userRef.current.focus();
}, [])

useEffect(() => {
    setValidEmail(EMAIL_REGEX.test(emailAddress));
    console.log(emailAddress);
}, [emailAddress])

useEffect(() => {
    setValidPwd(NONEMPTY_REGEX.test(pwd));
    setValidMatch(pwd === matchPwd);
}, [pwd, matchPwd])

useEffect(() => {
  setValidAddress(NONEMPTY_REGEX.test(userAddress));
}, [userAddress])

  return(
    <body>

        <section className="registration">
          <form>
              <div className="heading"><span className="newTo">Welcome to <font color="#d46f5e">a</font><font color="#345392">morr</font>! </span>
                <span className="provide">I am a new Customer</span>
              </div>

              <div className="inputs">
                <div className='row'>
                  <div className="input"><input
                    type="text" 
                    placeholder="Email Address"
                    ref={userRef}
                    autoComplete="off"
                    onChange={(e) => setEmailAddress(e.target.value)}
                    value={emailAddress}
                    required
                    style={
                      emailAddress && !validEmail? {borderColor:'#00FF00'} : {borderColor:'#FF0000'} 
                    }
                  /></div>
                  <div className="input"><input type="text" placeholder="Full Name"/></div>
                </div>

                <div className='row'>
                  <div className="input"><input type="password" placeholder="Password"/></div>
                  <div className="input"><input type="password" placeholder="Re-enter password"/></div>
                </div>

                <div className='row'>
                  <div className="input" id="address"><input type="text" placeholder="Address"/></div>
                  <div className="input" id="attachFile">
                    <label for="myFile">Attach ID: </label>
                    <input className="id" type="file" id="myFile" name="filename"/>
                  </div>
                </div>
              </div>

              <div className="cardFooter">
                <span className='terms'>By clicking SIGN UP, I agree to amorr's <a href='#'>term's and conditions</a> and <a href='#'>privacy policy</a></span>
                <input className="submit" type="submit" value="SIGN UP" />
              </div>  
          </form>
        </section>
        <div className='tools'></div>
        </body>
  );
};

export default CustomerRegistration;