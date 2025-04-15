import React from 'react';
import './Footer.css';
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__conteudo">
                <div className="footer__coluna">
                    <h3>Endereço</h3>
                    <p>
                        Praça Vinte e Três de Maio, 162
                        <br />
                        Parque Bitaru, São Vicente - SP
                    </p>
                </div>

                <div className="footer__coluna">
                    <h3>Contatos</h3>
                    <p>
                        <BsFillTelephoneFill /> (13) 3468-2674
                    </p>
                    <p>
                        <BsFillTelephoneFill /> (13) 3468-2372
                    </p>
                    <p>
                        <FaWhatsapp /> (13) 99689-4041
                    </p>
                    <p>
                        <MdEmail /> pescados3irmaos@uol.com.br
                    </p>
                </div>

                <div className="footer__coluna">
                    <h3>Funcionamento</h3>
                    <p>
                        <strong>Segunda a Sábado:</strong>
                        07:30 às 19:00
                    </p>
                    <p>
                        <strong>Feriados:</strong>
                        07:30 às 14:00
                    </p>
                </div>
            </div>

            <div className="footer__copyright">
                <p>&copy; 2025 Pescados Três Irmãos. Todos os direitos reservados.</p>
            </div>
        </footer>
    );
};

export default Footer;