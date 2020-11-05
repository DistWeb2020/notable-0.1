-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema notable
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema notable
-- -----------------------------------------------------
CREATE database IF NOT EXISTS `notable` DEFAULT CHARACTER SET utf8 ;
USE `notable` ;

-- -----------------------------------------------------
-- Table `notable`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `notable`.`user` (
  `userid` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(45) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  `firstname` VARCHAR(45) NULL,
  `lastname` VARCHAR(45) NULL,
  PRIMARY KEY (`userid`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `notable`.`data`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `notable`.`data` (
  `dataid` INT NOT NULL AUTO_INCREMENT,
  `user` INT NOT NULL,
  `date` DATETIME NULL,
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`dataid`),
  INDEX `userid_idx` (`user` ASC) VISIBLE,
  CONSTRAINT `user`
    FOREIGN KEY (`user`)
    REFERENCES `notable`.`user` (`userid`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `notable`.`note`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `notable`.`note` (
  `noteid` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL,
  `text` TEXT NOT NULL,
  `dataref` INT NOT NULL,
  PRIMARY KEY (`noteid`),
  INDEX `dataid_idx` (`dataref` ASC) VISIBLE,
  CONSTRAINT `dataref`
    FOREIGN KEY (`dataref`)
    REFERENCES `notable`.`data` (`dataid`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `notable`.`image`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `notable`.`image` (
  `imageid` INT NOT NULL AUTO_INCREMENT,
  `data` INT NOT NULL,
  `src` TEXT NOT NULL,
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`imageid`),
  INDEX `dataid_idx` (`data` ASC) VISIBLE,
  CONSTRAINT `data`
    FOREIGN KEY (`data`)
    REFERENCES `notable`.`data` (`dataid`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
