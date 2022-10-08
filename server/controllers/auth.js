export const showMessage = (req, res, next) => {
    res.status(200).send(`${req.params.message}`);
};
