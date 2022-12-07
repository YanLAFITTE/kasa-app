import PropTypes from 'prop-types';

/**
 *
 * @param {*} props create banner component
 * @returns banner
 */

const Banner = ({ banner, text }) => {
    return (
        <div className='banner'>
            <img className={text ? 'home-banner-img' : 'about-banner-img'} src={banner} alt='banner' />
            {text && (
                <h2 className='text-banner'>Chez vous, partout et ailleurs</h2>
            )}
        </div>
    );
};

Banner.prototype = {
    banner: PropTypes.string.isRequired,
    text: PropTypes.bool,
};

export default Banner;
