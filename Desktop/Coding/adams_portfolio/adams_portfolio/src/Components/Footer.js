import React from 'react';
import {FacebookSquare} from 'styled-icons/boxicons-logos/FacebookSquare';
import {Github} from 'styled-icons/boxicons-logos/Github';
import {LinkedinSquare} from 'styled-icons/boxicons-logos/LinkedinSquare';
import {Instagram} from 'styled-icons/boxicons-logos/Instagram';
import {Spotify} from 'styled-icons/boxicons-logos/Spotify';

function Footer() {
    return (
        <div>
            <FacebookSquare  className="footer-icons"/>
            <Github  className="footer-icons"/>
            <LinkedinSquare  className="footer-icons"/>
            <Instagram  className="footer-icons"/>
            <Spotify  className="footer-icons"/>
        </div>
    )
}

export default Footer;