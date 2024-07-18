import UserModel from "../models/user.model.js";

export default class UserController {
  async registerUser(req, res) {
    const { fullName, email, password } = req.body;

    try {
      const record = new UserModel({
        fullName: fullName,
        email: email,
        password: password,
      });

      await record.save();
      res.status(200).json({ message: "Successfully Registered" });
    } catch (error) {
      res
        .status(401)
        .json({ message: `Failed to register the user with error: ${error}` });
    }
  }

  async authUser(req, res) {
    const { email, password } = req.body;
    try {
      const user = await UserModel.findOne({ email });
      if (user.password === password) {
        res.status(200).json({ user });
      } else {
        throw new Error("User not found");
      }
    } catch (error) {
      console.error("Failed to authenticate the user with error: ", error);
    }
  }

  async getAllUsers(req, res) {
    try {
      const users = await UserModel.find();
      res.status(200).json({ users });
    } catch (error) {
      res.status(401).json({ message: "Failed to fetch the users." });
    }
  }
}
