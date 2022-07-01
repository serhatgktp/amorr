-- Main Schema
CREATE SCHEMA amorr;

-- Customers table
CREATE TABLE `amorr`.`customers` (
  `uid` INT NOT NULL,
  `full_name` VARCHAR(100) NULL,
  PRIMARY KEY (`uid`));

-- Service Providers table
CREATE TABLE `amorr`.`service_providers` (
  `uid` INT NOT NULL,
  `full_name` VARCHAR(100) NULL,
  `service` VARCHAR(100) NULL,
  PRIMARY KEY (`uid`));

-- Login info table
CREATE TABLE `amorr`.`users` (
  `uid` INT NOT NULL AUTO_INCREMENT,
  `email_address` VARCHAR(45) NULL,
  `address` VARCHAR(45) NULL,
  `user_type` VARCHAR(300) NULL,
  `full_name` VARCHAR(300) NULL,
  `user_type` VARCHAR(50) NULL
  PRIMARY KEY (`uid`));

-- Cleanup
/*
DROP TABLE amorr.customers;
DROP TABLE amorr.service_providers;
DROP TABLE amorr.users;
*/