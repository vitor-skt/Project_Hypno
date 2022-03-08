import React, { useState } from 'react';
// import Navbar from '../../components/Navbar/Navbar';
import InfoBar from '../../components/InfoConteiner/infoConteiner';
import './index.scss';

function Contato() {

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    return <>
        {/* <Navbar navbarName='Andreia Hipno' /> */}
        <InfoBar InnerInfo="Entre em contato" />
        <div className="contactConteiner">
            <article className="BackgroundImgContact">
                <img className="BackgroundImg1" src="/images/meditation.png" alt="backgroundImg1" />
                <img className="BackgroundImg2" src="/images/philosophy.png" alt="backgroundImg2" />
            </article>
            <div className="contactArea">
                <div className="whatsapp">
                    <a href="https://wa.me/" target="_blank" rel="noreferrer">Whatsapp <i className="fab fa-whatsapp"></i></a>
                </div>
                <div className="instagram">
                    <a href="https://www.instagram.com/andreiahipno/" target="_blank" rel="noreferrer">Instagram<i className="fa-brands fa-instagram"></i></a>
                </div>
                <div className="email" onClick={handleClick}>
                    <p>{click ? 'Email@email.com' : <i className="far fa-envelope"> </i>} </p>
                </div>
                <div className="celular">
                    <p>(11) 9 9999-9999 <i className="fa-solid fa-square-phone-flip"></i></p>
                </div>
            </div>

        </div>
    </>;
}

export default Contato;