import React from 'react';
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import avatar from '../../assets/avataaars.svg';


function Home() {
    return (
        <div className='home'>
            <div className='container'>
                <div className='card border-0 align-items-center py-5 text-white bg-transparent text-center'>
                    <img src={avatar} className="card-img-top my-3" alt="avatar" style={{ width: '18rem' }} />
                    <div className="card-body d-flex flex-column gap-3">
                        <h1 className="card-title text-uppercase">Start Framework</h1>
                        <span className='icon position-relative m-auto' style={{ width: '4rem' }}><i className="bi bi-star-fill"/></span>
                        <p>Graphic Artist - Web Designer - Illustrator</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
