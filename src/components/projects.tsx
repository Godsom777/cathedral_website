import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery'
import 'popper.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import IHS from '../assets/ihs';
import 'animate.css'; // import animate.css

function Projects() {
    return (
        <>
            <div className=' center-content'>
            <IHS />

            <section className="py-12 py-md-24 bg-light-light bg-gradient animate__animated animate__fadeIn">
                <div className="container">
                    <h4 className="fw-medium center-content mb-20 animate__animated animate__fadeInDown">Recent Project</h4>
                    <div className="mw-lg mw-lg-xl mx-auto mw-xl-none animate__animated animate__fadeInUp"> {/* Add animation class here */}
                        <div className="row">
                            <div className="col-12 col-xl-6 mb-4 mb-xl-0 ">
                                <div className="h-100 border rounded-5 animate__animated animate__fadeInLeft "> {/* Add animation class here */}
                                    <img className="d-block mb-16 w-100 img-fluid rounded-5" style={{height: 370 }} src="./images/DSC_1252.jpg" alt="" />
                                    <div className="px-6 px-md-14 pb-16 pb-5 px-md-4 px-5 text-left ">
                                        <span className="badge mb-4 bg-dark text-white animate__animated animate__zoomIn">ICT</span> {/* Add animation class here */}
                                        <span className="d-block fs-3 mb-4 animate__animated animate__zoomIn">Computer Training Program</span> {/* Add animation class here */}
                                        <p className="fw-medium mb-8 fs-6 animate__animated animate__zoomIn">The launching of the New Information Communication Technology Digital Skill Center, on 17th March 2024, by His. Lordship, Archbishop of Owerri, Bishop Ugwuorji </p> {/* Add animation class here */}
                                        <a className="btn btn-light-light fw-semibold p-0 pb-2 border-0 border-2 border-dark border-bottom rounded-0 animate__animated animate__zoomIn" href="#"> {/* Add animation class here */}
                                            <span className="me-3">See all projects</span>
                                            <svg className="rotate-45" width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M9.5 1.5L1.5 9.5" stroke="black" stroke-width="1.3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
                                                <path d="M9.5 8.83571V1.5H2.16429" stroke="black" stroke-width="1.3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Another Project 2 */}
                            <div className="col-12 col-xl-6 animate__animated animate__fadeInRight"> {/* Add animation class here */}
                                <a className="btn mb-3 p-0 w-100 text-start border rounded-5 animate__animated animate__zoomIn" href="#"> {/* Add animation class here */}
                                    <div className="row mx-0 justify-content-between">
                                        <div className="col-12 col-md-7 ps-6 ps-sm-12 pe-5 py-0 align-self-center">
                                            <div className="mw-xs py-16 py-xl-8">
                                                <span className="badge mb-4 red text-dark animate__animated animate__zoomIn">Education</span> {/* Add animation class here */}
                                                <span className="d-block fs-3 mb-4 animate__animated animate__zoomIn">Return on investment</span> {/* Add animation class here */}
                                                <p className="mb-0 fs-6 animate__animated animate__zoomIn">We follow the RIBA Plan of Work 2020 to ensure an orderly framework and project clarity from the outset. First, we conduct</p> {/* Add animation class here */}
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-5 p-0">
                                            <img className="img-fluid w-100 rounded-5" style={{ height: 370 }} src="./images/DSC_1252.jpg" alt="" />
                                        </div>
                                    </div>

                                    {/* Another one 3 */}
                                </a>
                                <a className="btn p-0 w-100 text-start border rounded-5 animate__animated animate__zoomIn" href="#"> {/* Add animation class here */}
                                    <div className="row mx-0 justify-content-between">
                                        <div className="col-12 col-md-7 ps-6 ps-sm-12 pe-5 py-0 align-self-center">
                                            <div className="mw-xs py-16 py-xl-16 pt-lg-4">
                                                <span className="badge mb-4 text-dark animate__animated animate__zoomIn">ICTe</span> {/* Add animation class here */}
                                                <span className="d-block fs-3 mb-4 animate__animated animate__zoomIn">Return on investment</span> {/* Add animation class here */}
                                                <p className="mb-0 fs-6 animate__animated animate__zoomIn">We follow the RIBA Plan of Work 2020 to ensure an orderly framework and project clarity from the outset. First, we conduct</p> {/* Add animation class here */}
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-5 p-0">
                                            <img className="img-fluid w-100 rounded-5" style={{ height: 370 }} src="./images/DSC_1252.jpg" alt="" />
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <button className='btn myLarge-btn2'>Donate</button>
            </section>
            </div>
        </>
    )
}

export default Projects;