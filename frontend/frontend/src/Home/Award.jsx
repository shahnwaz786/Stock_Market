import React from 'react'

const Award = () => {
  return( 
    <>
      <div className='container mt-5'>
        <div className='row'>
            <div className='col-6 p-5'>
                <img src="media/Images/largestBroker.svg" alt=" Image" />
            </div>
            <div className='col-6 p-5 mt-3'>
                <h1>Largest stock broker in India</h1>
                <p className='p-2'>2+ million Zerodha client contribute over 15% of all retail order volume in <br /> india daily by trading and investing in :</p>
                  <div className='container'>
                    <div className='row'>
                        <div className='col-6'>
                            <ul>
                                <li className='p-1'>Future and Option</li>
                                <li className='p-1'>commenly derivatives</li>
                                <li className='p-1'>currently derivetives</li>
                            </ul>
                        </div>
                        <div className='col-6'>
                            <li className='p-1'> Stocks & IPOs</li>
                            <li className='p-1'> Mutual Funds</li>
                            <li className='p-1'>Bonds and govt. securities</li>
                        </div>
                    </div>
                    
                  </div>
                  <div className='mt-2'>
                    <img src="media/Images/pressLogos.png" alt="logo" style={{width:"90%"}}/>
                  </div>
            </div>
        </div>
      </div>

    </>
  )
}

export default Award