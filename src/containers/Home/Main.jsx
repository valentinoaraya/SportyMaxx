import React from 'react';
import Banner from '../../components/Banner/Banner.jsx';
import ItemListContainer from '../ItemListContainer/ItemListContainer.jsx';

const Main = () => {
    return (
        <main>
            <Banner/>
            <ItemListContainer></ItemListContainer>
        </main>
    );
}

export default Main;
