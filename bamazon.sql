DROP DATABASE IF EXISTS Bamazon;

CREATE DATABASE Bamazon;

use Bamazon;

CREATE TABLE products(
    --Not null because item id should not be zero.
    item_id INT AUTOINCREMENT NOT NULL,
    product_name VARCHAR(100) NOT NULL,
    department_name VARCHAR(100) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    stock_quantity INT(10) NOT NULL,
    PRIMARY KEY(item_id)
);

SELECT * FROM products

INSERT INTO products (product_name, department_name, price, stock_quantity)

VALUES ('SmartyPants Kids Multivitamin', 'Health', 14.63, 261),
('Heroes: The Greek Myths Reimagined',  'Audiobook', 9.99, 8),
('Friends: The Complete Series Collection', 'DVD', 59.99, 121),
('RIOGOO Pet Heating Pad', 'Pets', 23.99, 86),
('Treasure X Aliens Ultimate Dissection Kit', 'Toys', 24.86, 232),
('Everyone Is Welcome Here Pride Banner', 'Handmade', 19.95, 151),
('Coleman 0°F Mummy Sleeping Bag', 'Outdoors', 49.99, 59),
('Viva Naturals Ground Flax Seed', 'Grocery', 16.98, 86),
('Mini Projector - 3600L Hompow', 'Electronics', 138.99, 29),
('Sterling by Music Man, Bass Guitar', 327.13, 12),
('New Apple MacBook Air', 'Computers', 899.00, 101),
('Vivere Double Cotton Hammock', 'Garden', 329.87, 32);