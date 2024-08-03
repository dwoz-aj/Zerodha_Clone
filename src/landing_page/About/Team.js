import React from 'react'

function Team(){
    return (
        <div className="container">
            <div className='row p-5 '>
                <h1 className="text-center fs-1">People</h1>
            </div>
            <div className='row p-3  text-muted fs-6'>
                <div className='col-6 p-5 text-center'>
                    <img style={{borderRadius:"1000px",widht:"90%",height:"60%"}} src="/media/images/nithinKamath.jpg"/>
                    <h5 className='mt-4'>Nithin Kamath</h5>
                    <h6>Founder, CEO</h6>
                </div>
                <div className='col-6 p-5 '>
                    <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>
                    <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>
                    <p>Playing basketball is his zen.</p>
                    <p>Connect on <a href="#">Homepage</a>/<a href="#">TradingQnA</a>/<a href="#">Twitter</a></p>
                </div>
            </div>
        </div>
    )
}

export default Team;