DROP DATABASE IF EXISTS `database_ovs` ;
CREATE DATABASE IF NOT EXISTS `database_ovs` ;
USE `database_ovs` ;

CREATE TABLE IF NOT EXISTS `database_ovs`.`categories` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `category_name` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`id`));

CREATE TABLE IF NOT EXISTS `database_ovs`.`products` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `product_name` VARCHAR(100) NOT NULL,
  `description` VARCHAR(400) NOT NULL,
  `price` INT(11) NOT NULL,
  `size` VARCHAR(100) NOT NULL,
  `status` VARCHAR(100) NOT NULL,
  `condition` VARCHAR(100) NOT NULL,
  `type` VARCHAR(100) NOT NULL,
  `category_id` INT(11) NOT NULL,
  `image` VARCHAR(250) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `FK_eb969c75-f23f-4a9c-a933-f62321b74728` (`category_id` ASC) VISIBLE,
  CONSTRAINT `FK_eb969c75-f23f-4a9c-a933-f62321b74728`
    FOREIGN KEY (`category_id`)
    REFERENCES `database_ovs`.`categories` (`id`));
    
    
CREATE TABLE IF NOT EXISTS `database_ovs`.`role` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`));


CREATE TABLE IF NOT EXISTS `database_ovs`.`users` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `firstName` VARCHAR(50) NOT NULL,
  `lastName` VARCHAR(50) NOT NULL,
  `email` VARCHAR(50) NOT NULL,
  `address` VARCHAR(100) NOT NULL,
  `residencia` VARCHAR(50) NOT NULL,
  `birth_date` DATE NOT NULL,
  `intereses` VARCHAR(50) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  `notificaciones` VARCHAR(10) NOT NULL,
  `image` VARCHAR(45) NULL DEFAULT NULL,
  `role_id` INT(11) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `role_id` (`role_id` ASC) VISIBLE,
  CONSTRAINT `role_id`
    FOREIGN KEY (`role_id`)
    REFERENCES `database_ovs`.`role` (`id`));


