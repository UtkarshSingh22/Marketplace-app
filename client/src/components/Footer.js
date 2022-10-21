import "../booking/Home.module.css";

const Footer = (props) => {
    const classes = `${props.className}`;
    return (
        <footer className={classes} {...props}>
            <p>
                Copyright © {new Date().getFullYear()} by Hotelswind, Inc. All
                rights reserved.
            </p>
        </footer>
    );
};

export default Footer;
