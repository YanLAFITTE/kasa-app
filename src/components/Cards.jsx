import { Link } from 'react-router-dom';

const Card = (props) => {
    const cardsElements = props.cards.map((card) => (
        <Link key={card.id} to={`/rental/${card.id.toString()}`}>
            <div className="card">
                <img
                    className="card-img"
                    src={card.cover}
                    alt='thumbnail'
                />
                <h4 className="card-title">{card.title}</h4>
            </div>
        </Link>
    ));
    return cardsElements;
};

export default Card;
