import React from 'react'

const Hero = () => {
  return (
<>
<div className='container'>
    <div className='row text-center p-5 mt-5 border-bottom text-muted'>
<div className='mb-5'>
<h1>Charges</h1>
<h4 className='m-3'>List of all charges and taxes</h4>

</div>
<div className='row mt-5 mb-5'>
<div className='col-4 text-muted'>
    <img src="media/Images/pricingMF.svg" alt="" style={{width:"75%"}}/>
    <h3>Free equity delivery</h3>
    <p>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>

</div>
<div className='col-4'>
<img src="media/Images/intradayTrades.svg" alt="" style={{width:"75%"}}/>
    <h3>Intraday and F&O trade</h3>
    <p>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
</div>
<div className='col-4'>
<img src="media/Images/pricingMF.svg" alt="" style={{width:"75%"}}/>
    <h3>Free direct MF</h3>
    <p>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
</div>
</div>

    </div>

</div>
</>
  )
}

export default Hero