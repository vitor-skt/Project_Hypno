import React from 'react'
import './index.scss'
import InsertInfo from '../../components/InfoConteiner/infoConteiner'

function AboutMe() {
    return (
        <>
            <InsertInfo InnerInfo={"Sobre Mim"} />
            <div className="aboutMeConteiner">
                <div className="mainAboutMeContent">
                    <p className="textAboutMe">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla cumque aliquid enim perspiciatis, in placeat sint corporis, iste distinctio, sequi officia error esse voluptas expedita illo nisi quod minus odit.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque nesciunt quaerat tempora minima ex, asperiores unde, iure iusto, consequuntur atque nisi optio quam dicta placeat quisquam harum nam laudantium debitis.</p>
                </div>
                <article className="backgroundImgAboutMe">
                    <img src="/images/mental-health.png" alt="backgroundImgAboutMe" />
                </article>
            </div>
        </>
    )
}

export default AboutMe