import React from 'react'

const Team = () => {
  return (
    <>
   <div className='container'>
   <h1  className='text-center mb-5'>People</h1>

   <div className='row mt-5'>
    <div className='col-6 text-center text-muted'>
        <img src="media/Images/Sunny.jpg" alt="" style={{borderRadius:"100%", width:"30%"}} className='mb-2' />
        <h4>Shahnwaz Ahamad</h4>
        <h6>Founder,CEO</h6>
    </div>
    <div className='col-6 fs-5 text-muted'>
        <p>Shahnwaz bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>

<p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>

<p>Playing basketball is his zen.</p>

<p>Connect on <a href="#" style={{textDecoration:"none"}}>Homepage</a> / <a href="#" style={{textDecoration:"none"}}>TradingQnA</a> / <a href="#" style={{textDecoration:"none"}}>Twitter</a></p>
    </div>
   </div>

   </div>
    </>
  )
}

export default Team