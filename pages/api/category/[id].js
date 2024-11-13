import prisma from "@/lib/prisma";

export default async function handler(req, res) {
  const category_id = req.query.id; // Get the category ID from the query parameter

  // Handle GET request to fetch category by ID
  if (req.method === "GET") {
    try {
      const category = await prisma.categories.findUnique({
        where: { id: Number(category_id) },
      });

      if (category) {
        res.status(200).json(category); // Return category data
      } else {
        res.status(404).json({ message: "Category not found" });
      }
    } catch (error) {
      res.status(500).json({ error: "Error fetching category" });
    }

    // Handle PUT request to update category by ID
  } else if (req.method === "PUT") {
    const { category_name, description } = req.body;

    try {
      const updatedCategory = await prisma.categories.update({
        where: { id: Number(category_id) },
        data: { category_name, description }, // Update category data
      });
      res.status(200).json(updatedCategory); // Return updated category
    } catch (error) {
      res.status(500).json({ error: "Error updating category" });
    }

    // Handle DELETE request to delete category by ID
  } else if (req.method === "DELETE") {
    try {
      await prisma.categories.delete({
        where: { id: Number(category_id) },
      });
      res.status(200).json({ message: "Category deleted successfully" })
    } catch (error) {
      res.status(500).json({ error: "Error deleting category" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
