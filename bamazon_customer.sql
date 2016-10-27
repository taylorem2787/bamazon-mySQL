show databases;

use df178lc2sy8t3n6l;

CREATE TABLE Products(
	Product_Id INT NOT NULL AUTO_INCREMENT,
	Product_Name VARCHAR(13) NOT NULL,
	Department_Name VARCHAR(20) NOT NULL,
	Price DECIMAL(10,3) NOT NULL,
	Stock_Quantity INT(150) NOT NULL,
	PRIMARY KEY(Product_Id)
);

INSERT INTO Products(Product_Name, Department_Name, Price, Stock_Quantity) value("Shampoo", "Beauty & Care", 10, 80);
INSERT INTO Products(Product_Name, Department_Name, Price, Stock_Quantity) value("Conditioner","Beauty & Care", 12, 100);
INSERT INTO Products(Product_Name, Department_Name, Price, Stock_Quantity) value("Lotion", "Beauty & Care", 20, 150);
INSERT INTO Products(Product_Name, Department_Name, Price, Stock_Quantity) value("Perfume", "Beauty & Care", 50, 4);

INSERT INTO Products(Product_Name, Department_Name, Price, Stock_Quantity) value("Shirt ", "Clothing", 20, 40);
INSERT INTO Products(Product_Name, Department_Name, Price, Stock_Quantity) value("Sweater ", "Clothing", 18, 50);
INSERT INTO Products(Product_Name, Department_Name, Price, Stock_Quantity) value("Jeans ", "Clothing", 30, 60);
INSERT INTO Products(Product_Name, Department_Name, Price, Stock_Quantity) value("Jacket ", "Clothing", 35, 70);
 
INSERT INTO Products(Product_Name, Department_Name, Price, Stock_Quantity) value("Computer ", "Electronics", 999, 30);
INSERT INTO Products(Product_Name, Department_Name, Price, Stock_Quantity) value("iPad ", "Electronics", 699, 30);
INSERT INTO Products(Product_Name, Department_Name, Price, Stock_Quantity) value("Camera ", "Electronics", 300, 25);
INSERT INTO Products(Product_Name, Department_Name, Price, Stock_Quantity) value("Smart TV ", "Electronics", 899, 50);

INSERT INTO Products(Product_Name, Department_Name, Price, Stock_Quantity) value("Coffee Maker","Appliances", 89, 1);
INSERT INTO Products(Product_Name, Department_Name, Price, Stock_Quantity) value("Blender ", "Appliances", 99, 30);
INSERT INTO Products(Product_Name, Department_Name, Price, Stock_Quantity) value("Toaster ", "Appliances", 49, 25);
INSERT INTO Products(Product_Name, Department_Name, Price, Stock_Quantity) value("Microwave ", "Appliances", 199, 50);

DROP TABLE Products
SELECT * FROM Products;