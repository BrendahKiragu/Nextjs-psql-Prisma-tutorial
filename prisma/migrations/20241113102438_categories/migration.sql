-- CreateTable
CREATE TABLE "categories" (
    "id" SERIAL NOT NULL,
    "category_name" VARCHAR NOT NULL,
    "description" VARCHAR,

    CONSTRAINT "categories_pkey" PRIMARY KEY ("id")
);
