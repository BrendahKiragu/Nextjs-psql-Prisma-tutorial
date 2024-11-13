// prisma/seed.js
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  // Clear existing data (optional)
  await prisma.categories.deleteMany();

  // Seed data for Category model
  await prisma.categories.createMany({
    data: [
      { category_name: "Electronics", description: "Devices and gadgets" },
      { category_name: "Books", description: "Various genres of books" },
      { category_name: "Clothing", description: "Apparel and accessories" },
    ],
  });

  console.log("Database has been seeded with categories");
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
