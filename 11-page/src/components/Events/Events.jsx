import React from 'react';
import './Events.css';

const Events = () => {
  return (
    <>
    <div className="contain">
        <div className="head">
            <div className="heading1">Enter Event Details</div>
            <button className='Gallery'>Gallery <br /> <span>250 Images</span> </button>
        </div>
        <div className="style">
        <label for="name"> <span className='p11-label-style'>Marriage Name</span></label>
        <input type="text" className='name' placeholder='Mehandi' />
        </div>
        
        <div className="flexboxes">
            <div className="flex">
            <input type="text" className='Hash' placeholder='#Hashtag' />
            <input type="text" className='Date' placeholder='#Event Date' />
            </div>
            <div className="flex">
            <input type="text" className='manager' placeholder='#Event Manager Name' />
            <input type="text" className='value' placeholder='#Event Value' />
            </div>

            <div className="login">
                <div className="heading1">
                    LOGIN DETAILS
                </div>
                <div className="log-in">
                <input type="number" className='num' placeholder='+91 9125848758' />
                <input type="password" className='pass' placeholder='.......' />
                </div>

                <input type="text" className='name' placeholder='Mehandi' />

                
                
            </div>
            

        </div>
    </div>
    </>
  )
}

export default Events