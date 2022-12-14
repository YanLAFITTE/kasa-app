import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

/**
 *
 * @param {*} props create cards elemnts component
 * @returns cards elemets
 */

const Cards = ({ card }) => {
    return (
        <Link to={`${card.id.toString()}`}>
            <div className='card'>
                <img
                    className='card-img'
                    src={card.cover}
                    alt={card.id}
                />
                <h3 className='card-title'>{card.title}</h3>
            </div>
        </Link>
    );
};

/** PropTypes ensure the typing of the data */

Cards.propTypes = {
    card: PropTypes.object.isRequired,
};

export default Cards;
