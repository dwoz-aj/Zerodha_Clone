import React from 'react'
export default function Hero()
{
    return (
        <div className='container'>
            <div className='row text-center text-muted mt-5 mb-5'>
                <h1>Pricing</h1>
                <h5>Free equity investments and flat ₹20 intraday and F&O trades</h5>
            </div>
            <div className="row mt-5 mb-5 border-bottom"></div>
            <div className='row p-5 ' >
            <div className='col-1'></div>
                <div className='col-3 text-muted'>
                    <img style={{width:"80%"}} src='/media/images/pricing0.svg'/>
                    <h3>Free equity delivery</h3>
                    <p>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                </div>
                <div className='col-4 text-muted'>
                    <img style={{width:"70%"}} src='/media/images/other-trades.svg'/>
                    <h3>Intraday and F&O trades</h3>
                    <p>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                </div>
                <div className='col-3 text-muted'>
                    <img style={{width:"80%"}} src='/media/images/pricing0.svg'/>
                    <h3>Free direct MF</h3>
                    <p>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                </div>
                <div className='col-1 mb-5'></div>
                <div className="row mt-5 border-bottom"></div>
            </div>
        </div>
    )
}