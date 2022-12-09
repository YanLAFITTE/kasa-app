import PropTypes from 'prop-types';

/**
 *
 * @param {*} props create tag component
 * @returns tags
 */

const Tags = ({ tag }) => {
    return <span className='tag-infos'>{tag}</span>;
};

/** PropTypes ensure the typing of the data */

Tags.propTypes = {
    tag: PropTypes.string.isRequired,
};

export default Tags;
