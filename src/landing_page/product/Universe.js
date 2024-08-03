import React from 'react'
export default function Universe()
{
    return (
        <div className='container text-center'>
            <div className='row '>
                <h1>The Zerodha Universe</h1>
                <p>Extend your trading and investment experience even further with our partner platforms</p>
            </div>
            <div className='row '>
                <div className='col-2'></div>
                <div className='col-8'>
                <img className='m-5' src='/media/images/smallcaseLogo.png' style={{width:"22%"}}/>
                <img className='m-5' src='/media/images/streakLogo.png' style={{width:"22%"}}/>
                <img className='m-5' src='/media/images/sensibullLogo.svg' style={{width:"22%"}}/>
                </div>
                <div className='col-2'></div>
            </div>
            <div className='row '>
                <div className='col-2'></div>
                <div className='col-8'>
                <img className='m-5' src='/media/images/zerodhaFundHouse.png' style={{width:"22%"}}/>
                <img className='m-5' src='/media/images/tijori.svg' style={{width:"22%"}}/>
                <img className='m-5' src='/media/images/dittoLogo.png' style={{width:"22%"}}/>
                </div>
                <div className='col-2'></div>
            </div>
            <button className='p-2 btn btn-primary fs-5 mb-5' style={{width:"20%" ,margin:"0 auto"}}>Signup Now</button>
        </div>
    )
}