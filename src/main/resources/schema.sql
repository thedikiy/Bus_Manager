  DROP TABLE IF EXISTS `bus`;
  CREATE TABLE `bus`(
      `id` INT NOT NULL AUTO_INCREMENT,
      `bus_model` VARCHAR(45),
      `registration_number` VARCHAR(20),
    PRIMARY KEY (`id`)
  )