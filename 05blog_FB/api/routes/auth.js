const router = require("express").Router();
const User = require("../models/User");
// PasswordをmongoDBで暗号化する為bcryptを使用
const bcrypt = require("bcrypt");

// Resister
router.post("/resister", async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(req.body.password, salt);

    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPass,
    });
    const user = await newUser.save();
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Login
router.post("/login", async (req, res) => {
  try {
    // username
    const user = await User.findOne({
      username: req.body.username,
    });
    !user && res.status(400).json("Wrong username!");

    // password(第一引数にはresisterの際にpostした時のpassword。第二引数には、loginの時に入力したpasswordを。この両者を比較する。)
    const validate = await bcrypt.compare(req.body.password, user.password);
    !validate && res.status(400).json("Wrong Password!");

    const {password, ...others} = user._doc;
    res.status(200).json(others)
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;
