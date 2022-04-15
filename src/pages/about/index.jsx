import React from 'react'
import './index.scss'
import InsertInfo from '../../components/InfoConteiner/infoConteiner'

function AboutMe() {
    return (
        <>
            <InsertInfo InnerInfo={"Sobre Mim"} />
            <div className="aboutMeConteiner">
                <div className="mainAboutMeContent">
                    <div className="textBoxConteiner">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla cumque aliquid enim perspiciatis, in placeat sint corporis, iste distinctio, sequi officia error esse voluptas expedita illo nisi quod minus odit.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque nesciunt quaerat tempora minima ex, asperiores unde, iure iusto, consequuntur atque nisi optio quam dicta placeat quisquam harum nam laudantium debitis.</p>
                        <div className="iframeContainer">
                            <iframe width="540" height="315"
                                src="https://www.youtube.com/embed/iik25wqIuFo" frameBorder="0" allowFullScreen title="VideoSample">
                            </iframe>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutMe
