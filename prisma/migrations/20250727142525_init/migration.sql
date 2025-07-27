-- CreateTable
CREATE TABLE `Users` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `username` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `role` ENUM('USER', 'ADMIN') NOT NULL DEFAULT 'USER',
    `is_active` BOOLEAN NOT NULL DEFAULT true,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Users_username_key`(`username`),
    UNIQUE INDEX `Users_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Goat` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `code_name` VARCHAR(191) NOT NULL,
    `breeder_name` VARCHAR(191) NULL,
    `gender` ENUM('Male', 'Female') NOT NULL,
    `breed_line` VARCHAR(191) NULL,
    `health_status` VARCHAR(191) NULL,
    `goat_type` VARCHAR(191) NULL,
    `current_weight` DOUBLE NULL,
    `weight_date` DATETIME(3) NULL,
    `grade` VARCHAR(191) NULL,
    `color` VARCHAR(191) NULL,
    `sire_breed` VARCHAR(191) NULL,
    `dam_breed` VARCHAR(191) NULL,
    `birth_type` VARCHAR(191) NULL,
    `birth_weight` DOUBLE NULL,
    `birth_date` DATETIME(3) NULL,
    `release_date` DATETIME(3) NULL,
    `sales_notes` TEXT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,
    `deleted_at` DATETIME(3) NULL,

    UNIQUE INDEX `Goat_code_name_key`(`code_name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
