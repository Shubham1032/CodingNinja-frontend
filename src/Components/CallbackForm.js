import React from 'react'

const CallbackForm = () => {
  return (
    <>
    <div className='querryContainer'>
        <div className='querryChild'>
              <h1>Have any queries?</h1>
              <p>Get a free counselling session from our experts</p>
            <div className='Query-smallContainer'>
              <div className='queryGrid queryGrid1'>
              <i className="fa-solid fa-phone"></i>
              </div>
              <div>

              <div className='queryGrid queryGrid2'>
                 Call us on our toll free number
              </div>
              <div className='queryGrid queryGrid3'>
                <h2>1800-123-3598</h2>
              </div>
              </div>
            </div>
        </div>
        <div className='querryChild formContainer'>
            <input type='number' placeholder='Contact Number *' />
            <input type='text' placeholder='First Name *' />
            <input type='email' placeholder='Email Address *' />
            <input type='number' placeholder='Graduation Year *' />
            <button >Request Callback</button>
        </div>
    </div>
    </>
  )
}

export default CallbackForm