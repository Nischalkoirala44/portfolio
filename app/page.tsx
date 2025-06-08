import React from 'react'
import HeroSection from './components/HeroSection'
import Header from './components/Header'
import About from "./components/About"
import Project from "./components/Project"
import Contact from "./components/Contact"
import Skills from './components/Skills'

const page = () => {


  return (
    <>
    <main>
      <Header />
      <HeroSection />
      <About />
      <Skills />
      <Project />
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <Contact />
      </div>
    </main>
    
    </>
  )
}

export default page
