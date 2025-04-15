import React from 'react';
import './Localizacao.css';

const Localizacao = () => {
    return (
        <section className="secao-localizacao">
            <div className="conteudo-localizacao">
                <h2 className="titulo-destaque">Nossa Localização</h2>

                <div className="container-localizacao">
                    <div className="mapa-container">
                        <div className="mapa-wrapper">
                            <iframe
                                className="mapa-embed"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3645.6721013255838!2d-46.39513898501443!3d-23.97203248448059!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce1c852aaaaaa9%3A0x4e09bbf6007d9f90!2sCom%C3%A9rcio%20de%20Pescados%20Tr%C3%AAs%20Irm%C3%A3os!5e0!3m2!1spt-BR!2sbr!4v1675192455288!5m2!1spt-BR!2sbr"
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Localizacao;