import React from 'react'

const Rating = () => {
  return (
    <>
     <div className='ratingConatiner'>
        <div className='ratingChild ratingChild1'>
            <h1>4.9</h1>
            <p>100+ reviews</p>
            <h1>facebook</h1>
        </div>
        <div className='ratingChild ratingChild2'>
            <h1>4.8</h1>
            <p>1000+ reviews</p>
            <h1>Google</h1>
        </div>
        <div className='ratingChild ratingChild3'>
            <h1>50+</h1>
            <p>Questions asked</p>
            <p>5000 answered</p>
            <h1>Quora</h1>
        </div>
        {/* <div className='ratingChild ratingChild2'></div>
        <div className='ratingChild ratingChild3'></div> */}
     </div>
    </>
  )
}

export default Rating