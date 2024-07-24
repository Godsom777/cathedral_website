import React from 'react';
import { FaFacebook, FaYoutubeSquare, FaInstagram } from 'react-icons/fa';

import './SocialMediaBox.css';

class SocialMediaFollow extends React.Component {
    render() {
        return (
            <div className='hero-social-media-follow'>
                <h4>Follow Us on Social Media and stay updated with latest Archdiocese Information</h4>
                <div className='hero-social-icons'>
                    <button className="myLarge-btn2" >Contact Us</button>

                    <div>
                    <a href='https://www.facebook.com/Owarch Digital Skill Center' target='_blank' rel='noopener noreferrer'><FaFacebook /></a>
                    <a href='https://www.instagram.com/assumpta_digitalskillcenter' target='_blank' rel='noopener noreferrer'><FaInstagram /></a>
                    <a href='https://www.youtube.com/' target='_blank' rel='noopener noreferrer'><FaYoutubeSquare /></a>
                 </div>
                </div>
            </div>
        );
    }
}

export default SocialMediaFollow;