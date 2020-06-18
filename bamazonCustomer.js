const inquirer = require("inquirer")
const mysql = require("mysql")
require("console.table")

const connection = mysql.createConnection({
  host: '127.0.0.1',
  port: 3306,
  user: 'root',
  password: 'root',
  database: 'Bamazon'
});
connection.connect((err) => {
  if (err) throw err;
  console.log('Connected!');
  main()

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

const askCustomerForItem = items => {
  inquirer.prompt([{
    type: "input",
    name: "id",
    message: "What item would you like to purchase?",
    validate: function (value) {
      if (!isNaN(value)) {
        return true
      }
      return "Sorry! Not valid!"
    }
  },
  {
    type: "input",
    name: "quantity",
    message: "How many would you like to purchase?",
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

const customerCheckoutCart = (id, quantity, price) => {

  console.log(id, quantity, price)
  connection.query("UPDATE products SET ? WHERE ?", [
    { stock_quantity: quantity },
    { item_id: id }
  ],
    function (error) {
      if (error) throw err;
      console.log("Order placed successfully!");
      console.log("The total price is $" + price)

      main(); 
    }
  )
}