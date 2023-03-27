import { allGuides } from "@/.contentlayer/generated";
import prisma from "@/db/prismaConnection";

const handler = async (req, res) => {
  if (req.method === "GET") {
    try {
      const { parent } = req.query;

      if (parent === undefined) {
        res.status(400).json({
          code: 400,
          message: "Bad Request!",
        });
        return;
      }

      const content = allGuides.find((guide) => guide.slug === `sea`);

      if (content.data[parent] === undefined) {
        res.status(400).json({
          code: 400,
          message: "Bad Request",
        });
        return;
      }

      const data = await prisma.ship.findMany({
        where: {
          parent: parent,
        },
        // _sum: {
        //   views: true,
        // },
      });

      const contentList = allGuides.find(
        (guide) => guide.slug === `${parent}/guide`
      );

      let _sum = 0;

      for (let i = 0; i < data.length; i++) {
        if (contentList.data[data[i].id] !== undefined) {
          _sum += data[i].views;
        }
      }

      res.status(201).json({
        code: 201,
        message: "Success.",
        views: _sum,
        // views: data._sum.views === null ? 0 : data._sum.views,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({
        code: 500,
        message: "Internal Server Error",
        err: err,
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
