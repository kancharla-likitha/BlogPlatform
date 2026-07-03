const fs = require("fs");
const path = require("path");
const bcrypt = require("bcryptjs");
const { v4: uuidv4 } = require("uuid");

const usersFile = path.join(__dirname, "../data/users.json");

// Register User
const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    let users = [];

    if (fs.existsSync(usersFile)) {
      const data = fs.readFileSync(usersFile, "utf8");
      users = data ? JSON.parse(data) : [];
    }

    const existingUser = users.find((user) => user.email === email);

    if (existingUser) {
      return res.status(400).json({
        message: "User already exists",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = {
      id: uuidv4(),
      name,
      email,
      password: hashedPassword,
    };

    users.push(newUser);

    fs.writeFileSync(usersFile, JSON.stringify(users, null, 2));

    res.status(201).json({
      message: "User registered successfully",
      user: {
        id: newUser.id,
        name: newUser.name,
        email: newUser.email,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

module.exports = {
  register,
};