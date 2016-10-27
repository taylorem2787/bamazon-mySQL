//Manager View (Next Level)
// * Create a new Node application called `BamazonManager.js`. Running this application will:
// 	* List a set of menu options: 
// 		* View Products for Sale 
// 		* View Low Inventory
// 		* Add to Inventory
// 		* Add New Product

// 	* If a manager selects `View Products for Sale`, the app should list every available item: the item IDs, names, prices, and quantities.
// 	* If a manager selects `View Low Inventory`, then it should list all items with a inventory count lower than five.
// 	* If a manager selects `Add to Inventory`, your app should display a prompt that will let the manager "add more" of any item currently in the store. 
// 	* If a manager selects `Add New Product`, it should allow the manager to add a completely new product to the store.
//var prompt = require('prompt')
var mysql 	 = require('mysql');
var inquirer = require('inquirer');

var connection = mysql.createConnection({
	host	 : 'm7wltxurw8d2n21q.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
	port 	 : 3306,
	user	 : 'qlyjmwmo5mh22eay',
	password : 'wnh3khfstx9y5k7f',
	database : 'df178lc2sy8t3n6l'  //heroku data
});

// FUNCTIONS======================================================================
// Check Connection 
connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    manageInv();
})

// connection.query('SELECT * FROM Products', function(err, res) {
// 		console.log('|===============================================|');
// 		console.log('|============ BAMAZON MANAGER VIEW =============|');
// 		console.log('|===============================================|');
//     for (var i = 0; i < res.length; i++) {
//         console.log('|' + res[i].Product_Id + '		' + res[i].Product_Name + "		|	" + res[i].Department_Name + " 		| " + res[i].Price + " | " + res[i].Stock_Quantity);
//     }
//     console.log("-----------------------------------");
//     menuOptions();
// })

function manageInv() {
	productsView = [];
	lowInvenView = [];
    inquirer.prompt({
        name: "InventoryMenu",
        type: "list",
        message: "Choose from the Inventory Menu options",
        choices: ["View Products for Sale", "View Low Inventory", "Add to Inventory", "Add New Product"]
    }).then(function(answer) {
        switch(answer.InventoryMenu) {
            case "View Products for Sale":
                viewSale();
            break;

            case "View Low Inventory":
                viewLowI();
            break;

            case "Add to Inventory":
                addInvy();
            break;

            case "Add New Product":
                addProd();
            break;
            default:
            console.log('Wrong Input');
        }
    })
};
//Go back to main menu
function mainMenu(){
	inquirer.prompt({
		name: "goBack",
		type: "list",
		message: "Return to main menu?",
		choices: ['Yes', 'No']
	}).then(function(answer){
		if (answer.goBack == 'Yes'){
			manageInv();
		} else {
			connection.end();
		}
	})
};


function viewSale(){
	connection.query('SELECT * FROM Products', function(err, res) {
    		console.log('|=====================================================================|');
			console.log('|====================== BAMAZON INVENTORY VIEW =======================|');
			console.log("|---------------------------------------------------------------------|");
			console.log('|ID       PRODUCT  	    | DEPARTMENT   | PRICE  | STOCK QUANTITY  |');
			console.log("|---------------------------------------------------------------------|");
	    
	    for (var i = 0; i<res.length; i++) {
	        console.log('|' + res[i].Product_Id + '	  ' + res[i].Product_Name + " 	    | " + res[i].Department_Name + " 		  | " + res[i].Price + " | " + res[i].Stock_Quantity + " | ");
	    	productsView.push(res[i]);
	    	console.log("|---------------------------------------------------------------------|");
	    }	
	mainMenu();
	})
};

function viewLowI(){
	var query = 'SELECT * FROM Products WHERE Stock_Quantity < 5';
	connection.query(query, function(err, res) {
    		console.log('|=====================================================================|');
			console.log('|====================== BAMAZON INVENTORY VIEW =======================|');
			console.log("|---------------------------------------------------------------------|");
			console.log('|ID     | PRODUCT  	  | DEPARTMENT   | PRICE  | STOCK QUANTITY |');
			console.log("|---------------------------------------------------------------------|");
       
		for (var i = 0; i<res.length; i++) {
			console.log('|' + res[i].Product_Id + '	  ' + res[i].Product_Name + " 	  | " + res[i].Department_Name + " 	  |" + res[i].Price + " 	| " + res[i].Stock_Quantity + " 	| ");
			lowInvenView.push(res[i]);
			console.log("|---------------------------------------------------------------------|");
		}
				//console.log("------------------------------------------------");
	mainMenu();
	})
};


			//console.log('|' + res[i].Product_Id + '	| ' + res[i].Product_Name + ' 	| $' + res[i].Department_Name + ' | ' + res[i].Price + '|' + res[i].Stock_Quantity + '	    |');
	
		//console.log('|___________________________________|');
    	//menuOptions();
    
 