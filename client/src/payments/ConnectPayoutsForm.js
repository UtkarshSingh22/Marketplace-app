import styles from "./ConnectPayouts.module.css";

const ConnectPayoutsForm = ({
    nameInput,
    accountNum,
    ifsc,
    nameInputHandler,
    accountNumHandler,
    ifscHandler,
    formSubmitHandler,
}) => {
    return (
        <form onSubmit={formSubmitHandler} className={styles.form}>
            <div>
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    id="name"
                    onChange={nameInputHandler}
                    value={nameInput}
                />
            </div>
            <div>
                <label htmlFor="accountNum">Account Number</label>
                <input
                    type="number"
                    id="accountNum"
                    onChange={accountNumHandler}
                    value={accountNum}
                />
            </div>
            <div>
                <label htmlFor="ifsc">IFSC Code</label>
                <input
                    type="text"
                    id="ifsc"
                    onChange={ifscHandler}
                    value={ifsc}
                />
            </div>

            <button type="submit">Add account</button>
        </form>
    );
};

export default ConnectPayoutsForm;
