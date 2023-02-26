const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: [true, "Please enter your name"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Please enter your email"],
      trim: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: [true, "Please enter your password"],
      trim: true,
      minLength: 8,
      maxLength: 30,
    },
    passwordConfirm: {
      type: String,
      required: [true, "Please enter your password confirmation"],
      trim: true,
      minLength: 8,
      maxLength: 30,
    },
  },
  {
    timestamps: true,
  }
);
