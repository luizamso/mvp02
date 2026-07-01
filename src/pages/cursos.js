
import { useState } from "react"
import Cards from "../components/CardsCursos"
import Cursos from '../cursos.json'

export default function CursosHome() {
    const [cursosList] = useState(Cursos.cursos || [])
    return (
        <div>
            <h1>Nossos Cursos</h1>
            <div className="cards-container">    
                {cursosList
                .map((p, index) => (
                <Cards key={index} curso={p} />
                ))}
            </div>
        </div>

        

    )
    
}