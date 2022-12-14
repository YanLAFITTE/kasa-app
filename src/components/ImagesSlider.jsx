import { MdArrowForwardIos, MdArrowBackIos } from 'react-icons/md';
import PropTypes from 'prop-types';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

/**
 *
 * @param {*} props create slider component
 * @returns image slider
 */

/**
 * React slick is a carousel component built with React.
 * https://react-slick.neostack.com/
 */

const ImagesSlider = ({ slides }) => {
    const length = slides.length;
    if (!Array.isArray(slides) || length <= 0) {
        return null;
    }

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipeToSlide: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };

    function NextArrow({ onClick }) {
        return <MdArrowForwardIos className='rigth-arrow' onClick={onClick} />;
    }

    function PrevArrow({ onClick }) {
        return <MdArrowBackIos className='left-arrow' onClick={onClick} />;
    }

    return (
        <div className='slider'>
            <Slider {...settings}>
                {slides.map((slide, index) => {
                    return (
                        <div key={index}>
                            <img
                                src={slide}
                                alt='pictures slider'
                                className='slider-image'
                            />
                            <div className='counter'>
                                {index === 0 ? length : index}/{length}
                            </div>
                        </div>
                    );
                })}
            </Slider>
        </div>
    );
};

/** PropTypes ensure the typing of the data */

ImagesSlider.propTypes = {
    slides: PropTypes.array.isRequired,
};

export default ImagesSlider;
