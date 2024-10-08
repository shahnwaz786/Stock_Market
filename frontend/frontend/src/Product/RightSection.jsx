import React from 'react'

const RightSection = ({imgUrl,productName,productDescription,learnMore}) => {
        return (
          <>
          <div className='container mt-5'>
              <div className='row '>
                 
                  <div className='col-6 text-muted p-5 mt-5'>
                      <h1 className='mt-5 '>{productName}</h1>
                      <p>{productDescription}</p>

                      <div className='mt-3'>
                      <a  className='mx-4 text-decoration-none' href={learnMore}>Lern More</a>
                      </div>
                      
                  </div>
                  <div className='col-6 '>
                      <img src={imgUrl} />
                  </div>
      
              </div>
          </div>
          </>
        )
      }

export default RightSection