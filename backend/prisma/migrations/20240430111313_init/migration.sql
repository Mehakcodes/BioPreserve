-- CreateTable
CREATE TABLE `User` (
    `email` VARCHAR(191) NOT NULL,
    `phone` VARCHAR(191) NOT NULL,
    `createPassword` VARCHAR(191) NOT NULL,
    `confirmPassword` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `dob` DATETIME(3) NOT NULL,
    `panNo` VARCHAR(191) NOT NULL,
    `adhaarCardNo` VARCHAR(191) NOT NULL,
    `currentAddress` VARCHAR(191) NOT NULL,
    `permanentAddress` VARCHAR(191) NOT NULL,
    `nationality` VARCHAR(191) NOT NULL,
    `accountType` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `User_email_key`(`email`),
    UNIQUE INDEX `User_phone_key`(`phone`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
