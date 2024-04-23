import React from 'react';
import Banner from '../../components/Banner/Banner.jsx';
import TitleSectionMain from '../../components/TitleSectionMain/TitleSectionMain.jsx';
import SectionCategory from '../../components/SectionCategory/SectionCategory.jsx';

const Main = () => {
    return (
        <main>
            <Banner/>
            <TitleSectionMain title={"Productos destacados"}/>
            <TitleSectionMain title={"Secciones destacadas"}/>
            <SectionCategory/>
        </main>
    );
}

export default Main;
