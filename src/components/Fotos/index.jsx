import React from 'react';
import './Fotos.css';
import frente from '../../assets/frente.jpg';
import balcao from '../../assets/balcao.jpg';

const Fotos = () => {
    return (
        <div className="galeria-fotos">
            <img src={frente} alt="Fachada da loja" className="foto-loja" />
            <img src={balcao} alt="Balcão de atendimento" className="foto-loja" />
        </div>
    );
}   

export default Fotos;