import React from 'react'
import './errorPopup.css'
import { Icon } from '@iconify/react';

export const ErrorPopup = ({trigger}) => {
  return (trigger) ? (
    <div className="errorPopup">
        <div className="overlay"></div>
        <div className="errorPopupContent">
            <div className="popupUpper">
              <Icon id="errorIcon" icon="charm:circle-cross"/>
            </div>
            <div className="popupLower">
              <h1 id="errorHeading">Error!</h1>
              <p id="errorPara">The email you entered has already been taken! Please enter a new email.</p>
              <a href="/#" id="contBtn">Try Again</a>
            </div>
        </div>
  </div>
  ) : null;
}