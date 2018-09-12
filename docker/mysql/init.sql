-- CREATE USER 'student'@'localhost' IDENTIFIED BY 'student';

DROP DATABASE IF EXISTS crime_reports;
CREATE DATABASE IF NOT EXISTS crime_reports;
USE crime_reports;

CREATE TABLE `users` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `first_name` varchar(50) DEFAULT NULL,
  `last_name` varchar(50) DEFAULT NULL,
  `email` varchar(255) NOT NULL DEFAULT '',
  `password` varchar(255) NOT NULL DEFAULT '',
  `isAdmin` tinyint(1) NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO `users` (`id`, `first_name`, `last_name`, `email`, `password`, `isAdmin`)
VALUES
	(1, 'John', 'Doe', 'admin', 'admin', 1);
