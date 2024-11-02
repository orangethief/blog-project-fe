import { Outlet } from 'react-router-dom'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useState, useEffect } from 'react';


const Layout = () => {

  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 100) { // Adjust the scroll threshold as needed
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);


  return (
    <div>
      <Header />
      <main className="min-h-screen dark">
        <Outlet />
      </main>
      <Footer />

      {isVisible && (
        <button
          onClick={scrollToTop}
          className={`fixed bottom-8 right-4 transition-opacity duration-300 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          } md:bottom-10 md:right-10 lg:bottom-4 lg:right-4`}
          style={{
            position: 'fixed',
            zIndex: 1000,
            borderRadius: '5%',
            padding: '0.2rem',
            backgroundColor: '#fff',
          }}
        >
          ↑ scroll up
        </button>
      )}

    </div>
  )
}

export default Layout
