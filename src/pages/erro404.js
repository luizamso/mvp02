import React from 'react';
import { Link } from 'react-router-dom';


export default function Erro404() {
  return (
    <div className="not-found-container">
      <h1>404</h1>
      <h2>Página Não Encontrada</h2>
      <p>Lamento, mas a página que procura não existe ou foi movida.</p>
      
      <Link to="/" className="botao-404">
        Voltar para a Página Inicial
      </Link>
    </div>
  );
}