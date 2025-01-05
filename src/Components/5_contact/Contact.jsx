import React from 'react';
import "./style.css";

function Contact() {
    return (
        <div className='contact'>
            <div className="container">
                <div className="d-flex flex-column gap-3 align-items-center py-4 bg-transparent text-white text-center">
                    <h1 className='text-uppercase text-center'>conatct section</h1>
                    <span className='icon position-relative m-auto mb-5' style={{ width: '4rem' }}><i className="bi bi-star-fill"/></span>

                    <form action="" className='w-100 w-md-50 d-flex flex-column gap-4 mb-5'>
                        <input type="text" placeholder='User Name' />
                        <input type="text" placeholder='User Age' />
                        <input type="email" placeholder='User Email' />
                        <input type="password" placeholder='User Password' />
                        <button type='button' className='rounded px-3 py-2 text-capitalize'>send message</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact
