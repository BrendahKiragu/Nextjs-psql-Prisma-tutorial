import prisma from "@/lib/prisma";
// Handles GET (all categories) and POST (create category)

export default async function handler(req, res) {
  //GET all categories
  if (req.method === "GET") {
    try {
      const all_categories = await prisma.categories.findMany();

      if (all_categories.length > 0) {
        res.status(200).json(all_categories);
      } else {
        res
          .status(404)
          .json({ message: "No categories available at the moment." });
      }
    } catch (error) {
      res.status(500).json({ error: "Error fetching categories" });
    }

    //POST new category
  } else if (req.method === "POST") {
    try {
      const { category_name, description } = req.body;

      //create a new category
      const newCategory = await prisma.categories.create({
        data: { category_name, description },
      });

      res
        .status(201)
        .json(newCategory, { message: "Category added successfuly." });
    } catch (error) {
      if (
        error.code === "P2002" &&
        error.meta.target.includes("category_name")
      ) {
        res.status(400).json({ error: "Category already exists." });
      } else {
        res.status(500).json({
          error: "Error occured creating a new category. Please try again.",
        });
      }
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
