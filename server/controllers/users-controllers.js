const config = require("config");
const jwt = require("jsonwebtoken");

const HttpError = require("../helpers/http-error");
const User = require("../models/user");

/* Getting user by user id */
const getUserById = async (req, res, next) => {
  const userId = req.params.uid;
  let user;

  try {
    user = await User.findOne({ _id: userId }, "-password");
  } catch (err) {
    const error = new HttpError(err.message, 500);
    return next(error);
  }

  res.json({ user: user.toObject({ getters: true }) });
};

/* Getting All users */
const getUsers = async (req, res, next) => {
  let users;

  try {
    users = await User.find({}, "-password");
  } catch (err) {
    const error = new HttpError(err.message, 500);
    return next(error);
  }

  res.json(
    //{ data: { users, } }
    { data: { users: res.paginatedResult } }
    );
};

/* Getting user by user name */
const getUserByUserName = async (req, res, next) => {
  const userName = req.query.u;

  if (!userName) {
   return next();
  }

  let user;

  try {
    user = await User.findOne({ username: userName }, "-password");
  } catch (err) {
    const error = new HttpError(err.message, 500);
    return next(error);
  }

  res.json({ user: user.toObject({ getters: true }) });
};

/* User registration */
const signup = async (req, res, next) => {
  const { firstName, lastName, username, email, password } = req.body;

  let existingUser;
  try {
    existingUser = await User.findOne({ email });
  } catch (err) {
    const error = new HttpError(err.message, 500);
    return next(error);
  }

  if (existingUser) {
    const error = new HttpError(
      "User exits already, please login insead.",
      422
    );
    return next(error);
  }

  let existingUserName;

  try {
    existingUserName = await User.findOne({ username });
  } catch (err) {
    const error = new HttpError(err.message, 500);
    return next(error);
  }

  if (existingUserName) {
    const error = new HttpError(
      "Username has taken, please chose another.",
      422
    );
    return next(error);
  }

  const createdUser = new User({
    firstName,
    lastName,
    username,
    email,
    password,
    image: req.file.path,
    chats: [],
    contacts: [],
    createdAt: Date.now(),
  });

  try {
    await createdUser.save();
  } catch (err) {
    const error = new HttpError(err.message, 500);
    return next(error);
  }

  res.status(201).json({ data: { message: "Success!" } });
};

/* User login */
const login = async (req, res, next) => {
  // ToDo - add parameters validation in the future
  const { email, password } = req.body;

  console.log(req.body);

  let existingUser;

  try {
    existingUser = await User.findOne({ email: email });
  } catch (err) {
    const error = new HttpError(err.message, 500);
    return next(error);
  }

  if (!existingUser || existingUser.password !== password) {
    const error = new HttpError(
      "Cloud not identify user, credentials seem to be wrong.",
      401
    );
    return next(error);
  }

  const token = jwt.sign(
    { id: existingUser._id },
    config.get("jwtSecret")
    // { expiresIn: '3h' }
  );

  res.status(200).json({ data: { token, message: "Success!" } });
};

/* User edit profile */
const updateProfile = async (req, res, next) => {
  // ToDo - add parameters validation in the future
  //const { username, password, id } = req.body;
  const { firstName, lastName, username, password } = req.body;
  const userId = req.user.id;

  let user;

  try {
    user = await User.findById(userId);

    if (!user) {
      const error = new HttpError(
        "Fetching users failed, please try again later.",
        500
      );
      return next(error);
    }
  } catch (err) {
    const error = new HttpError(err.message, 500);
    return next(error);
  }

  let existingUserName;

  try {
    existingUserName = await User.findOne({ username });
  } catch (err) {
    const error = new HttpError(err.message, 500);
    return next(error);
  }

  if (existingUserName) {
    const error = new HttpError(
      "Username has taken, please chose another.",
      422
    );
    return next(error);
  }

  user.firstName = !!firstName ? firstName : user.firstName;
  user.lastName = !!lastName ? lastName : user.lastName;
  user.lastName = !!username ? username : user.username;
  user.password = !!password ? password : user.password;
  user.image = !!req.file.path ? req.file.path : user.image;

  try {
    await user.save();
  } catch (err) {
    const error = new HttpError(err.message, 500);
    return next(error);
  }

  res
    .status(200)
    .json({ data: { user: `/api/users/${user._id}`, message: "Success!" } });
};

module.exports = {
  getUsers,
  getUserById,
  getUserByUserName,
  signup,
  login,
  updateProfile,
};
