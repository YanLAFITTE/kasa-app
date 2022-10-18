import imgBanner from "../assets/img-banner.png";
import classes from "./Banner.module.css";

export default function Banner() {
  return (
    <div className={classes.banner}>
      <img className={classes.imageBanner} src={imgBanner} alt="banner" />
      <h3 className={classes.textBanner}>Chez vous, partout et ailleurs</h3>
    </div>
  );
}
