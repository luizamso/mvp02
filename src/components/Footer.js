import React from 'react';
import '../footer.css'; 
import { FaInstagram, FaRegEnvelope, FaLink } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="footer-container">
        
        <div className="footer-section">
          <h3>Localização</h3>
          <p>Rua Conde de Bonfim, Tijuca</p>
          <p>Rio de Janeiro - RJ</p>
        </div>

        <div className="footer-section">
          <h3>Contato</h3>
          <p><a href="mailto:contato@phosgraphein.com.br"><FaRegEnvelope style={{ marginRight: '5px', verticalAlign: 'middle' }} />contato@phosgraphein.com.br</a></p>
          <p><a href="https://www.phosgraphein.com.br" target="_blank" rel="noopener noreferrer"><FaLink style={{ marginRight: '5px', verticalAlign: 'middle' }} />www.phosgraphein.com.br</a></p>
        </div>

        <div className="footer-section">
          <h3>Siga-nos</h3>
            <a href="https://www.instagram.com/phosgraphein.curso" target="_blank" rel="noopener noreferrer">
                <FaInstagram style={{ marginRight: '5px', verticalAlign: 'middle' }} />
                @phosgraphein.curso
            </a> 
        </div>

      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Phosgraphein - Escola de Fotografia. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;