import React from 'react'

export default function CreateTicket()
{
    return (
        <div className='container'>
            <div className='row text-muted'>
                <h4>To create a ticket, select a relevant topic</h4>
            </div>
            <div className='row ms-5 me-5'>
                <div className='col-4 p-5 mt-5 ' >
                    <h3 className='fs-5 mb-3'><i class="fa fa-plus-circle" aria-hidden="true"></i> Account Opening</h3>
                    <p><a style={{textDecoration:"none"}} href='#'>Online</a></p>
                    <p><a style={{textDecoration:"none"}} href='#'>Getting started</a></p>
                    <p><a style={{textDecoration:"none"}} href='#'>Offline</a></p>
                    <p><a style={{textDecoration:"none"}} href='#'>Charges</a></p>
                    <p><a style={{textDecoration:"none"}} href='#'>Company, Partnership and HUF</a></p>
                    <p><a style={{textDecoration:"none"}} href='#'>Non Resident Indian (NRI)</a></p>               
                </div>
                <div className='col-4 p-5 mt-5'>
                <h3 className='fs-5 mb-3'><i class="fa fa-user-o" aria-hidden="true"></i> Your Zerodha Account</h3>
                    <p><a style={{textDecoration:"none"}} href='#'>Login credentials</a></p>
                    <p><a style={{textDecoration:"none"}} href='#'>Your Profile</a></p>
                    <p><a style={{textDecoration:"none"}} href='#'>Account modification and segment addition</a></p>
                    <p><a style={{textDecoration:"none"}} href='#'>CMR & DP ID</a></p>
                    <p><a style={{textDecoration:"none"}} href='#'>Nomination</a></p>
                    <p><a style={{textDecoration:"none"}} href='#'>Transfer and conversion of shares</a></p>
                </div>
                <div className='col-4 p-5 mt-5'>
                <h3 className='fs-5 mb-3'><i class="fa fa-line-chart" aria-hidden="true"></i> Trading and Markets</h3>
                    <p><a style={{textDecoration:"none"}} href='#'>Trading FAQs</a></p>
                    <p><a style={{textDecoration:"none"}} href='#'>Kite</a></p>
                    <p><a style={{textDecoration:"none"}} href='#'>Margins</a></p>
                    <p><a style={{textDecoration:"none"}} href='#'>Product and order types</a></p>
                    <p><a style={{textDecoration:"none"}} href='#'>Corporate actions</a></p>
                    <p><a style={{textDecoration:"none"}} href='#'>Kite features</a></p>
                </div>
            </div>
            <div className='row ms-5 me-5'>
                <div className='col-4 p-5' >
                    <h3 className='fs-5 mb-3'><i class="fa fa-suitcase" aria-hidden="true"></i> Funds</h3>
                    <p><a style={{textDecoration:"none"}} href='#'>Fund withdrawal</a></p>
                    <p><a style={{textDecoration:"none"}} href='#'>Adding funds</a></p>
                    <p><a style={{textDecoration:"none"}} href='#'>Adding bank accounts</a></p>
                    <p><a style={{textDecoration:"none"}} href='#'>eMandates</a></p>               
                </div>
                <div className='col-4 p-5'>
                <h3 className='fs-5 mb-3'><i class="fa fa-circle-o" aria-hidden="true"></i> Console</h3>
                    <p><a style={{textDecoration:"none"}} href='#'>IPO</a></p>
                    <p><a style={{textDecoration:"none"}} href='#'>Portfolio</a></p>
                    <p><a style={{textDecoration:"none"}} href='#'>Funds statement</a></p>
                    <p><a style={{textDecoration:"none"}} href='#'>Profile</a></p>
                    <p><a style={{textDecoration:"none"}} href='#'>Reports</a></p>
                    <p><a style={{textDecoration:"none"}} href='#'>Referral program</a></p>
                </div>
                <div className='col-4 p-5'>
                <h3 className='fs-5 mb-3'><i class="fa fa-circle-o-notch" aria-hidden="true"></i> Coin</h3>
                    <p><a style={{textDecoration:"none"}} href='#'>Understanding mutual funds and Coin</a></p>
                    <p><a style={{textDecoration:"none"}} href='#'>Coin app</a></p>
                    <p><a style={{textDecoration:"none"}} href='#'>Coin web</a></p>
                    <p><a style={{textDecoration:"none"}} href='#'>Transactions and reports</a></p>
                    <p><a style={{textDecoration:"none"}} href='#'>National Pension Scheme (NPS)</a></p>
                </div>
            </div>
        </div>
    )
}