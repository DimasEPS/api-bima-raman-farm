-- AlterTable
ALTER TABLE `goat` ADD COLUMN `health_notes` VARCHAR(191) NULL,
    ADD COLUMN `vaccination_date` DATETIME(3) NULL,
    ADD COLUMN `vaccine_type` VARCHAR(191) NULL;
