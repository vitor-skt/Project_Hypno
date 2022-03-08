import React from 'react';
import './infoConteiner.scss';

function InsertInfo({ InnerInfo }) {
    return (
        <>
            <div className="InfoBar">
                <p>{InnerInfo}</p><i className="fa-solid fa-arrow-down"></i>
            </div>
        </>
    )
}

export default InsertInfo