import React from 'react'

const Education = () => {
  return (
    <>
    <div className='container mt-5'>
        <div className='row'>
            <div className='col-6'>
                <img src="media/Images/education.svg" alt="education" style={{width:"70%"}} />
            </div>
            <div className='col-6 '>
                <h3 className='text-muted mt-3'>Free and open market education</h3>
                <p className='text-muted mt-4'>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                <a href="" style={{textDecoration:"none"}}>varcity</a>

                
                <p className='text-muted mt-4'>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                <a href="" style={{textDecoration:"none"}}>Trading Q&A</a>
            </div>
        </div>

    </div>
    </>
  )
}

export default Education