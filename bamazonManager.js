const inquirer = require("inquirer")
const mysql = require("mysql")
require("console.table")

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'Bamazon'
});
connection.connect((err) => {
  if (err) throw err;
  console.log('Connected!');
  main();
});

const main = () => {
  loadProducts(connection)
}

const loadProducts = connection => {
  connection.query("SELECT * FROM products", (err, res) => {
    if (err) throw err
    console.table(res)
    askCustomerForItem(res)
  })
}

const lowInventory = items => {
  inquirer.prompt([{
    type: "input",
    name: "id",
    message: "",
  }
  ]).then(val => {
    const userQuantity = val.quantity
    connection.query("SELECT * FROM products WHERE item_id =" + val.id, (err, res) => {
      if (err) throw err
      const stockQuantity = res[0].stock_quantity
      const priceOfCart = res[0].price * userQuantity
      console.log(stockQuantity)
      if (userQuantity <= stockQuantity) {
        console.log("We have enough in stock!")
        const newQuantity = stockQuantity - userQuantity
        customerCheckoutCart(val.id, newQuantity, priceOfCart)
      }
      else {
        console.log("Insufficient quantity!")
        main()
      }
    })
  })
}
