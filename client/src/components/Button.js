import styles from "./Button.module.css";

const Button = (props) => {
    const classes = props.className;

    return (
        <button
            className={`${classes} ${styles.commonButton}`}
            onClick={props.onClick}
            {...props}
        >
            {props.children}
        </button>
    );
};

export default Button;
