import classes from "./Dropdown.module.css";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";

const Dropdown = (props) => {
  return (
    <div className={classes.dropdown}>
      <button className={classes.btn} onClick={props.handleOpen}>
        {props.title}
        {!props.open && <IoChevronDown className={classes.icon} />}
        {props.open && <IoChevronUp className={classes.icon} />}
      </button>
      {props.open && props.paragraph && (
        <p className={classes.p}>{props.paragraph}</p>
      )}
      {props.open && props.list && <ul className={classes.p}>{props.list}</ul>}
    </div>
  );
};

export default Dropdown;
