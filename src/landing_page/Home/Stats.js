import React from 'react';

function Stats() {
    return (
        <div className='container' style={{ padding: 0, margin: 0 }}>
            <div className='row' style={{ margin: 0 }}>
                <div className='col-6 p-5' style={{ padding: 0 }}>
                    <h1 className='fs-2 mb-5'>Trust with confidence</h1>
                    <h2 className='fs-4'>Customer-first always</h2>
                    <p className='text-muted'>That's why 1.3+ crore customers trust Zannat with ₹3.5+ lakh crores worth of equity investments.</p>
                    <h2 className='fs-4'>No spam</h2>
                    <p className='text-muted'>No spam or annoying notifications. High quality apps that you use at your own pace like what you want to do.</p>
                    <h2 className='fs-4'>The Jannat Universe</h2>
                    <p className='text-muted'>Not just an app, it's a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services according to your needs.</p>
                    <h2 className='fs-4'>Do Better with Money</h2>
                    <p className='text-muted'>With good initiatives, we actively help in growing your investments.</p>
                </div>
                <div className='col-6' style={{ padding: 0 }}>
                    <img src='/media/images/ecosystem.png' alt='Ecosystem' style={{ width: '60%', height: '42%' }} />
                    <div className='text-center'>
                        <a href='#' className='mx-5' style={{ textDecoration: 'none' }}>Explore our products <i className="fa fa-arrow-right" aria-hidden="true"></i></a>
                        <a href='#' className='mx-5' style={{ textDecoration: 'none' }}>Try Kite</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Stats;
