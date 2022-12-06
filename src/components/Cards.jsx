import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

/**
 *
 * @param {*} props create cards elemnts component
 * @returns cards elemets
 */

const Cards = ({ cards }) => {
    const cardsElements = cards.map((card) => (
        <Link key={card.id} to={`${card.id.toString()}`}>
            <div className='card'>
                <img className='card-img' src={card.cover} alt={card.id} />
                <h3 className='card-title'>{card.title}</h3>
            </div>
        </Link>
    ));
    return cardsElements;
};

Cards.propTypes = {
    cards: PropTypes.array.isRequired,
};

export default Cards;
