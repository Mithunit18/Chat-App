import jwt from "jsonwebtoken";

export const generateToken = (userID, res) => {
    const token = jwt.sign({ userId: userID }, process.env.JWT_SECRET, {
        expiresIn: "7d",
    });

    res.cookie("jwt", token, {
        maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
        httpOnly: true,
        sameSite: "strict",
        secure: process.env.NODE_ENV !== "development", // set to true in production
    });

    return token;
};