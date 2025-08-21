import { registerUserdb } from "../domains/user.js";

const registerUser = async (req, res) => {
    const { firstName, lastName, email, password } = req.body;

    try {
      const newUser = await registerUserdb(firstName, lastName, email, password);
      return res.status(201).json({ user: newUser });
    } catch (error) {
      console.log("Error:", error);
      return res.status(500).json({ error: "Unable to create new user" });
    }
}





export {registerUser};