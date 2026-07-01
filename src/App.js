import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import './cards.css';
import Layout from './components/Layout.js';
import Home from './pages/home.js';
import CursosHome from './pages/cursos.js';
import CursoDetalhe from './pages/cursodetalhe.js';
import Erro404 from './pages/erro404.js'
import Agenda from './pages/agenda.js'

function App() {
  return (
    <div className='app-container'>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="cursos" element={<CursosHome />} />
              <Route path="cursodetalhe/:id" element={<CursoDetalhe />} />
              <Route path="agenda" element={<Agenda />} />
              <Route path="*" element={<Erro404 />} />
            </Route>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
