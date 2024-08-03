import React from 'react'
export default function LeftSection({imageURL,productName,productDescription,tryDemo,learnMore,googlePlay,appStore})
{
    return (
        <div className='container border-top mt-5 '>
            <div className='row ms-5'>
            <div className='col-6 mt-5 p-5'>
                <img src={imageURL} style={{width:"90%"}}/>
            </div>
            <div className='col-6 mt-5 p-5'>
                <h1>{productName}</h1>
                <p>{productDescription}</p>
                <div className='mt-3 mb-3'>
                <a className='p-3' href={tryDemo}>Try Demo<i className="fa fa-arrow-right" aria-hidden="true"></i></a>
                <a className='p-5' href={learnMore}>Learn More<i className="fa fa-arrow-right" aria-hidden="true"></i></a>
                </div>
                <div className='mt-2 mb-2'>
                <a className='p-2' href={googlePlay}><img src="/media/images/googlePlayBadge.svg"/></a>
                <a className='p-2' href={appStore}><img src="/media/images/appStoreBadge.svg"/></a>
                </div>
            </div>
            </div>
        </div>
    )
}