const { PrismaClient } = require("../../../prisma/prisma");
const bcrypt = require("bcrypt");

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
