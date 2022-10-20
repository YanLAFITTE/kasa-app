
import classes from "./Banner.module.css";

export default function Banner(props) {
  return (
    <div className={classes.banner}>
      <img className={classes.imageBanner} src={props.banner} alt="banner" />
      {props.text && <h3 className={classes.textBanner}>Chez vous, partout et ailleurs</h3>}
    </div>
  );
}
             