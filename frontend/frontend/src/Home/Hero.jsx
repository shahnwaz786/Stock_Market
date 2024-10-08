import React from 'react'

const Hero = () => {
  return (
    <div className='container ' >
        <div className='row text-center'>
            <div className='text-center'>
            <img src="media/Images/homeHero.png" alt="Hero-Image" style={{width:"70%"}} />
            </div>
            <h1 className='mt-5'> Invest in everything </h1>
            <p className='fs-'>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.  </p>
            <button className='p-2 btn btn-primary fs-5' style={{width:"20%", margin:"0 auto"}} > Sign Up For free</button>

        </div>
    </div>
  )
}

export default Hero