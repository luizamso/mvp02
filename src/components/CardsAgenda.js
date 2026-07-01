import { FaChalkboardTeacher, FaCameraRetro, FaMapMarkedAlt } from 'react-icons/fa';

export default function CardsAgenda(props) {
    const evento = props.evento
    return (
        <article className="card">
            <div className="card-header">
                {evento.tipo === "Nova Turma" ? (
                    <FaChalkboardTeacher className="icone-react" />
                ) : 
                evento.tipo === "Aula Prática" ? (
                    <FaMapMarkedAlt className="icone-react" />
                ) :
                evento.tipo === "Passeio Fotográfico" ? (
                    <FaCameraRetro className="icone-react" />
                ) : null}
                <h4>{evento.titulo}</h4>
            </div>
            <div>
                <div className="card-subtitulo card-center">{evento.tipo}</div>
                <p><strong>Local:</strong> {evento.local}</p>
                <p><strong>Data:</strong> {evento.data}</p>
                <p><strong>Início:</strong> {evento.hora_inicio}</p>
                <p><strong>Fim:</strong> {evento.hora_termino}</p>
            </div>
        </article>
    );
}