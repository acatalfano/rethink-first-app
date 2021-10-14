/*
================================================================================
Author: Adam Catalfano
Created: 10/12/2021

Create the gender table
And populate with 'M' and 'F' initially

N.B. Since gender identity is a tricky subject,
it's fair to assume we would want to expand
the definition beyond merely the "M" / "F" dichotomy
================================================================================
*/

CREATE TABLE [dbo].[Genders]
	( Id			int				PRIMARY KEY		IDENTITY(0, 1)
	, [Label]		varchar(15)		NOT NULL
	)
;
GO

INSERT INTO [dbo].[Genders]
	VALUES ('M')
		 , ('F')
;
GO
