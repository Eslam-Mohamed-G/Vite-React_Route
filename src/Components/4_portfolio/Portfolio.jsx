import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import "./style.css";
import poert1 from '../../assets/poert1.png';
import port2 from '../../assets/port2.png';
import port3 from '../../assets/port3.png';

function Portfolio() {
    const PortfolioImage = [
        { id: 1, imageSrc: poert1, altText: "img1"},
        { id: 2, imageSrc: port2, altText: "img2"},
        { id: 3, imageSrc: port3, altText: "img3"},
        { id: 4, imageSrc: poert1, altText: "img4"},
        { id: 5, imageSrc: port2, altText: "img5"},
        { id: 6, imageSrc: port3, altText: "img6"},
    ];

    const [showModel, setShowModel] = useState(null);
    const handelShow = (img) => {setShowModel(img)};
    const handelClose = () => {setShowModel(null)};

    return (
        <div className='portfolio'>
            <div className="container py-md-5">
                <div className="d-flex flex-column gap-3 align-items-center bg-transparent text-white text-center">
                    <h1 className='text-uppercase text-center'>portfolio component</h1>
                    <span className='icon position-relative m-auto' style={{ width: '4rem' }}><i className="bi bi-star-fill" /></span>
                </div>

                <div className='row g-5 my-0'>
                    {PortfolioImage.map((item)=>(
                        <div className='col-lg-4 col-md-6' key={item.id}>
                            <div className='content rounded overflow-hidden position-relative' onClick={()=>handelShow(item)}>
                                <img className='w-100' src={item.imageSrc} alt={item.altText} />
                                <div className='bg-black position-absolute top-0 bottom-0 start-0 end-0 align-content-center text-center'>
                                    <span><i className="bi bi-plus text-white" /></span>
                                </div>
                            </div>
                        </div>
                    ))}

                    <Modal show={showModel !==null} onHide={handelClose} centered>
                        {showModel && (
                        <Modal.Body className="p-0">
                            <img className='w-100' src={showModel.imageSrc} alt={showModel.altText}/>
                        </Modal.Body>)}
                    </Modal>
                </div>

                {/* <div className="row g-5 my-0">
                    <div className='col-lg-4 col-md-6'>
                        <div className='content rounded overflow-hidden position-relative'>
                            <img className='w-100' src={poert1} alt="" />
                            <div className='bg-black position-absolute top-0 bottom-0 start-0 end-0 align-content-center text-center'>
                                <span><i className="bi bi-plus text-white" /></span>
                            </div>
                        </div>
                    </div>

                    <div className='col-lg-4 col-md-6'>
                        <div className='content rounded overflow-hidden position-relative'>
                            <img className='w-100' src={port2} alt="" />
                            <div className='bg-black position-absolute top-0 bottom-0 start-0 end-0 align-content-center text-center'>
                                <span><i className="bi bi-plus text-white" /></span>
                            </div>
                        </div>
                    </div>

                    <div className='col-lg-4 col-md-6'>
                        <div className='content rounded overflow-hidden position-relative'>
                            <img className='w-100' src={port3} alt="" />
                            <div className='bg-black position-absolute top-0 bottom-0 start-0 end-0 align-content-center text-center'>
                                <span><i className="bi bi-plus text-white" /></span>
                            </div>
                        </div>
                    </div>

                    <div className='col-lg-4 col-md-6'>
                        <div className='content rounded overflow-hidden position-relative'>
                            <img className='w-100' src={poert1} alt="" />
                            <div className='bg-black position-absolute top-0 bottom-0 start-0 end-0 align-content-center text-center'>
                                <span><i className="bi bi-plus text-white" /></span>
                            </div>
                        </div>
                    </div>

                    <div className='col-lg-4 col-md-6'>
                        <div className='content rounded overflow-hidden position-relative'>
                            <img className='w-100' src={port2} alt="" />
                            <div className='bg-black position-absolute top-0 bottom-0 start-0 end-0 align-content-center text-center'>
                                <span><i className="bi bi-plus text-white" /></span>
                            </div>
                        </div>
                    </div>

                    <div className='col-lg-4 col-md-6'>
                        <div className='content rounded overflow-hidden position-relative'>
                            <img className='w-100' src={port3} alt="" />
                            <div className='bg-black position-absolute top-0 bottom-0 start-0 end-0 align-content-center text-center'>
                                <span><i className="bi bi-plus text-white" /></span>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default Portfolio
