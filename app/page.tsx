import React from 'react'
import HeroSection from './components/HeroSection'
import Header from './components/Header'
import About from "./components/About"
import Project from "./components/Project"
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
    </main>
    
    </>
  )
}

export default page
