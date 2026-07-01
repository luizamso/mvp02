import { useLocation } from 'react-router-dom';
import { useState } from "react"
import CardsTurmas from "../components/CardsTurmas.js"
import { FaCreditCard, FaBarcode, FaCoins } from 'react-icons/fa';


export default function CursoDetalhe() {
    let { state } = useLocation();
    const curso = state.c;
    const urlImagem = curso.image && curso.image[0];
    const [turmasList] = useState(curso.turmas || []);

    return (
        <div className="curso-detalhe-pagina">
            <div className="curso-detalhe-hero" 
                style={{ backgroundImage: `url(${urlImagem})` }}>
                <div className="hero-overlay">
                    <div className="hero-content">
                        <h3>{curso.subtitulo}</h3>
                        <h1>{curso.titulo}</h1>
                        
                    </div>
                </div>
                
            </div>
            <div className="curso-detalhe-descricao"><h3>{curso.descricao}</h3></div>
            
            
            <div>
                <div className="titulo-secao"><h2>Investimento</h2></div>
                
                <h3>Valor da matrícula: {curso.matricula}</h3>
                
                <div className="cards-container">
                    {curso.investimento.map((investimento, index) => (
                        <div key={index} className="card card-right">
                            <div className="card-header card-destaque">
                                {investimento.forma_pagamento === "cartão de crédito" ? (
                                    <FaCreditCard className="icone-react" />
                                ) : 
                                investimento.forma_pagamento === "boleto bancário" ? (
                                    <FaBarcode className="icone-react" />
                                ) :
                                investimento.forma_pagamento === "à vista" ? (
                                    <FaCoins className="icone-react" />
                                ) : null}
                                <h4>{investimento.forma_pagamento}</h4>
                            </div>
                            <div>{investimento.detalhe}</div>
                            <div className="card-valor">
                                <h4>{investimento.valor}</h4>    
                            </div>
                        </div>
                    ))}
                </div>
                
            </div>
            <div className="proximas-turmas-container">
                <div className="titulo-secao"><h2>Próximas Turmas</h2></div>
                
                {turmasList && turmasList.length > 0 ? (
                    <div className="cards-container">
                        
                        {turmasList.map((t, index) => (
                            <CardsTurmas key={index} turma={t} className="card" />
                                
                            
                        ))}
                    </div>
                ) : (
                    <p className="sem-turmas">Nenhuma turma com inscrições abertas no momento. Entre em contato para lista de espera.</p>
                )}
            </div>

        </div>
     
    )
}