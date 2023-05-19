CREATE TABLE "tasks" (
	"id" SERIAL,
	"description" varchar(256),
	"location" varchar(256)
);

INSERT INTO "tasks" 
	("description", "location") 
VALUES
	('Take out the garbage', 'Kitchen'),
	('Wash the car', 'Garage'),
	('Mow the lawn', 'Backyard');