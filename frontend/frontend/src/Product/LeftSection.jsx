import React from 'react'

const LeftSection = ({imgUrl,productName,productDescription,tryDemo,learnMore,googlePlay,appStore}) => {
  return (
    <>
    <div className='container mt-5'>
        <div className='row '>
            <div className='col-6 '>
                <img src={imgUrl} />
            </div>
            <div className='col-6 text-muted w-50 '>
                <h1 >{productName}</h1>
                <p>{productDescription}</p>
                <div className='mt-3'>
                <a className=' text-decoration-none' href={tryDemo}>Try Demo</a>
                <a  className='mx-4 text-decoration-none' href={learnMore}>Lern More</a>
                </div>
                <div className='mt-3'>
                <a href={googlePlay}><img src="media\Images\googlePlayBadge.svg" alt="" /></a>
                <a className='mx-4' href={appStore}><img src="media\Images\appstoreBadge.svg" alt="" /></a>
                </div>
            </div>

        </div>
    </div>
    </>
  )
}

export default LeftSection