import React, { useState } from 'react'

function Tour(props) {

    const   data    = props.data;
    const   [readMore,setReadmore] = useState(false);

 const handleClick = () => {
        setReadmore(!readMore)
}


  return (
    <div>

        <div className={data.length>0 ? "d-none no-tour-left" : "d-block no-tour-left" }>
            <h2>No Tours Left !</h2>
            <button className='refresh-page' onClick={()=>window.location.reload(false)}>refresh page</button>
        </div>

        {
            data.map((city,id) => (

                <article key={id}>
                    <div className="box-img">
                        <img src={city.img} alt={city.name} />
                    </div>
                    <div className="content">
                        <div className="text-tour">
                            <div className='heading-price'>
                                <h1>{city.name}</h1>
                                <div className="price" title='Price'>{city.price}</div>
                            </div>
                            <hr />
                            <p>{readMore ? `${city.desc.substring(0)}` : `${city.desc.substring(0,180)}...`}</p>

                            <button className='read-more' onClick={()=>handleClick()}>
                                {readMore ? "Read Less": "Read More"}
                            </button>
                        </div>
                    </div>

                    <button className='close-tour' title='Not Interested' onClick={()=>props.removeCity(id)} >X</button>
                </article>
            ))
        }
    </div>
  )
}


export default Tour
