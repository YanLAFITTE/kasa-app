import { IoIosStar } from 'react-icons/io';
import PropTypes from 'prop-types';

/**
 *
 * @param {*} props create star component
 * @returns stars
 */

/**
 *  Create an array of 5 stars wich is browsed in order to render each elements
 *  Rating determines classe of the stars in order to apply desired color
 */

const Stars = ({ rating }) => {
    const totalStars = 5;
    const starRating = parseInt(rating);
    const starElements = [...new Array(totalStars)].map((arr, index) => {
        return (
            <IoIosStar
                key={index}
                className={index < starRating ? 'star-active' : 'star'}
            />
        );
    });

    return starElements;
};

/** PropTypes ensure the typing of the data */

Stars.propTypes = {
    rating: PropTypes.string.isRequired,
};

export default Stars;
