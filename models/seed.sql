USE budget;
/*Adds 2 demo users to the user table*/
INSERT INTO users (email, password, name, createdAt, updatedAt)
VALUES ("fakedev410@fake.com", "Testing1", "Test User", CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP()), ("anotherfakedev410@fake.com", "Testing1!", "Fantastic Budgeter", CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP());

/*Stores the id of the demo user in order to add as a foreign key*/
SET @userid1 = (SELECT (id) FROM users WHERE id = 1 AND email = 'fakedev410@fake.com');
SET @userid2 = (SELECT (id) FROM users WHERE id = 2 AND email = 'anotherfakedev410@fake.com');

/*Adds a few income rows for our demo users*/
INSERT INTO incomes (incomeSource, plan, effectiveDate, createdAt, updatedAt, Userid)
VALUES ("First Paycheck", 1800.50, CURRENT_DATE, CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP(), @userid1), ("Chair Sell", 49.99, CURRENT_DATE, CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP(), @userid1), ("Box Store Paycheck 1", 767.83, CURRENT_DATE, CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP(), @userid2), ("Visa Giftcard", 50, CURRENT_DATE, CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP(), @userid2), ("Box Store Paycheck 2", 683.92, CURRENT_DATE, CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP(), @userid2);

/*Adds the default categories associated with our demo users*/
INSERT INTO categories (category, createdAt, updatedAt, Userid)
VALUES ("Savings", CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP(), @userid1), ("Housing", CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP(), @userid1), ("Transportation", CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP(), @userid1), ("Food", CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP(), @userid1), ("Misc", CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP(), @userid1), ("Debt", CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP(), @userid1), ("Savings", CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP(), @userid2), ("Housing", CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP(), @userid2), ("Transportation", CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP(), @userid2), ("Food", CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP(), @userid2), ("Misc", CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP(), @userid2), ("Debt", CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP(), @userid2);

/*Stores the id of a category in order to add as a foreign key*/
SET @categoryid1 = (SELECT (id) FROM categories WHERE Userid = @userid1 AND category = 'Housing');
SET @categoryid2 = (SELECT (id) FROM categories WHERE Userid = @userid2 AND category = 'Transportation');
SET @categoryid3 = (SELECT (id) FROM categories WHERE Userid = @userid2 AND category = 'Savings');

/*Add some subCategories for our demo users*/
INSERT INTO subCategories (subCategory, createdAt, updatedAt, Categoryid, Userid)
VALUES ("Mortgage", CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP(), @categoryid1, @userid1), ("Electric Bill", CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP(), @categoryid1, @userid1), ("Water Bill", CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP(), @categoryid1, @userid1),
("Car Payment", CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP(), @categoryid2, @userid2), ("Gas", CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP(), @categoryid2, @userid2);

/*Stores the id of a subCategory in order to add as a foreign key*/
SET @subCategoryid1 = (SELECT (id) FROM subCategories WHERE Userid = @userid1 AND subcategory = 'Mortgage');
SET @subCategoryid2 = (SELECT (id) FROM subCategories WHERE Userid = @userid1 AND subcategory = 'Electric Bill');

/*Add some expenses for our demo users*/
INSERT INTO expenses (expense, plan, planDate, spent, spentDate, createdAt, updatedAt, Categoryid, Userid, subCategoryid)
VALUES ("Mortgage", 1200, CURRENT_DATE(), 1200, CURRENT_DATE(), CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, @categoryid1, @userid1, @subCategoryid1), ("Electric Bill", 140, CURRENT_DATE(), 123.45, CURRENT_DATE(), CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, @categoryid1, @userid1, @subCategoryid2), ("Bank of America", 450, CURRENT_DATE(), 425, CURRENT_DATE(), CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, @categoryid3, @userid2, 4)