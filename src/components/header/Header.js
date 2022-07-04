import './Header.css';
import { FacebookFilled, InstagramFilled, TwitterSquareFilled } from '@ant-design/icons';

import React from 'react';

export const Header = ({ data }) => {
    return (
        <div className="headerContainer">
            <h1 className="headerLogo">{data.initials}</h1> 
            <div className="headerLinksContainer">
                <h2 className="portfolioHeaderLink">Portfolio</h2>
                <h2 className="aboutHeaderLink">About</h2>
                <h2 className="contactHeaderLink">Contact</h2>
                <div className="socialsHeaderContainer">
                    <FacebookFilled className="socialIcon" />
                    <InstagramFilled className="socialIcon" />
                    <TwitterSquareFilled className="socialIcon" />
                </div>
            </div>
        </div>
    )
}
