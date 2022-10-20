import styles from "./Button.module.css";

const Button = (props) => {
    const classes = props.className;

    return (
        <button
            className={`${classes} ${styles.button}`}
            onClick={props.onClick}
        >
            {props.children}
        </button>
    );
};

export default Button;
