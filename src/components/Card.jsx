import classes from "./Card.module.css"
import imgCard from "../assets/logo-footer.png"

export default function Card() {
    return (
        <div className={classes.cardContainer}>
            <div className={classes.card}>
                <img src={imgCard} alt="" />
                <h4 className={classes.cardTitle}>Title</h4>
            </div>
            <div className={classes.card}>
                <img src={imgCard} alt="" />
                <h4 className={classes.cardTitle}>Title</h4>
            </div>
            <div className={classes.card}>
                <img src={imgCard} alt="" />
                <h4 className={classes.cardTitle}>Title</h4>
            </div>
            <div className={classes.card}>
                <img src={imgCard} alt="" />
                <h4 className={classes.cardTitle}>Title</h4>
            </div>
        </div>
    )
}