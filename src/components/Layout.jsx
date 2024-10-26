import { Outlet } from 'react-router-dom'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const Layout = () => {
  return (
    <div>
      <Header />
      <main className="min-h-screen dark">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout
