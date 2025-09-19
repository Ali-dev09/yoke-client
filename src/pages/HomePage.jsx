import Header from '../components/Header.jsx'
import Hero from '../components/homePageComponents/Hero.jsx'
import CategoriesList from '../components/homePageComponents/CategoriesList.jsx'


import WhatsApp from '../components/WhatsApp.jsx'
import Footer from '../components/Footer.jsx'

import FixedProducts from '../components/homePageComponents/FixedProducts.jsx'







export default function HomePage(){
  return(
    <>
      
      <Hero />
      <CategoriesList />
      <FixedProducts />
      
      <WhatsApp />
      <Footer />
      
    </>
  )
}