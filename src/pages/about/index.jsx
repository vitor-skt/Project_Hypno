import React from 'react'
import './index.scss'
import InsertInfo from '../../components/InfoConteiner/infoConteiner'

function AboutMe() {
    return (
        <>
            <InsertInfo InnerInfo={"Sobre Mim"} />
            <div className="aboutMeConteiner">
                <div className="mainAboutMeContent">

                </div>
            </div>
        </>
    )
}

export default AboutMe