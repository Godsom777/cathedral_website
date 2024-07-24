import { useState, useRef, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Section3.css';
import IHS from '../assets/ihs';

const Section3 = () => {
    const texts = ['Communion', 'Priests', 'Parishes', 'Baptism', 'Confession', 'Other Sacraments'];
    const descriptions = [
        'Get info about Communion Times, Schedules and Procedures',
        'Check the latest News on Priest-hood and ordinations ',
        'All Parishes Under Owerri Archdiocese', 
        'Information for Confessions Times and Procedures', 
        'Find out the processes involves in both Infant and Adult Baptism',
        'Information for Other Sacraments Like wedding, Extreme Unction etc.'];

    const [description, setDescription] = useState('');
    const [showLeftArrow, setShowLeftArrow] = useState(false);
    const [showRightArrow, setShowRightArrow] = useState(true);

    const scrollableDivRef = useRef(null);

 const handleScroll = () => {
    if (scrollableDivRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollableDivRef.current;
        setShowLeftArrow(scrollLeft > 0);
        setShowRightArrow(scrollLeft < scrollWidth - clientWidth);
    }
};

    useEffect(() => {
        handleScroll(); // check initial scroll position
    }, []);

    const handleMouseEnter = (index: number) => {
        setDescription(descriptions[index]);
    };

    const handleMouseLeave = () => {
        setDescription('');
    };

    return (
        <>
            <div className='nde-ishi center-content'>
                <IHS />
                <h2>Find Out About...</h2>
                <hr style={{ width: '100px', height: '5px', backgroundColor: 'orange', margin: '0 auto' }} />
                <div className="Section3 container-fluid">
                {showLeftArrow && <div className="arrow left">&lt; &lt;</div>}
                {showRightArrow && <div className="arrow right">&gt; &gt;</div>}

                    <div className="row flex-row flex-nowrap overflow-auto" ref={scrollableDivRef} onScroll={handleScroll}>
                        {texts.map((text, index) => (
                            <div key={index} className="col-3 row-sm-2" onMouseEnter={() => handleMouseEnter(index)} onMouseLeave={handleMouseLeave}>
                                <div className="card card-block d-flex align-items-center justify-content-center text-center position-relative p-5">
                                    <img src={`./images/find_out/image${index + 1}.jpeg`} className="img-thumbnail position-absolute w-100 h-100" alt={`Image ${index + 1}`} />
                                    <button className=" animate__animated animate_fadeIn">{text}</button>
                                </div>
                            </div>
                        ))}
                    </div>
                   
                </div>
                {description && <h5 className='bigText_description animate__animate animate__bounceInDown'>{description}</h5>}
            </div>
        </>
    );
};

export default Section3;