import { allShips } from "@/.contentlayer/generated";
import prisma from "@/db/prismaConnection";

const handler = async (req, res) => {
  if (req.method === "POST") {
    try {
      const { parent, id } = req.body;

      if (parent === undefined || id === undefined) {
        res.status(400).json({
          code: 400,
          message: "Bad Request!",
        });
        return;
      }

      const data = await prisma.ship.update({
        where: {
          id: id,
        },
        data: {
          views: {
            increment: 1,
          },
        },
      });

      res.status(201).json({
        code: 201,
        message: "Success.",
        stats: data,
      });
    } catch (err) {
      try {
        const { parent, id } = req.body;
        const content = allShips.find(
          (guide) => guide.slug === `${parent}/${id}`
        );

        if (content === undefined) {
          res.status(400).json({
            code: 400,
            message: "Bad Request",
          });
          return;
        }

        const data = await prisma.ship.create({
          data: {
            id: id,
            parent: parent,
            views: Math.floor(Math.random() * 50),
          },
        });

        res.status(201).json({
          code: 201,
          message: "Success.",
          stats: data,
        });
      } catch (err) {
        res.status(500).json({
          code: 500,
          message: "Internal Server Error",
        });
      }
    }
  } else {
    res.status(421).json({
      code: 421,
      message: "Invalid Route.",
    });
  }
};

export default handler;
