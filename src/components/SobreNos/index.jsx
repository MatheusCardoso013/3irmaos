import React from 'react';
import './SobreNos.css';

const SobreNos = () => {
    return (
        <div className="secao-sobre">
            <div className="cabecalho-sobre">
                <h2 className='titulo-destaque'>Sobre Nós</h2>
            </div>
            <p className="descricao-sobre">
                Desde 1989, entregamos o que é de melhor em pescados e frutos do mar para o consumidor exigente em qualidade de serviços
                Oferecemos uma grande variedade de peixes, camarões, mariscos e outros itens, frescos e de alta qualidade. Nossa equipe é formada por profissionais experientes e qualificados, prontos para atender o cliente, de acordo com suas preferências e necessidades.
                Em nossa loja, atendemos tanto no atacado como no varejo e, para compras no atacado, entregamos no local, em toda a baixada santista.
            </p>
            <p className="descricao-sobre">Aqui o cliente tem toda a comodidade e facilidade na hora de efetuar o pagamento de sua compra. Aceitamos PIX e todos os cartões de crédito e débito.</p>

            <div className="horario-funcionamento">
                <h3>Horário de Funcionamento</h3>
                <div className="grade-horarios">
                    <span>Segunda a Sábado:</span>
                    <span>07:30 - 19:00</span>
                    <span>Feriados:</span>
                    <span>07:30 - 14:00</span>
                </div>
            </div>

        </div>
    );
}

export default SobreNos;