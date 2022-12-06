import PropTypes from 'prop-types';

/**
 *
 * @param {*} props create banner component
 * @returns banner
 */

const Banner = ({ banner, text }) => {
    return (
        <div className='banner'>
            <img className='image-banner' src={banner} alt='banner' />
            {text && (
                <h3 className='text-banner'>Chez vous, partout et ailleurs</h3>
            )}
        </div>
    );
};

Banner.prototype = {
    banner: PropTypes.string.isRequired,
    text: PropTypes.bool,
};

export default Banner;
