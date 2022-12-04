import { useState } from 'react';
import { MdArrowForwardIos, MdArrowBackIos } from 'react-icons/md';

const ImagesSlider = (props) => {
    const [current, setCurrent] = useState(0);
    const length = props.slides.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };
    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    if (!Array.isArray(props.slides) || length <= 0) {
        return null;
    }

    let bulletElements;
    if (current >= 0) {
        bulletElements = props.slides.map((slide, index) => (
            <span
                className={
                    index === current
                        ? 'slider-bullets'
                        : 'slider-bullet-active slider-bullets'
                }
                key={index}
            ></span>
        ));
    }

    return (
        <section className='slider'>
            {props.currentRental.isLoading && (
                <p style={{ textAlign: 'center', padding: '2rem' }}>
                    Loading...
                </p>
            )}
            {props.currentRental.error && <p>{props.currentRental.error}</p>}
            {length > 1 && (
                <MdArrowBackIos className='left-arrow' onClick={prevSlide} />
            )}
            {length > 1 && (
                <MdArrowForwardIos
                    className='rigth-arrow'
                    onClick={nextSlide}
                />
            )}
            {props.slides.map((slide, index) => {
                return (
                    <div
                        className={index === current ? 'slide-active' : 'slide-inactive'}
                        key={index}
                    >
                        {index === current && (
                            <img
                                src={slide}
                                alt='slider'
                                className='slider-image'
                            />
                        )}
                    </div>
                );
            })}
            {length > 1 && (
                <div className='slider-bullets-index'>{bulletElements}</div>
            )}
        </section>
    );
};

export default ImagesSlider;
