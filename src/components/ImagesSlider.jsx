import { useState } from 'react';
import { MdArrowForwardIos, MdArrowBackIos } from 'react-icons/md';
import PropTypes from 'prop-types';

/**
 *
 * @param {*} props create slider component
 * @returns image slider
 */

/**
 *  The "slides" images array is browsed to display the first photo (the state of "current" is initialized to 0)
 *  Applied a class to images according to their index
 *  The "nextSlide" and "prevSlide" functions allow to advance or rewind the current image
 */

const ImagesSlider = ({ slides }) => {
    const [current, setCurrent] = useState(0);
    const length = slides.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };
    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    if (!Array.isArray(slides) || length <= 0) {
        return null;
    }

    let bulletElements;
    if (current >= 0) {
        bulletElements = slides.map((slide, index) => (
            <span
                className={
                    index === current
                        ? 'slider-bullet-active slider-bullets'
                        : 'slider-bullets'
                }
                key={index}
            ></span>
        ));
    }

    return (
        <div className='slider'>
            {length > 1 && (
                <>
                    <MdArrowBackIos
                        className='left-arrow'
                        onClick={prevSlide}
                    />

                    <MdArrowForwardIos
                        className='rigth-arrow'
                        onClick={nextSlide}
                    />
                </>
            )}
            {slides.map((slide, index) => {
                return (
                    <div
                        className={
                            index === current
                                ? 'slide-active'
                                : 'slide-inactive'
                        }
                        key={index}
                    >
                        {index === current && (
                            <img
                                src={slide}
                                alt='pictures slider'
                                className='slider-image'
                            />
                        )}
                    </div>
                );
            })}
            {length > 1 && (
                <div className='slider-bullets-index'>
                    {/* {current + 1}/{length} */}
                    {bulletElements}
                </div>
            )}
        </div>
    );
};

/** PropTypes ensure the typing of the data */

ImagesSlider.propTypes = {
    slides: PropTypes.array.isRequired,
};

export default ImagesSlider;
