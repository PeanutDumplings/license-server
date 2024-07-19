import type { Handler } from "express";

export const get: Handler = async (req, res) => {
    if (req.method !== "GET") return res.status(405);
    console.log(req.query);
    res.status(200).json({ message: "Hello World" });
};

// localhost:3000/api/v1/licenses/auth?key={key}&product={product}
