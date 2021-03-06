/****** Script for SelectTopNRows command from SSMS  ******/
SELECT [organization_id],[role_id] FROM [dbo].[t_organization2role]
--			1				1
--			2				1

SELECT [organization_id],[user_id] FROM [dbo].[t_organization2user]
--			2				1
--			2				2

SELECT [organization_id],[name],[address],[city],[state],[zip],[contact_name],[contact_phone],[contact_email] ,[edited_by_id]
    ,[created_by_id],[created_date],[parent_organization_id] FROM [dbo].[t_organization]
--1	Organization		NULL				NULL	NULL	NULL	NULL	NULL	NULL	1	1	2007-07-17 00:00:00.000	NULL
--2	PLM Organization	PLM Organization	NULL	NULL	NULL	NULL	NULL	NULL	3	1	2007-07-17 00:00:00.000	1

SELECT [access_right_id],[access_type],[description],[parent_access_right_id] FROM [dbo].[t_access_right]
--		ORGMAINT			HDR			Organization Maintenance	SECURITY
--		ORGEDIT				ROF			Organization Edit			ORGMAINT
--		ORGADD				NULL		Organization Add			ORGMAINT

--Code to be Implemented like below
--//<!--WZ@ORGADD.BEGIN-->
--//tempMenu.addItem(new NavBarMenuItem("Add Organization", "../Organization/OrganizationMaint.aspx?EVENT=SHOW_ADD_ORGANIZATION"));
--//<!--WZ@ORGADD.END-->


SELECT [access_type],[description] FROM [dbo].[t_access_type]
--		HDR				Header Only
--		RFP				Read Only/Full/Password 
--		ROF				Read Only/Full

SELECT [access_type],[access_type_code],[description] FROM [dbo].[t_access_type_code]
--			RFP				F				Full
--			RFP				FWP				Full Without Password
--			RFP				RO				Read Only
--			ROF				F				Full
--			ROF				RO				Read Only

SELECT [id],[context],[user_id],[status] FROM [dbo].[SAS70_UserStatus]
--		1	Default	sysadmin		0
--		9	Default	dan1			1

SELECT [id],[context],[user_id],[date_created],[password] FROM [dbo].[SAS70_PasswordHistory]
--		1	Default		sysadmin	2009-06-01 00:00:00.000		WdhYhzyPwxgrZVtA9yawcg==
--		2	Default		plmuser		2009-06-01 00:00:00.000		9NH/1qONE3IVVRpstwpQsw==

SELECT [id],[context],[name] ,[min_value] ,[max_value],[current_value]  FROM [dbo].[SAS70_Settings]
--		1	Default		OLD_PASSWORD_RESTRICTION_COUNT			8	999	8
--		2	Default		MINIMUM_PASSWORD_LENGTH					8	999	8
--		3	Default		MINIMUM_PASSWORD_AGE					3	999	0
--		4	Default		MAXIMUM_PASSWORD_AGE					1	90	90
--		5	Default		ACCOUNT_LOCKOUT_COUNT					5	999	5
--		6	Default		ACCOUNT_LOCKOUT_TIME					1	30	30
--		7	Default		PASSWORD_EXPIRATION_WARNING_DAY_COUNT	3	15	10

SELECT [role_id] ,[name] ,[description],[created_by_id],[edited_by_id],[created_date] FROM [dbo].[t_role]
--			7	User with Delete	Standard User (create, upload, run, delete)		1	1	2003-03-28 00:00:00.000
--			6	PLM System Admin	System Admin for PLM Customer					1	1	2003-03-13 00:00:00.000


SELECT [role_id],[access_right_id],[access_type],[access_type_code]  FROM [dbo].[t_role2access_right]
--			1	ORGEDIT				ROF				F
--			1	ORGSEARCHRPT		NULL			NULL

SELECT  [system_id] ,[status_update_flag],[max_logins],[password_expires],[inactivate_account],[unique_passwords],[minimum_password_length],[lock_request_email]  FROM [dbo].[t_system]
--			1	NULL	5	90	6	8	8	NULL


SELECT  [user_id]  ,[f_name] ,[l_name] ,[title] ,[login] ,[password] ,[email_address] ,[phone],[phone_ext] ,[fax]
    ,[login_tries],[last_login_date] ,[active] ,[edited_by_id],[created_by_id],[created_date],[last_password_change_date] ,[last_rs_lm_comparison] FROM [dbo].[t_user]
--1	Administrator	System	System Administrator	sysadmin	U0vWly2CPwsCkhQ0ji5kyg==	NULL	NULL	NULL	NULL	71	2018-02-06 18:38:33.000	A	3	1	2007-07-17 00:00:00.000	2016-05-29 00:00:00.000	NULL
--2	Org				User	NULL					Orguser		9NH/1qONE3IVVRpstwpQsw==	NULL	NULL	NULL	NULL	9	2015-09-08 00:00:00.000	A	3	1	2007-07-17 00:00:00.000	2007-07-17 00:00:00.000	NULL

SELECT [password] ,[user_id] ,[changed_date] FROM [dbo].[t_user_password]
--Mr53wPnmCsqqnPx6fUwmNw==	3	2018-09-11 14:14:17.310
--r2WHy0nFfN3SVXlfuxRAog==	3	2018-04-09 16:57:16.803


SELECT [user_id] ,[organization_id] FROM [dbo].[t_user2multiorg]
--			2			2
--			2			3
--			3			2
--			3			4

SELECT [user_id],[organization_id],[access_type],[edited_by_id],[created_by_id] ,[created_date]  FROM [dbo].[t_user2organization]
--			1			2				A				1				1			2007-07-17 14:42:47.497
--			1			10				A				1				1			2011-06-18 00:00:00.000
--			27			2				D				1				1			2011-02-28 00:00:00.000
--"A">> "System Administrator";
--"D">>"Data Administrator";
--"B">>"Both";

SELECT [user_id],[role_id],[organization_id] FROM [dbo].[t_user2role]
--			1		1			2
--			2		2			2
--			2		7			2