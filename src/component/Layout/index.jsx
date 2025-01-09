import React, { useEffect } from 'react';
import Footer from './Footer';
import Head from './Head';
import Header from './Header';

function Layout({ children, title, className }) {
  useEffect(() => {
    const theme = localStorage.getItem('theme');

    if (theme) {
      document.documentElement.classList.add(theme);
    } else {
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.documentElement.classList.remove('light');
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
        document.documentElement.classList.add('light');
      }
    }
  }, []);

  return (
    <>
      <Head title={title} />
      <Header />
      <main
        className={`${
          typeof className !== 'undefined' ? 'main ' + className : 'main'
        }`}
      >
        {children}
      </main>
      <Footer />
    </>
  );
}

export default Layout;
