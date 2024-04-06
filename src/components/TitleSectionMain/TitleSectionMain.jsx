import React from 'react';
import "./TitleSectionMain.css"

const TitleSectionMain = ({title}) => {
    return (
        <section className='sectionTitleSection'>
            <div className='divTitleSection'>
                <h2>{title}</h2>
            </div>
        </section>
    );
}

export default TitleSectionMain;
