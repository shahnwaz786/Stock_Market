import React from 'react'

const Hero = () => {
  return (
    <>
    <div className='container-flued bg-primary text-white pt-5'>
        <div className='d-flex justify-content-between  ' style={{padding:"20px 110px"}}>
            <h3>Support portal</h3>
            <a  className="text-white ml-5"href="#">Track tickets</a>
        </div>
        <div className='row mt-5 pb-5'style={{padding:"20px 110px"}} >
            <div className='col-6'>
                <h4 className='mb-4'>Search for an answer or browse help topics to create a ticket</h4>
                <input type="text" placeholder='how to i activate F&O' className='text-start p-3 mb-4' style={{width:"90%"}} />
                <div  className='pb-5'>
                <a className='text-white ' href="#" >Track account opening </a>
               <a className='text-white mx-4' href="#"> Track segment activation</a>
                 <a className='text-white mx-4' href="#">Intraday margins</a><br />
                 <a className='text-white  ' href="#"> Kite user manual</a>
                </div>

            </div>
            <div className='col-6 mt-5 pr-4'>
                <h4>Featured</h4>
                <ol>
                    <li className='mb-3'><a href="#" className='text-white '>Suspension of trading - IDFC Limited</a></li>
                    <li><a href="#"  className='text-white'>Rights Entitlements listing in October 2024</a></li>
                </ol>
            </div>
        </div>

    </div>
    </>
  )
}

export default Hero