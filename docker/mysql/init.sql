-- CREATE USER 'student'@'localhost' IDENTIFIED BY 'student';

DROP DATABASE IF EXISTS crime_reports_users;
CREATE DATABASE IF NOT EXISTS crime_reports_users CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE crime_reports_users;

SET NAMES utf8mb4;

CREATE TABLE `rank` (
  `id` int(4) unsigned NOT NULL AUTO_INCREMENT,
  `label` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE `users` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `first_name` varchar(50) DEFAULT NULL,
  `last_name` varchar(50) DEFAULT NULL,
  `email` varchar(255) NOT NULL DEFAULT '',
  `password` varchar(255) NOT NULL DEFAULT '',
  `rank` int(4) unsigned DEFAULT NULL,
  `isCertified` tinyint(1) NOT NULL DEFAULT 0,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

ALTER TABLE `users` ADD CONSTRAINT `fr_users_rank` FOREIGN KEY (`rank`) REFERENCES `rank` (`id`) ON DELETE SET NULL ON UPDATE SET NULL;

INSERT INTO `rank` (`id`, `label`)
VALUES
  (1, 'Chef de la police'),
  (2, 'Détective'),
  (3, 'Agent');

INSERT INTO `users` (`id`, `first_name`, `last_name`, `email`, `password`, `rank`, `isCertified`)
VALUES
	(1, 'Mathilde', 'Didier', 'admin', 'admin', 1, 1),
	(2, 'Maïa', 'Valéry', 'admin2', 'admin2', 2, 1),
	(3, 'Marie', 'Firmin', 'user1', 'user1', 3, 1),
	(4, 'Eugénie', 'Toussaint', 'user2', 'user2', 1, 0),
	(5, 'Armand', 'Hercule', 'user3', 'user3', 2, 0),
	(6, 'Éliane', 'Danièle', 'user4', 'user4', 3, 0);
