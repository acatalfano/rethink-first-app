/*
================================================================================
Author: Adam Catalfano
Created: 10/12/2021

Create the patients table
================================================================================
*/

CREATE TABLE [dbo].[Patients]
	(		Id				int				PRIMARY KEY		IDENTITY(0, 1)
	,		FirstName		varchar(10)		NOT NULL
	,		LastName		varchar(20)		NOT NULL
	,		Birthday		date			NOT NULL
	,		GenderId		int				NOT NULL		REFERENCES [dbo].[Genders](Id)
	)
;
GO
