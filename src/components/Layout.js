import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Breadcrumb from './breadcrumb.js';

const Layout = () => {
  return (
    <div className="app-layout">
      <Header />
      <Breadcrumb />

      {/* O Outlet serve para renderizar a página atual (Home, Cursos, etc.) */}
      <main className='conteudo'>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;