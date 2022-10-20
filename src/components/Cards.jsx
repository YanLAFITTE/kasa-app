import classes from "./Cards.module.css";
import { Link } from "react-router-dom";

 const Card = (props) => {
  const cardsElements = props.cards.map((card) => (
    <Link key={card.id} to={card.id.toString()}>
      <div className={classes.card}>
        <img className={classes.cardImg} src={card.cover} alt={card.title} />
        <h4 className={classes.cardTitle}>{card.title}</h4>
      </div>
    </Link>
  ));
  return <div className={classes.cardContainer}>{cardsElements}</div>;
}

export default Card;