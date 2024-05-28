const userModel = require("../model/userSchema");
const emailValidator = require("email-validator");
const bcrypt = require("bcrypt");

const signup = async (req, res, next) => {
  try {
    const { name, email, password, confirmPassword } = req.body;

    if (!name || !email || !password || !confirmPassword) {
      return res.status(400).json({
        success: false,
        message: "All fields are required.",
      });
    }

    if (password !== confirmPassword) {
      return res.status(400).json({
        success: false,
        message: "Passwords do not match.",
      });
    }

    if (!emailValidator.validate(email)) {
      return res.status(400).json({
        success: false,
        message: "Invalid email address!",
      });
    }

    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "Email already exists.",
      });
    }

    const userInfo = new userModel({ name, email, password });
    const result = await userInfo.save();

    return res.status(200).json({
      success: true,
      message: "Registered successfully!",
      data: result,
    });
  } catch (error) {
    console.error("Error during signup:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error. Can't save in database!",
    });
  }
};

const signin = async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({
      success: false,
      message: "Every field is mandatory.",
    });
  }

  try {
    const user = await userModel.findOne({ email }).select("+password");

    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(400).json({
        success: false,
        message: "Invalid user or password.",
      });
    }

    const token = user.jwtToken();
    user.password = undefined;

    const cookieOption = {
      maxAge: 24 * 60 * 60 * 1000,
      httpOnly: false,
    };

    res.cookie("token", token, cookieOption);

    res.status(200).json({
      success: true,
      data: user,
    });
  } catch (error) {
    console.error("Error during signin:", error);
    res.status(500).json({
      success: false,
      message: error.message || "Internal server error.",
    });
  }
};

const getUser = async (req, res, next) => {
  const userId = req.user.id;

  try {
    const user = await userModel.findById(userId);
    return res.status(200).json({
      success: true,
      data: user,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

const logout = async (req, res) => {
  try {
    const cookieOption = {
      expires: new Date(),
      httpOnly: false,
    };
    res.cookie("token", null, cookieOption);
    res.status(200).json({
      success: true,
      message: "Logged out successfully",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

const updateAddress = async (req, res) => {
  const userId = req.user.id;
  const { street, city, state, zip, country } = req.body;

  if (!street || !city || !state || !zip || !country) {
    return res.status(400).json({
      success: false,
      message: "All address fields are required.",
    });
  }

  try {
    const user = await userModel.findById(userId);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found.",
      });
    }

    user.address = { street, city, state, zip, country };
    await user.save();

    return res.status(200).json({
      success: true,
      message: "Address updated successfully.",
      data: user.address,
    });
  } catch (error) {
    console.error("Error updating address:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error. Can't update address.",
    });
  }
};

const getAddress = async (req, res) => {
  const userId = req.user.id;

  try {
    const user = await userModel.findById(userId);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found.",
      });
    }

    return res.status(200).json({
      success: true,
      data: user.address,
    });
  } catch (error) {
    console.error("Error retrieving address:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error. Can't retrieve address.",
    });
  }
};

module.exports = {
  signup,
  signin,
  getUser,
  logout,
  updateAddress,
  getAddress,
};
