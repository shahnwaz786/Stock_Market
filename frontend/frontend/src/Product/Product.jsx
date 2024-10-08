import React from 'react'
import Hero from './Hero'
import LeftSection from './LeftSection'
import RightSection from './RightSection'
import Univers from './Univers'

const Product = () => {
  return (
    
    <>
    <Hero />
    <LeftSection 
     imgUrl="media/Images/coin.png"
     productName="kite"
     productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
     tryDemo="#"
     learnMore="#"
     googlePlay="#"
     appStore="#"

     />
<RightSection  
    imgUrl="media/Images/console.png"
    productName="Console"
    productDescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
    learnMore="#"/>

     <LeftSection 
     imgUrl="media/Images/varsity.png"
     productName="Coin"
     productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
     tryDemo="#"
     learnMore="#"
     googlePlay="#"
     appStore="#"

     />
<RightSection  
    imgUrl="media/Images/kiteconnect.png"
    productName="Kite Connect"
    productDescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
    learnMore="#"/>

     <LeftSection 
     imgUrl="media/Images/kite.png"
     productName="Varcity Mobile"
     productDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go.Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
     tryDemo="#"
     learnMore="#"
     googlePlay="#"
     appStore="#"

     />
    
    <Univers />
    </>
  )
}

export default Product