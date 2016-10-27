var mysql = require('mysql');
var inquirer = require('inquirer');

var connection = mysql.createConnection({
	host: 'm7wltxurw8d2n21q.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
	port: 3306,
	user: 'qlyjmwmo5mh22eay',
	password: 'wnh3khfstx9y5k7f',
	database: 'df178lc2sy8t3n6l'  //heroku data
});
connection.connect(function(err) {
    if (err) throw err;
	console.log("connected as id " + connection.threadId);
});

connection.query('SELECT * FROM Products', function(err, res){
		console.log('|===================================|');
		console.log('|======= WELCOME TO BAMAZON! =======|');
		console.log('|===================================|');
		console.log(' ___________________________________');
		console.log('|ID 	| PRODUCT 	| PRICE     |');
		console.log('|_______|_______________|___________|');
	for (var i = 0; i < res.length; i++){
		console.log('|' + res[i].Product_Id + '	| ' + res[i].Product_Name + ' 	| $' + res[i].Price + '	    |');
	}
		console.log('|___________________________________|');
	runSearch();
});

var runSearch = function(){
	//prompt user to enter the item Id & quantity
	inquirer.prompt([{
		name   : 'custItem',
		type   : 'input',
		message: 'Enter the ID of the product you would like to buy',
		// choices: ['Beauty', 'Clothes', 'Acessories']
	}, {
		name   : 'custQuan',
		type   : 'input',
		message: 'Enter the purchase quantity',
	}
    ]).then(function(answer) {
		connection.query('SELECT * FROM Products WHERE Product_Id=?', [answer.custItem], function(err, res) {
			//console.log(res);
			//if response is less than stock quantity input
			if (res[0].Stock_Quantity < answer.custQuan) {
				console.log('|================================================|');
				console.log('| INSUFFICIENT QUANTITY! -- CHOOSE ANOTHER ITEM! |');
				console.log('|================================================|');
				runSearch();
    		} else {
    		var query = 'UPDATE Products SET Stock_Quantity = Stock_Quantity-? WHERE Product_Id=?'
			connection.query(query, [answer.custQuan, answer.custItem], function(err, res) {
			})
				console.log('|===================================|');
				console.log('| Thank you for placing your order! |');
				console.log('|___________________________________|');
				console.log('|       ORDER DETAILS 		    |');
				console.log('| Product Purchased: ' + res[0].Product_Name + '         |')
				console.log('| Quantity: ' + answer.custQuan + ' units x $' + res[0].Price + ' 	    |')
				console.log('| TOTAL COST OF PURCHASE: $' + res[0].Price * answer.custQuan + '	    |')
				console.log('|===================================|');
				runSearch();
		}		
	})
});
}

// var beautySearch = function(){
// 	inquirer.prompt({
// 		type: 'input',
// 		name: 'Product_Id',
// 		message: 'What products would you like to purchse?',
// 	}).then(function(answer){
// 		var query = 'SELECT * FROM Products WHERE ?'
// 		connection.query(query,{Product_Id: answer.Product_Id}, function(err, res) {
// 			for (var i = 0; i < answer.length; i++){
// 				console.log('ID:' + res[i].Product_Id + "|| Price:" + res[i].Price + " || Stock_Quantity: " + res[i].Stock_Quantity);
// 			}
// 			runSearch();
// 		})
// 	})
// }

