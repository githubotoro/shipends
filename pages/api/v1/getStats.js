import { allShips } from "@/.contentlayer/generated";
import prisma from "@/db/prismaConnection";

const handler = async (req, res) => {
  if (req.method === "GET") {
    try {
      const { parent, id } = req.query;

      if (parent === undefined || id === undefined) {
        res.status(400).json({
          code: 400,
          message: "Bad Request!",
        });
        return;
      }

      const data = await prisma.ship.findUnique({
        where: {
          id: id,
        },
      });

      if (data === null) {
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

        const newData = await prisma.ship.create({
          data: {
            id: id,
            parent: parent,
            views: Math.floor(Math.random() * 50),
          },
        });

        res.status(201).json({
          code: 201,
          message: "Success.",
          stats: newData,
        });
        return;
      }

      res.status(201).json({
        code: 201,
        message: "Success.",
        stats: data,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({
        code: 500,
        message: "Internal Server Error",
      });
    }
  } else {
    res.status(421).json({
      code: 421,
      message: "Invalid Route.",
    });
  }
};

export default handler;
