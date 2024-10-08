import React from 'react'

const Pricing = () => {
  return (
    <>
    <div className='container'>
        <div className='row'>
            <div className='col-4'>
                <h1>Unbeatable pricing
                </h1>
                <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                <a href="#" style={{textDecoration:"none"}}>See pricing</a>
            </div>
            <div className='col-2'></div>
            <div className='col-6'>
                <div className='row'>
                    <div className='col-6 border p-3 text-center'>
                        <h1>0</h1>
                        <p>free equity delivery and <br /> direct mutual funds</p>
                    </div>
                    <div className='col-6 border text-center p-3'>
                    <h1>20</h1>
                    <p>Intraday and F&O</p>
                    </div>
                </div>
            </div>

        </div>
    </div>
    </>
  )
}

export default Pricing