import { IoIosStar } from 'react-icons/io';
import PropTypes from 'prop-types';

/**
 *
 * @param {*} props create star component
 * @returns stars
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

Stars.propTypes = {
    rating: PropTypes.string.isRequired,
};

export default Stars;
