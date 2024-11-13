// prisma/seed.js
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  // Clear existing data (optional)
  await prisma.categories.deleteMany();

  // Seed data for Category model
  await prisma.categories.createMany({
    data: [
      {
        category_name: "Best Actress",
        description: "Award for the best female performance in a lead role.",
      },
      {
        category_name: "Best Director",
        description: "Award for the best direction of a film.",
      },
      {
        category_name: "Best Picture",
        description: "Award for the best overall film of the year.",
      },
      {
        category_name: "Best Cinematography",
        description: "Award for the best visual composition of a film.",
      },
      {
        category_name: "Best Original Screenplay",
        description: "Award for the best original written screenplay.",
      },
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
