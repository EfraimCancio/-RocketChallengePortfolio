import React from 'react';

//styles
import './Links.css';

//images
import Brasil from '../../images/map-pin.png'
import Rocketseat from '../../images/briefcase.png'
import Github from '../../images/github.png'
import Linkedin from '../../images/linkedin.png'
import Twitter from '../../images/twitter.png'
import Site from '../../images/globe.png'
import Email from '../../images/mail.png'

const Links = () => {
  return (
    <div className="links-container">
        <ul>
            <li className="link">
                <img className="link-img" src={Brasil} alt="Brasil"></img>
                <a className="link-name">Brasil</a>
            </li>
            <li className="link">
                <img className="link-img" src={Rocketseat} alt="Rocketseat"></img>
                <a className="link-name">Rocketseat</a>
            </li>
            <li className="link">
                <img className="link-img" src={Github} alt="Github"></img>
                <a className="link-name">Github</a>
            </li>
            <li className="link">
                <img className="link-img" src={Linkedin} alt="Linkedin"></img>
                <a className="link-name">Linkedin</a>
            </li>
            <li className="link">
                <img className="link-img" src={Twitter} alt="Twitter"></img>
                <a className="link-name">Twitter</a>
            </li>
            <li className="link">
                <img className="link-img" src={Site} alt="Site"></img>
                <a className="link-name">Site</a>
            </li>
            <li className="link">
                <img className="link-img" src={Email} alt="E-mail"></img>
                <a className="link-name">E-mail</a>
            </li> 
        </ul>
    </div>
  )
}

export default Links