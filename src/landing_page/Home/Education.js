import React from "react";

function Education()
{
    return (
        <div className="container mt-5">
            <div className='row'>
                <div className='col-6 '>
                    <img src='/media/images/education.svg' style={{width:"70%"}}/>
                </div>
                
                <div className='col-6'>
                <h1 className='mb-5 mt-5 fs-3'>Free and Open Market Education</h1>
                    <p>Varsity, the largest online stock market education book int the world <br/>everything from the basics to advance trading.</p>
                    <a href='' className='mt-5 mb-5' style={{textDecoration:"none"}}>Versity <i class="fa fa-arrow-right" aria-hidden="true"></i></a>

                    <p className="mt-5">We pioneered the concept of discount boring and price transparency in India.<br/>Flat fees and no hidden charges.</p>
                    <a href='' className='mt-5 mb-5' style={{textDecoration:"none"}}>TradingQ&A <i class="fa fa-arrow-right" aria-hidden="true"></i></a>
                </div>
            </div>
        </div>
    )
}

export default Education;