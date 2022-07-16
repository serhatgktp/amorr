-- Main Schema
CREATE SCHEMA amorr;

-- Customers table
CREATE TABLE amorr.customers (
  `uid` VARCHAR(45),
  `total_rating` VARCHAR(45) NULL,
  `num_ratings` VARCHAR(45) NULL);

-- Service Providers table
CREATE TABLE amorr.service_providers (
  `uid` VARCHAR(45),
  `bio` VARCHAR(500) NULL,
  `types_of_services` VARCHAR(1000) NULL);

-- Login info table
CREATE TABLE amorr.users (
  `uid` INT NOT NULL AUTO_INCREMENT,
  `email_address` VARCHAR(45) NULL,
  `address` VARCHAR(45) NULL,
  `user_type` VARCHAR(300) NULL,
  `full_name` VARCHAR(300) NULL,
  `password` VARCHAR(300) NULL,
  PRIMARY KEY (`uid`));

-- Profile Photos Table
CREATE TABLE amorr.profile_photos (
  `uid` VARCHAR(45),
  `pfp_path` VARCHAR(3000) NULL);

-- Contact Us Table
create table amorr.contact_us (
  `fullname` varchar(255), 
  `email` varchar(255), 
  `subject` varchar(255), 
  `message` varchar(255));

create table contact_info (
  `name` varchar(255), 
  `email` varchar(255), 
  `message` varchar(255));

CREATE TABLE amorr.sp_reviews (	-- Reviews given to SPs from Customers
  `recipient_uid` INT NOT NULL,
  `reviewer_uid` INT NOT NULL,
  `type_of_service` VARCHAR(45) NULL,
  `rating` VARCHAR(45) NULL,
  `review` VARCHAR(1000) NULL);

CREATE TABLE `amorr`.`services` (
  `service_id` INT NOT NULL AUTO_INCREMENT,
  `uid` VARCHAR(45) NOT NULL,
  `name` VARCHAR(100) NOT NULL,
  `price` VARCHAR(45) NULL,
  PRIMARY KEY(service_id));

-- Cleanup
/*
DROP TABLE amorr.customers;
DROP TABLE amorr.service_providers;
DROP TABLE amorr.users;
*/