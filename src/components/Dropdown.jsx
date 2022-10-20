import classes from "./Dropdown.module.css";

const Dropdown = (props) => {
  console.log(props);
  return (
    <div className={classes.dropdown}>
      <button className={classes.btn} onClick={props.handleOpen}>
        {props.title}
        {!props.open && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="currentColor"
            className={classes.icon}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        )}
        {props.open && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="currentColor"
            className={classes.icon}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 15.75l7.5-7.5 7.5 7.5"
            />
          </svg>
        )}
      </button>
      {props.open && <p className={classes.p}>{props.paragraph}</p>}
    </div>
  );
};

export default Dropdown;
