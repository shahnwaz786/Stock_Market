import React from 'react'

const Brokerage = () => {
  return (
    <div className='container'>
      <div className='row p-5 mt-5 '>
        <div className='col-8'>
        <h3 className='text-center mb-5'><a href="#" className='text-decoration-none'>Brokerage Calculator</a> 
          </h3>
          <ul className='lh-lg text-muted fs-sm '>
            <li>For options: STT increases to 0.1% from 0.0625%, and transaction charge decreases to 0.035% from 0.0495%.</li>
            <li>This results in the cost of trades seeing a net increase of 0.02303% or ₹2303 per crore of premium on the selling side on NSE and of 0.0205% or ₹2050 per crore on BSE.</li>
            <li>For futures: STT increases to 0.02% from 0.0125%, and transaction charge decreases to 0.00173% from 0.00183%.</li>
            <li>This results in a net increase of 0.00735% or ₹735 per crore of futures turnover on the selling side.</li>
            
          </ul>
        </div>
        <div className='col-4'>
        <h3 className='text-center'><a href="#"className='text-decoration-none'>List of charges</a> </h3>
        </div>
      </div>
    </div>
  )
}

export default Brokerage