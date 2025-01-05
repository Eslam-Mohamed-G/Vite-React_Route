import React from 'react';
import "./style.css";

function About() {
    return (
        <>
            <div className='about py-md-5'>
                <div className="container py-md-5">
                    <div className="d-flex flex-column gap-3 align-items-center py-5 bg-transparent text-white text-center">
                        <h1 className='text-uppercase text-center'>about component</h1>
                        <span className='icon position-relative m-auto' style={{ width: '4rem' }}><i className="bi bi-star-fill"/></span>
                        <div className="d-flex flex-column flex-md-row w-75 text-start">
                            <p className='d-block'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization. </p>
                            <p className='d-block'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About
