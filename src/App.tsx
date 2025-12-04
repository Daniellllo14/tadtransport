import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Services from './pages/Services'
import About from './pages/About'
import Contact from './pages/Contact'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import Header from './components/Header'
import Footer from './components/Footer'

export default function App(){
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/tjanster" element={<Services/>} />
          <Route path="/om-oss" element={<About/>} />
          <Route path="/kontakt" element={<Contact/>} />
          <Route path="/integritetspolicy" element={<Privacy/>} />
          <Route path="/anvandarvillkor" element={<Terms/>} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
