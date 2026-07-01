export default function CardsTurmas(props) {
    
    const turma = props.turma
    const matricula = () => {
    if (window.confirm(`Confirma sua matrícula na turma com início em ${turma.data_inicio}, ${turma.turno}?`)) {
        alert('Parabéns, você foi matriculado com sucesso!')
        }
    }
   
    return (
        <article className="card">
            <div className="card-header">
                <h4>Início: {turma.data_inicio}</h4>
                <span className="badge-turno">{turma.turno}</span>
                
            </div>
            <div>
                <p><strong>Dias:</strong> {turma.dia_semana}</p>
                <p><strong>Horário:</strong> {turma.horario}</p>
            </div>
            <div className="card-cta card-center">
                <button className="botao" onClick={matricula}>Matricule-se já</button>
            </div>
     
        </article>

    );
}