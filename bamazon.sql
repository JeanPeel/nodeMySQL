DROP DATABASE IF EXISTS Bamazon;

CREATE DATABASE Bamazon;

use Bamazon;

CREATE TABLE products(
    item_id INT NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(100) NULL,
    department_name VARCHAR(100) NULL,
    price DECIMAL(10, 2) NULL,
    stock_quantity INT(10) NULL,
    PRIMARY KEY (item_id)
);

-- SELECT * FROM products

INSERT INTO products (product_name, department_name, price, stock_quantity)

VALUES ('SmartyPants Kids Multivitamin', 'Health', 14.63, 61),
('Heroes: The Greek Myths Reimagined',  'Audiobook', 9.99, 8),
('Friends: The Complete Series Collection', 'DVD', 59.99, 21),
('RIOGOO Pet Heating Pad', 'Pets', 23.99, 86),
('Treasure X Aliens Ultimate Dissection Kit', 'Toys', 24.86, 32),
('Everyone Is Welcome Here Pride Banner', 'Handmade', 19.95, 51),
('Coleman 0°F Mummy Sleeping Bag', 'Outdoors', 49.99, 59),
('Viva Naturals Ground Flax Seed', 'Grocery', 16.98, 86),
('Mini Projector - 3600L Hompow', 'Electronics', 138.99, 29),
('Sterling by Music Man, Bass Guitar', 327.13, 12),
('New Apple MacBook Air', 'Computers', 899.00, 11),
('Vivere Double Cotton Hammock', 'Garden', 329.87, 32);