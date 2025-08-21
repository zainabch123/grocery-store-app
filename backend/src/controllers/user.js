import { registerUserdb, loginUserdb } from "../domains/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const secret = process.env.JWT_SECRET;

const registerUser = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const newUser = await registerUserdb(
      firstName,
      lastName,
      email,
      hashedPassword
    );
    const token = jwt.sign({ id: newUser.id }, secret);
    return res.status(201).json({ user: newUser, token });
  } catch (error) {
    console.log("Error:", error);
    return res.status(500).json({ error: "Unable to create new user" });
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const currentUser = await loginUserdb(email, password);

    const validPassword = await bcrypt.compare(password, currentUser.password);

    if (!validPassword) {
      return res.status(401).json({ error: "Invalid Password" });
    }

    const token = jwt.sign({ id: currentUser.id }, secret);

    return res.status(200).json({ user: currentUser, token });
  } catch (error) {
    console.log("Error", error);
  }
};

export { registerUser, loginUser };
