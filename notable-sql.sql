

-- -----------------------------------------------------
-- Table `notable`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `notable`.`user` (
  `userid` INT IDENTITY(11,1) NOT NULL,
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
  `dataid` INT IDENTITY(21,1) NOT NULL AUTOINCREMENT,
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
  `noteid` INT IDENTITY(31,1) NOT NULL ,
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
  `imageid` INT IDENTITY(41,1) NOT NULL AUTOINCREMENT,
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

INSERT INTO USER (username, password, firstname, lastname)
VALUES ("hiya", "woah", 
