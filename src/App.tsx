import NavBar from './components/Navbar'
import './App.css'
import Hero from './components/Hero'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery'
import 'popper.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import Events from './components/Events'
import Section3 from './components/Section3'

import Footer from './components/Footer'  
import Projects from './components/projects'
import ImageSection from './components/ImageSection'


function App () {
  return (
    <>
      <NavBar />
      <Hero />
      <hr />
      <Events />
      <hr />
      <br />
     
      <ImageSection />
      <br /><br />
     
      <Section3 />
      <br />
      <br />
      <br />
      <Projects />
      <br />
      
      <br />
      <hr />
      <Footer />


    </>
  )
}

export default App;
