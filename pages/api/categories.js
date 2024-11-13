import prisma from "@/lib/prisma";

export default async function getCategories(req, res) {
  const all_categories = await prisma.category.findMany();
  res.json(all_categories);
}
