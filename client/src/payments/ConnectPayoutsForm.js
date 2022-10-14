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
        <form onSubmit={formSubmitHandler}>
            <label htmlFor="name">Name</label>
            <input
                type="text"
                id="name"
                onChange={nameInputHandler}
                value={nameInput}
            />
            <label htmlFor="accountNum">Account Number</label>
            <input
                type="number"
                id="accountNum"
                onChange={accountNumHandler}
                value={accountNum}
            />
            <label htmlFor="ifsc">IFSC Code</label>
            <input type="text" id="ifsc" onChange={ifscHandler} value={ifsc} />

            <button type="submit">Add account</button>
        </form>
    );
};

export default ConnectPayoutsForm;
