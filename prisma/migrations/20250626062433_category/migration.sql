/*
  Warnings:

  - You are about to drop the `post_categories` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "post_categories" DROP CONSTRAINT "post_categories_user_id_fkey";

-- AlterTable
ALTER TABLE "posts" ADD COLUMN     "category_id" INTEGER,
ALTER COLUMN "scope" SET DEFAULT 'PUBLIC';

-- DropTable
DROP TABLE "post_categories";

-- CreateTable
CREATE TABLE "post_categorys" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),
    "sortOrder" INTEGER NOT NULL DEFAULT 0,
    "user_id" TEXT NOT NULL,

    CONSTRAINT "post_categorys_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "post_categorys_user_id_name_key" ON "post_categorys"("user_id", "name");

-- AddForeignKey
ALTER TABLE "posts" ADD CONSTRAINT "posts_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "post_categorys"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "post_categorys" ADD CONSTRAINT "post_categorys_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
