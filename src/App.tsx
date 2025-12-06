import { Layout } from "./components/Layout"
import { AboutUs } from "./components/sections/AboutUs"
import { Brands } from "./components/sections/Brands"
import { CTA } from "./components/sections/CallToAction"
import { Feature } from "./components/sections/Feature"
import { Hero } from "./components/sections/Hero"
import { Services } from "./components/sections/Services"

function App() {

  return (
    <>
      <Layout title="EdgeAI">
        <Hero />
        <Brands />
        <Services />
        <AboutUs />
        <Feature />
        <CTA />
      </Layout>
    </>
  )
}

export default App
