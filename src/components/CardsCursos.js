import { Link } from "react-router-dom"

export default function Cards(props) {
    const curso = props.curso
    return (
        <article className="card card-center">
            <img src={curso.image} alt="curso"/>
            <p>{curso.subtitulo}</p>
            <h2 className="card-titulo">{curso.titulo}</h2>
            <p>{curso.descricao}</p>
            <h3 className="card-cta">{curso.cta}</h3>
            <Link to={`/cursodetalhe/${curso.id}`} state={{c: curso}}>
                <button className="botao">Saiba mais</button>
            </Link>
            
        </article>

    );
}