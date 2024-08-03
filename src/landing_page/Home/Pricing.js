import React from 'react'

function Pricing(){
    return (
        <div className="container">
            <div className='row'>
                <div className='col-4 mb-5'>
                    <h1 className=''>Unbeatable pricing</h1>
                    <p>We pioneered the concept of discount broing and price transparency in India.Flat fees and no hidden charges.</p>
                    <a href='' style={{textDecoration:"none"}}>See pricing <i class="fa fa-arrow-right" aria-hidden="true"></i></a>
                </div>
                <div className='col-2'></div>
                <div className='col-6 mb-5'>
                    <div className='row text-center'>
                        <div className='col p-2 border '>
                            <h1 className='mb-3'>$0</h1>
                            <p>Free equity delivery and <br/>mutual fund</p>
                        </div>
                        <div className='col p-2 border'>
                        <h1 className='mb-3'>$20</h1>
                        <p>Intrading and F&O</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Pricing;