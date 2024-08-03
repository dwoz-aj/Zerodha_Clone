import React from 'react'
export default function RightSection({imageURL,productName,productDescription,tryDemo,learnMore,googlePlay,appStore})
{
    return (
        <div className='container border-top mt-5 '>
            <div className='row ms-5'>
            <div className='col-6 mt-5 p-5'>
                <h1>{productName}</h1>
                <p>{productDescription}</p>
                <div className='mt-3 mb-3'>
                <a className='p-5' href={learnMore}>Learn More<i className="fa fa-arrow-right" aria-hidden="true"></i></a>
                </div>
            </div>
            <div className='col-6 mt-5 p-5'>
                <img src={imageURL} style={{width:"90%"}}/>
            </div>
            </div>
        </div>
    )
}