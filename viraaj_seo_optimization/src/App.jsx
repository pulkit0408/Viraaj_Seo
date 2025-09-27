import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import About from './components/About.jsx'
import Content from './components/Content.jsx'  
import Our_mission from './components/Our_mission.jsx'
import OfferPage from './components/OfferPage.jsx'
import Best_deal from './components/Best_deal.jsx'
import Price from './components/Price.jsx'
import Best_rating from './components/Best_rating.jsx'
import Why_choose_us from './components/Why_choose_us.jsx'
import Transparent_process from './components/Transparent_process.jsx'
import Instant_cash from './components/Instant_cash.jsx'
import Customer_trust from './components/Customer_trust.jsx'
import How_it_works from './components/How_it_works.jsx'
import Home from './components/Home.jsx'
import FAQ from './components/FAQ.jsx'
import Privacy_policy from './components/Privacy_policy.jsx'
import Festive_offers from './components/Festive_offers.jsx'
import Sell_gold_coins from './components/Sell_gold_coins.jsx'
import Gallery from './components/Gallery.jsx'
import Contact from './components/Contact.jsx'  
import Cash_for_gold_Lajpat_nagar from './components/Cash_for_gold_Lajpat_nagar.jsx'
import Cash_for_gold_CR_park from './components/Cash_for_gold_CR_park.jsx'
import Gold_buyer_central_market from './components/Gold_buyer_central_market.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <p>Viraaj SEO</p>
      <Home />
      <About />
      <Content />
      <Our_mission />
      <OfferPage />
      <Best_deal />
      <Price />
      <Best_rating />
      <Why_choose_us />
      <Transparent_process />
      <Instant_cash />
      <Customer_trust />
      <Gallery />
      <Contact />
      <How_it_works />
      <FAQ />
      <Privacy_policy />
      <Festive_offers />
      <Sell_gold_coins />
      <Cash_for_gold_Lajpat_nagar />
      <Cash_for_gold_CR_park />
      <Gold_buyer_central_market />

    </>
  )
}

export default App
