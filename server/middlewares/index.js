import { expressjwt } from "express-jwt";

export const requireSignIn = expressjwt({
    secret: toString(process.env.JWT_SECRET),
    algorithms: ["HS256"],
});
