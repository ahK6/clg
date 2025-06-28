const { PrismaClient } = require("../../../prisma/prisma");
const dayjs = require("dayjs");

exports.makeReservation = async (req, res) => {
  const prisma = new PrismaClient();
  const { experiencieDateId, quantity, userId } = req.body;

  try {
    const experienceDate = await prisma.experienciesDates.findUnique({
      where: {
        id: parseInt(experiencieDateId),
      },
    });

    const reservations = await prisma.reservations.findFirst({
      where: {
        experienceDateId: parseInt(experiencieDateId),
        userId: parseInt(userId),
      },
    });

    if (reservations) {
      return res
        .status(400)
        .json({ error: "Ya tienes una reserva para esta fecha" });
    }

    if (!experienceDate) {
      return res
        .status(404)
        .json({ error: "Fecha de experiencia no encontrada" });
    }

    const currentDate = dayjs();
    const dateToBook = dayjs(experienceDate.date);

    if (currentDate.isAfter(dateToBook)) {
      return res
        .status(400)
        .json({ error: "La fecha de la experiencia ya ha pasado" });
    }

    if (experienceDate.availables <= 0) {
      return res
        .status(400)
        .json({ error: "No hay disponibilidad para esta fecha" });
    }

    if (experienceDate.availables < quantity) {
      return res.status(400).json({
        error: `Solo quedan ${experienceDate.availables} disponibles`,
      });
    }

    const reservation = await prisma.reservations.create({
      data: {
        amount: parseInt(quantity),
        experienceId: experienceDate.experienceId,
        experienceDateId: parseInt(experiencieDateId),
        userId: parseInt(userId),
      },
    });

    await prisma.experienciesDates.update({
      where: {
        id: parseInt(experiencieDateId),
      },
      data: {
        availables: {
          decrement: parseInt(quantity),
        },
      },
    });

    return res.status(201).json({
      message: "Reserva creada exitosamente",
      reservation,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Error creando reserva" });
  } finally {
    await prisma.$disconnect();
  }
};
