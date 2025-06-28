const { PrismaClient } = require("../../../prisma/prisma");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.signUp = async (req, res) => {
  const prisma = new PrismaClient();
  const { name, email, password } = req.body;
  const encryptedPass = bcrypt.hashSync(password, 16);

  try {
    const user = await prisma.users.create({
      data: {
        name,
        email,
        password: encryptedPass,
      },
    });
    res.status(201).json({ message: "User created successfully", user });
  } catch (error) {
    res.status(500).json({ error: "Error creating user" });
  } finally {
    await prisma.$disconnect();
  }
};

exports.login = async (req, res) => {
  const prisma = new PrismaClient();
  const { email, password } = req.body;

  try {
    const user = await prisma.users.findUnique({
      where: { email },
    });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const isPasswordValid = bcrypt.compareSync(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: "Invalid password" });
    }

    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    res.status(200).json({ message: "Login successful", token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error logging in" });
  } finally {
    await prisma.$disconnect();
  }
};
