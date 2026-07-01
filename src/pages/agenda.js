import { useState } from "react";
import CardsAgenda from "../components/CardsAgenda.js"
import agenda from '../agenda.json'

export default function Agenda() {
    const [agendaList] = useState(agenda.eventos || [])
    const obterNomeMes = (mesAnoStr) => {
        const nomesMeses = {
            "01": "Janeiro", "02": "Fevereiro", "03": "Março", "04": "Abril",
            "05": "Maio", "06": "Junho", "07": "Julho", "08": "Agosto",
            "09": "Setembro", "10": "Outubro", "11": "Novembro", "12": "Dezembro"
        };
        const [mes, ano] = mesAnoStr.split("/");
        return `${nomesMeses[mes]} de ${ano}`;
    };
    const eventosAgrupados = agendaList.reduce((grupos, evento) => {
        if (!evento.data) return grupos;
        
        // Extrai o "MM/AAAA" da data (ex: "15/07/2026" vira "07/2026")
        const [_, mes, ano] = evento.data.split("/");
        const mesAnoChave = `${mes}/${ano}`;

        // Se o grupo do mês ainda não existir, cria um array vazio
        if (!grupos[mesAnoChave]) {
            grupos[mesAnoChave] = [];
        }
        
        // Adiciona o evento ao seu respectivo mês
        grupos[mesAnoChave].push(evento);
        return grupos;
    }, {});


    return (
        <div>
            <h1>Nossa Agenda de Cursos e Eventos</h1>
                
                {Object.keys(eventosAgrupados).map((mesAnoChave) => (
                <div key={mesAnoChave} className="agenda-mes-secao">
                   
                    <h2 className="agenda-mes-titulo">{obterNomeMes(mesAnoChave)}</h2>
                    
                       
                        <div className="agenda-cards">    
                            {eventosAgrupados[mesAnoChave].map((p, index) => (
                                <CardsAgenda key={index} evento={p} />
                            ))}
                        </div>
                    
                </div>
            ))}
            
        </div>

        

    )
    
}