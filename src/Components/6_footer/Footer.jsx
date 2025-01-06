import React from 'react';
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Footer() {
    return (
        <div className='footer position-relative mt-5'>
            <div className="container">
                <div className="row py-5">
                    <div className="col-md-4 mb-5 mb-md-0">
                        <div className="content text-center">
                            <h3>LOCATION</h3>
                            <p>2215 John Daniel Drive</p>
                            <p>Clark, MO 65243</p>
                        </div>
                    </div>

                    <div className="col-md-4 mb-5 mb-md-0">
                        <div className="content text-center">
                            <h3>AROUND THE WEB</h3>
                            <div className='d-flex flex-row align-content-center justify-content-center gap-2'>
                                <span className='align-content-center'><i className="bi bi-facebook" /></span>
                                <span className='align-content-center'><i className="bi bi-twitter" /></span>
                                <span className='align-content-center'><i className="bi bi-linkedin" /></span>
                                <span className='align-content-center'><i className="bi bi-globe" /></span>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 mb-5 mb-md-0">
                        <div className="content text-center">
                            <h3>ABOUT FREELANCER</h3>
                            <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='copyright position-absolute top-100 w-100'><p className='text-center py-3'>Copyright © Your Website 2021</p></div>
        </div>
    )
}

export default Footer
