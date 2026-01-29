import jwt from "jsonwebtoken";

export const authenticate = (event) => {
  const authHeader =
    event.headers?.Authorization ||
    event.headers?.authorization;

  if (!authHeader) {
    throw new Error("No authorization header");
  }

  
  const token = authHeader.split(" ")[1];

  if (!token) {
    throw new Error("Token missing");
  }

  try {
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET
    );

    return decoded;
  } catch (err) {
    throw new Error("Invalid or expired token");
  }
};
