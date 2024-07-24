
import TodayInChurch from '../components/TodayInChurch';
import SocialMediaBox from '../assets/SocialMediaBox';

const Hero = () => {
    return (
        <>

            <div className="carousel-container ">
                <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="./images/0 (1).jpg" className="d-block w-100" alt="Hero" />
                            <div className="carousel-caption d-none d-md-block text-white">
                                <h1>Welcome to Owerri Archdiocese  Official Website</h1>
                                <p className='subHeader'>Arch. Bishop Lucius Iwejuru Ugorji recieving the Pallium from Pope Francis in Rome, on that faithful day. Marking his tenure as the new arch bishop of Owerri Archdiocese. </p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src="./images/0 (2).jpg" className="d-block w-100" alt="Hero" />
                            <div className="carousel-caption d-none d-md-block">
                                <h1>Preacher of Hope and Representative of Christ</h1>
                                <p>Arch Bishop Lucius Ugorji giving the homily on one of his exquisite Masses at Maria Assumpta Cathedral Owerri</p>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
            <div className='Hero-contents'>
                <div className='TodayInTheChurch'>
                <h4>Assumpta Today</h4>
                <div className=''>
                    <TodayInChurch />
                </div>
                </div>
                <div className='socialMedia myLarge-btn3'> 
                    
                <SocialMediaBox />
                </div>
            </div>
        

        </>

    );
};

export default Hero;