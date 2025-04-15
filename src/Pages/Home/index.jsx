import React from 'react';
import './Home.css';
import Fotos from '../../components/Fotos';
import SobreNos from '../../components/SobreNos';
import Localizacao from '../../components/Localizacao';

const Home = () => {
    return (
        <main>
            <section className="container-principal">
                <Fotos />
                <SobreNos />
            </section>
            <Localizacao />
        </main>
    );
}

export default Home;