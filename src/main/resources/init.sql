DROP SCHEMA IF EXISTS bus_manager_backbone;
CREATE SCHEMA bus_manager_backbone CHARACTER SET UTF8;
USE bus_manager_backbone;

CREATE USER IF NOT EXISTS 'bus_manager_admin'@'localhost' IDENTIFIED BY 'rNT5Vn[j(>R2r6.';
GRANT ALL PRIVILEGES ON bus_manager_backbone.* TO 'bus_manager_admin'@'localhost';

FLUSH PRIVILEGES ;

set @@sql_mode = 'IGNORE_SPACE,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION';
