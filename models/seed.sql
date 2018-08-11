USE budget;
/*Adds 2 demo users to the user table*/
INSERT INTO users (email, password, name, createdAt, updatedAt)
VALUES ("fakedev410@fake.com", "Testing1", "Test User", CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP()), ("anotherfakedev410@fake.com", "Testing1!", "Fantastic Budgeter", CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP());

/*Stores the id of the demo user in order to add as a foreign key*/
SET @userid1 = (SELECT (id) FROM users WHERE id = 1 AND email = 'fakedev410@fake.com');
SET @userid2 = (SELECT (id) FROM users WHERE id = 2 AND email = 'anotherfakedev410@fake.com');

/*Adds the default categories associated with our demo users*/
INSERT INTO categories (category, createdAt, updatedAt, Userid)
VALUES ("Income", CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP(), @userid1), ("Savings", CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP(), @userid1), ("Housing", CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP(), @userid1), ("Transportation", CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP(), @userid1), ("Food", CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP(), @userid1), ("Misc", CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP(), @userid1), ("Debt", CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP(), @userid1), ("Income", CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP(), @userid2), ("Savings", CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP(), @userid2), ("Housing", CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP(), @userid2), ("Transportation", CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP(), @userid2), ("Food", CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP(), @userid2), ("Misc", CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP(), @userid2), ("Debt", CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP(), @userid2);

/*Stores the id of a category in order to add as a foreign key*/
SET @categoryid1 = (SELECT (id) FROM categories WHERE Userid = @userid1 AND category = 'Income');
SET @categoryid2 = (SELECT (id) FROM categories WHERE Userid = @userid1 AND category = 'Housing');
SET @categoryid3 = (SELECT (id) FROM categories WHERE Userid = @userid1 AND category = 'Transportation');

/*Add some subCategories for our demo users*/
INSERT INTO subCategories (subCategory, createdAt, updatedAt, Categoryid, Userid)
VALUES ("Mortgage", CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP(), @categoryid2, @userid1), ("Electric Bill", CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP(), @categoryid2, @userid1), ("Water Bill", CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP(), @categoryid2, @userid1),
("Car Payment", CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP(), @categoryid3, @userid2), ("Gas", CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP(), @categoryid3, @userid2);

/*Stores the id of a subCategory in order to add as a foreign key*/
SET @subCategoryid1 = (SELECT (id) FROM subCategories WHERE Userid = @userid1 AND subCategory = 'Mortgage');
SET @subCategoryid2 = (SELECT (id) FROM subCategories WHERE Userid = @userid1 AND subCategory = 'Electric Bill');

/*Adds a few income rows for our demo users*/
INSERT INTO plans (entry, amount, effectiveDate, createdAt, updatedAt, Categoryid, Userid, subCategoryid)
VALUES ("First Paycheck", 1800.50, CURRENT_DATE, CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP(), @categoryid1, @userid1, null), ("Chair Sell", 49.99, CURRENT_DATE, CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP(), @categoryid1, @userid1, null), ("Mortgage", 900, CURRENT_DATE, CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP(), @categoryid2, @userid1, @subCategoryid1), ("Duke Power", 140, CURRENT_DATE, CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP(), @categoryid2, @userid1, @subCategoryid2), ("Box Store Paycheck 1", 767.83, CURRENT_DATE, CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP(), @categoryid1, @userid2, null), ("Visa Giftcard", 50, CURRENT_DATE, CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP(), @categoryid1, @userid2, null), ("Box Store Paycheck 2", 683.92, CURRENT_DATE, CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP(), @categoryid1, @userid2, null);

/*Add some expenses for our demo users*/
INSERT INTO spents (entry, amount, effectiveDate, createdAt, updatedAt, Categoryid, Userid, subCategoryid)
VALUES ("First Paycheck", 1800.50, CURRENT_DATE, CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP(), @categoryid1, @userid1, null), ("Chair Sell", 49.99, CURRENT_DATE, CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP(), @categoryid1, @userid1, null), ("Mortgage", -900, CURRENT_DATE, CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP(), @categoryid2, @userid1, @subCategoryid1), ("Duke Power", -123.56, CURRENT_DATE, CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP(), @categoryid2, @userid1, @subCategoryid2), ("Box Store Paycheck 1", 767.83, CURRENT_DATE, CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP(), @categoryid1, @userid2, null), ("Visa Giftcard", 50, CURRENT_DATE, CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP(), @categoryid1, @userid2, null), ("Box Store Paycheck 2", 683.92, CURRENT_DATE, CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP(), @categoryid1, @userid2, null);