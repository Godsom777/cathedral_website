import React from 'react';
import 'animate.css';

type MiniCarouselProps = {
    content: React.ReactNode[];
};

class MiniCarousel extends React.Component<MiniCarouselProps> {
    render() {
        const { content } = this.props;
        return (
            <div className='mini-carousel'>
                {content.map((slide, index) => (
                    <div className='slide-container animate__animated animate__fadeIn' key={index}>
                        <div className='slide-column'>{slide}</div>
                    </div>
                ))}
            </div>
        );
    }
}

export default MiniCarousel;