import PropTypes from 'prop-types';

/**
 *
 * @param {*} props create tag component
 * @returns tags
 */

const Tags = ({ tag }) => {
    return <span className='tag-infos'>{tag}</span>;
};

Tags.propTypes = {
    tag: PropTypes.string,
};

export default Tags;
