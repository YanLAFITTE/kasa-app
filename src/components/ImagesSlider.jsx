import { useState } from 'react';
import { MdArrowForwardIos, MdArrowBackIos } from 'react-icons/md';
import classes from './ImagesSlider.module.css';

const ImagesSlider = (props) => {
    const [current, setCurrent] = useState(0);
    const length = props.slides.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };
    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    if (!Array.isArray(props.slides) || props.slides.length <= 0) {
        return null;
    }

    return (
        <section className={classes.slider}>
            <MdArrowBackIos className={classes.leftArrow} onClick={prevSlide} />
            <MdArrowForwardIos
                className={classes.rigthArrow}
                onClick={nextSlide}
            />
            {props.slides.map((slide, index) => {
                return (
                    <div
                        className={
                            index === current ? classes.active : classes.slide
                        }
                        key={index}
                    >
                        {index === current && (
                            <img
                                src={slide}
                                alt='slider'
                                className={classes.image}
                            />
                        )}
                    </div>
                );
            })}
        </section>
    );
};

export default ImagesSlider;
