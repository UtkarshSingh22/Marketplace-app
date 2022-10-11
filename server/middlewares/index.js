var { expressjwt: jwt } = require("express-jwt");

export const requireSignIn = jwt({
    secret: toString(process.env.JWT_SECRET),
    algorithms: ["HS256"],
});
