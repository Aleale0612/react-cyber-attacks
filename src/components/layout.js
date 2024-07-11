import React from 'react';
import Header from './header';
import Footer from './Footer';
import Navigation from './navbar';

const Layout = ({ children }) => {
  return (
    <div className="d-flex flex-column min-vh-50">
      <Header />
      <Navigation />
      <main className="flex-grow-1 container my-4">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
