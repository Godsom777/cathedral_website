import 'animate.css';
import '../styles/Announcements.css';
import IHS from '../assets/ihs';

function ImageSection() {
    return (
        <>
            <div className='center-content'>
            <IHS />
            <h2 style={{ paddingTop: '2em' }} >Message From The Conclaves</h2>
  
        <div className="image-section">
       
            <div className="animate__animated animate__slideInLeft image-text-container">
                {/*image 1*/}
                <div>
                <img src="./images/Pope-francis.png" alt="description_1" className="image" />
                <p >May the Lord comfort their families, above all those who anxiously await news of their loved ones, and ensure them comfort and hope...<a>Read more</a></p>
                </div>
            </div>
            <div className="animate__animated animate__slideInLeft image-text-container">

                {/*Image 2*/}
                <div>
                <img src="./images/archbishop.png" alt="description_1" className="image" />
                <p >We are celebrating Easter this year in an atmosphere that is beclouded by uncertainty, tension, and pessimism...<a>Read More</a></p>
                </div>
            </div>
                </div>
                </div>
        </>
    );
}

export default ImageSection;