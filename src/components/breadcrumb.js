import React from 'react';
import { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import '../breadcrumb.css';

const mapeamentoRotas = {
  'cursos': 'Cursos',
  'agenda': 'Agenda',
  'cursodetalhe': 'Cursos'
};

function Breadcrumb() {
  const location = useLocation();
  const caminhos = location.pathname.split('/').filter((path) => path);

  useEffect(() => {
    
    const tituloBase = "Phosgraphein"; 
    const segmentosInternos = location.pathname.split('/').filter((path) => path);
    if (segmentosInternos.length === 0) {
      document.title = `Início | ${tituloBase}`;
    } else {
      const ultimoSegmento = segmentosInternos[segmentosInternos.length - 1];
      let nomePagina = mapeamentoRotas[ultimoSegmento];

      if (!nomePagina) {
        nomePagina = !isNaN(ultimoSegmento) ? 'Detalhe do Curso' : ultimoSegmento;
      }

      document.title = `${nomePagina} | ${tituloBase}`;
    }
  }, [location.pathname]);

  if (location.pathname === '/') {
    return null;
  }

  return (
    <nav aria-label="breadcrumb" className="breadcrumb-nav">
      <ol className="breadcrumb-list">
        
        <li className="breadcrumb-item">
          <Link to="/" className="breadcrumb-link">Início</Link>
        </li>

        {caminhos.map((segmento, index) => {
                    
          const ehUltimo = index === caminhos.length - 1;

          let urlAcumulada;
          if (segmento === 'cursodetalhe' && !ehUltimo) {
            urlAcumulada = '/cursos';
          } else {
            urlAcumulada = `/${caminhos.slice(0, index + 1).join('/')}`;
          }

          let textoExibido = mapeamentoRotas[segmento];
          
          if (!textoExibido) {
            if (!isNaN(segmento)) {
              textoExibido = 'Detalhe'; 
            } else {
              textoExibido = decodeURIComponent(segmento)
                .replace(/-/g, ' ')
                .replace(/^\w/, (c) => c.toUpperCase());
            }
          }

          return (
            <React.Fragment key={urlAcumulada}>
              
              <li className="breadcrumb-separator" aria-hidden="true">/</li>
              
              {ehUltimo ? (
                
                <li className="breadcrumb-item breadcrumb-item-atual" aria-current="page">
                  {textoExibido}
                </li>
              ) : (
                
                <li className="breadcrumb-item">
                  <Link to={urlAcumulada} className="breadcrumb-link">
                    {textoExibido}
                  </Link>
                </li>
              )}
            </React.Fragment>
          );
        })}
      </ol>
    </nav>
  );
}

export default Breadcrumb;