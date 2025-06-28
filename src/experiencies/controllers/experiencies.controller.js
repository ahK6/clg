const { PrismaClient } = require("../../../prisma/prisma");

exports.createExperiencie = async (req, res) => {
  const prisma = new PrismaClient();
  const { name, dates } = req.body;

  console.log(JSON.stringify(dates, null, 2));
  try {
    const experience = await prisma.experiencies.create({
      data: {
        name,
      },
    });

    const result = await Promise.all(
      dates.map(async (item) => {
        return await prisma.experienciesDates.create({
          data: {
            experienceId: experience.id,
            date: item.date,
            availables: parseInt(item.availables),
          },
        });
      })
    );

    if (!experience) {
      throw new Error();
    }
    res.status(201).json({
      message: "Experiencia creada exitosamente",
      experience: { details: experience, dates: result },
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Error creando experiencia" });
  } finally {
    await prisma.$disconnect();
  }
};
