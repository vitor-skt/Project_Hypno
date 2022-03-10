import React from 'react'
import './index.scss'
import InsertInfo from '../../components/InfoConteiner/infoConteiner'

function AboutMe() {
    return (
        <>
            <InsertInfo InnerInfo={"Sobre Mim"} />
            <div className="aboutMeConteiner">
                <article className="backgroundImgAboutMe">
                    <img src="/images/mental-health.png" alt="backgroundImgAboutMe" />
                </article>
                <div className="mainAboutMeContent">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla cumque aliquid enim perspiciatis, in placeat sint corporis, iste distinctio, sequi officia error esse voluptas expedita illo nisi quod minus odit.</p>
                </div>
            </div>
        </>
    )
}

export default AboutMe