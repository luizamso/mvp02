import { Link } from "react-router-dom";
import home01 from '../assets/home01.jpg'
import { useState } from "react"
import Cards from "../components/CardsCursos"
import Cursos from '../cursos.json'

export default function Home() {
    const [cursosList] = useState(Cursos.cursos || [])
    return (
        <div>
            <h1>Sua Jornada Começa Aqui</h1>
            <div className="container-emlinha">
                <div className="home-hero-col">
                    <img src={home01} alt="Home 01" className="home-img" />
                </div>
                <div className="home-hero-col">
                    <h2>Aprenda e desenvolva suas habilidades fotográficas</h2>
                </div>
            </div>
            <div className="container-emlinha">
                <div className="home-hero-col container-emlinha-bordadireita">
                    <h2>Nossos cursos mais populares</h2>
                </div>
                <div>
                    <p>Nossos cursos são estruturados em módulos, proporcionando aprendizado adequado para cada fase do seu progresso na fotografia.</p>
                </div>
                <div>
                    <Link to="/cursos">
                        <button className="botao">
                            Todos os cursos
                        </button>
                    </Link>
                </div>
            </div>
            <div className="cards-container">    
                {cursosList
                .filter(curso => curso.popular === "Sim")
                .map((p, index) => (
                <Cards key={index} curso={p} />
                ))}
            </div>
        </div>
    )
}