-- SQLite
-- INSERT INTO 'Users' VALUES ('777','uuuu','uuuu','2021-07-01 00:00:00.000 +00:00','HOMME','yy@gmail.com','$2a$08$0MQ7/nl8crah1uR0vAhHAe2F8lqq5aXNGHMB3I3T3GK4zN3io2HJq','1234567890','Etudiant','2CPI','PATIENT','2021-07-16 17:42:25.177 +00:00','2021-07-16 17:42:25.177 +00:00')
--DROP TABLE 'Comptes';
--DROP TABLE 'MedicalFiles';
--DROP TABLE 'PersonalInfos';
--DROP TABLE 'BiometricInfos';
--DROP TABLE 'AntecedentsInfos';
--DROP TABLE 'Depistages';
--DROP TABLE 'UserNonValides';
--DROP TABLE 'Users';
-- DROP TABLE 'biometricInfos';
--DROP TABLE 'ResetPasswordRequests';
--DROP TABLE 'BilansBiologiques';
--DROP TABLE 'BilansECGs';
--DROP TABLE 'OrientationMedicalBDDs';
--DROP TABLE 'BilansEEGs';
--DROP TABLE 'BilansElectriques';
---DELETE FROM 'BilansBiologiques' WHERE id='1';
---INSERT INTO 'BilansBGlycemiques' VALUES ('3', 'Testgly-3', 'Testhb1C-3', 'Testautre-"3', '2021-07-19 12:41:55.790 +00:00', '2021-07-19 12:41:55.790 +00:00');
---INSERT INTO 'BilansBiologiques' VALUES ('3', 'TestMotif3', '9', NULL, NULL, NULL, NULL, NULL, NULL, '3', NULL, NULL, NULL, NULL, NULL, '2021-07-19 12:41:55.790 +00:00', '2021-07-19 12:41:55.790 +00:00');
---INSERT INTO 'BilansElectriques' VALUES ('2', 'TestMotifElec2', '9', NULL, NULL, NULL, '2021-07-19 12:41:55.790 +00:00', '2021-07-19 12:41:55.790 +00:00');
---INSERT INTO 'Comptes' VALUES ('4', 't@gmail.com', '$2a$08$3mgIiNdSCgygh5qD5x1iLON41pLQppSv0H6fy7562znfZWgEyr34y', 'ADMIN', 'V', '2021-07-19 12:41:55.790 +00:00', '2021-07-19 12:41:55.790 +00:00')
--INSERT INTO 'Comptes' VALUES ('4', 'admin@gmail.com', '$2a$08$3mgIiNdSCgygh5qD5x1iLON41pLQppSv0H6fy7562znfZWgEyr34y', 'ADMIN', 'ACTIVATED', '2021-07-19 12:41:55.790 +00:00', '2021-07-19 12:41:55.790 +00:00');
--DROP TABLE 'Medicaments';
--DROP TABLE 'RDVs';
--DROP TABLE 'RDVGroups';
INSERT INTO 'RDVNonValides' VALUES ('3','3','2021-08-05 00:31:17 +00:00','suivi','Test1','2021-08-05 22:31:19.066 +00:00','2021-08-05 22:31:19.066 +00:00');
 INSERT INTO 'RDVNonValides' VALUES ('1','1','2021-08-05 00:31:17 +00:00','suivi médical','Test2','2021-08-05 22:31:19.066 +00:00','2021-08-05 22:31:19.066 +00:00');
 INSERT INTO 'RDVaReporters' VALUES ('3','3','2021-08-05 22:31:19.066 +00:00','consultation','Test1','Individuel','2021-08-05 22:31:19.066 +00:00','2021-08-05 22:31:19.066 +00:00');
 INSERT INTO 'RDVaReporters' VALUES ('3','3','2021-08-05 22:31:19.066 +00:00','consultation med','Test2','Individuel','2021-08-05 22:31:19.066 +00:00','2021-08-05 22:31:19.066 +00:00');
 INSERT INTO 'RDVaReporters' VALUES ('1','1','2021-08-05 22:31:19.066 +00:00','consultation médicale','Test3','Individuel','2021-08-05 22:31:19.066 +00:00','2021-08-05 22:31:19.066 +00:00');
 INSERT INTO 'RDVaReporters' VALUES ('3','3','2021-08-05 22:31:19.066 +00:00','consultation medddddd','Test4','Individuel','2021-08-05 22:31:19.066 +00:00','2021-08-05 22:31:19.066 +00:00');
--INSERT INTO 'Comptes' VALUES ('1', 'admin@gmail.com', '$2a$08$3mgIiNdSCgygh5qD5x1iLON41pLQppSv0H6fy7562znfZWgEyr34y', 'ADMIN', 'ACTIVATED', '2021-07-19 12:41:55.790 +00:00', '2021-07-19 12:41:55.790 +00:00');

-- CREATE TABLE medic (nom varchar(255) ,forme varchar(255) ,marque varchar(255) ,dosage varchar(255) );
--  .mode csv
-- .import 'C:\Users\pc\Desktop\nomenclature-au-31-Dcembre-2019999.csv' medic
-- alter TABLE medic ADD COLUMN createdAt datetime 
-- alter TABLE medic ADD COLUMN updatedAt datetime 
--  UPDATE medic
-- SET createdAt = '2021-08-15 22:31:19.066 +00:00', updatedAt = '2021-08-05 22:31:19.066 +00:00' 
-- INSERT INTO Medicaments(nom,marque,forme,dosage,createdAt,updatedAt) SELECT * FROM medic
-- DROP TABLE 'medic';
--DROP TABLE 'BilansECGs';
--DROP TABLE 'BilansEEGs';
--DROP TABLE 'BilansEMGs';
--DROP TABLE 'BilansElectriques';