import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import avatar from '../../assets/avataaars.svg'

function Home() {
  return (
        <div className='container'>
            <div className='row text-center'>
                <img src={avatar} alt="avatar" />
                <h1 className='text-uppercase'>Start Framework</h1>
            </div>
        </div>

  )
}

export default Home
