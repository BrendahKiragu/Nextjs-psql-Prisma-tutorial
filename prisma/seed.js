// prisma/seed.js
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  // Clear existing data
  await prisma.$executeRaw`TRUNCATE TABLE "categories" RESTART IDENTITY CASCADE`;

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

  //voter model
  await prisma.voter.createMany({
    data: [
      {
        username: "john_doe",
        email: "john@example.com",
        password: "password123",
      },
      {
        username: "jane_smith",
        email: "jane@example.com",
        password: "password123",
      },
      {
        username: "alice_wonder",
        email: "alice@example.com",
        password: "password123",
      },
    ],
  });

  console.log("Database has been seeded with voters");

  //nominees model
  await prisma.nominees.createMany({
    data: [
      {
        name: "Emma Stone",
        image: "https://example.com/emma_stone.jpg",
        description:
          "Award-winning actress known for her roles in La La Land and Easy A.",
        institution: "Hollywood Arts Academy",
      },
      {
        name: "Christopher Nolan",
        image: "https://example.com/christopher_nolan.jpg",
        description:
          "Director known for Inception, The Dark Knight, and Interstellar.",
        institution: "London Film School",
      },
      {
        name: "Greta Gerwig",
        image: "https://example.com/greta_gerwig.jpg",
        description:
          "Director and writer, celebrated for her work on Lady Bird and Little Women.",
        institution: null,
      },
      {
        name: "Roger Deakins",
        image: "https://example.com/roger_deakins.jpg",
        description:
          "Cinematographer known for his work on Blade Runner 2049 and 1917.",
        institution: "National Film and Television School",
      },
      {
        name: "Jordan Peele",
        image: "https://example.com/jordan_peele.jpg",
        description:
          "Director and writer known for Get Out and Us, specializing in social horror.",
        institution: "Sarah Lawrence College",
      },
    ],
  });

  console.log("Database has been seeded with nominees");
}

main();
