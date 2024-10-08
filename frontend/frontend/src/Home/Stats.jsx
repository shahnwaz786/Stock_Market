import React from 'react'

const Stats = () => {
  return (
    <>
    <div className='container p-5'>
        <div className='row p-5'>
            <div className='col-6 '>
                <h1 className='mb-5'>Trust with confidence</h1>
                <div className='mb-4'>
                    <h5>Customer-first always</h5>
                    <p className='text-muted'>That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.</p>
                </div>

                <div className='mb-4' >
                    <h5>No spam or gimmicks</h5>
                    <p className='text-muted'>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like..</p>
                </div>

                <div className='mb-4'>
                    <h5>The Zerodha universe</h5>
                    <p className='text-muted'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
                </div>

                <div className='mb-4'>
                    <h5>Do better with money</h5>
                    <p className='text-muted'>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
                </div>
            </div>
            <div className='col-6 p-5'>
                <div>
                    <img src="media/Images/ecosystem.png" alt=" img" style={{width:"105%"}}/>
                </div>
                <div>
                    <a href="#" className='mx-5' style={{textDecoration:"none"}}>explore our product</a><a href="#" style={{textDecoration:"none"}}> Try kite demo</a>
                </div>
            </div>
        </div>

    </div>
    </>
  )
}

export default Stats