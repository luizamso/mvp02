import {useState} from 'react';

export default function CardsTurmas(props) {
    
    const turma = props.turma;
    const [matriculado, setMatriculado] = useState(() => {
        const salvas = localStorage.getItem('turmas_matriculadas');
        if (!salvas) return false;
        
        const listaIds = JSON.parse(salvas);
        return listaIds.includes(turma.codigo);
    });

    const matricula = () => {
        const idIdentificador = turma.codigo;

        if (!matriculado) {
            if (window.confirm(`Confirma sua matrícula na turma ${turma.codigo}?`)) {
                setMatriculado(!matriculado);
                alert('Parabéns, você foi matriculado com sucesso!');
                const salvas = localStorage.getItem('turmas_matriculadas');
                const listaIds = salvas ? JSON.parse(salvas) : [];
                
                if (!listaIds.includes(idIdentificador)) {
                    listaIds.push(idIdentificador);
                    localStorage.setItem('turmas_matriculadas', JSON.stringify(listaIds));
                }
                
            }

        } else if (window.confirm(`Deseja cancelar a sua matrícula na turma ${turma.codigo}?`)) {
                setMatriculado(!matriculado);
                alert('Sua matrícula foi cancelada com sucesso!');
                
                // 1. Busca a lista atual de matrículas salvas
                const salvas = localStorage.getItem('turmas_matriculadas');
                let listaIds = salvas ? JSON.parse(salvas) : [];
                
                // 2. Filtra a lista removendo apenas o ID desta turma atual
                listaIds = listaIds.filter(codigo => codigo !== idIdentificador);
                
                // 3. Salva a lista atualizada de volta no localStorage
                localStorage.setItem('turmas_matriculadas', JSON.stringify(listaIds));
                
            }

        
            
    }
   
    return (
        <article className="card">
            <div className="card-header">
                <h4><strong>Turma:</strong></h4>
                <h4>{turma.codigo}</h4>
            </div>
            <div>
                <p><strong>Início:</strong> {turma.data_inicio}</p>
                <p><strong>Turno:Dias:</strong> {turma.turno}</p>
                <p><strong>Dias:</strong> {turma.dia_semana}</p>
                <p><strong>Horário:</strong> {turma.horario}</p>
            </div>
            <div className="card-cta card-center">
                <button 
                    className="botao" 
                    onClick={matricula}
                >
                    {matriculado ? 'Cancelar Matrícula' : 'Matricule-se já'}
                </button>
            </div>
     
        </article>

    );
}