// declare an empty array named <inventory> that will store product objects having a key <name> with the value of a <lowercase> string, and a key <quantity> with the value of an <integer>.

let inventory = [];

// Function to find the index of a product in the inventory array.
// function named <findProductIndex> that takes the product <name> as its argument, <lower case string>, and returns the <index> of the corresponding product object inside the inventory array. If the product is not found, the function should <return -1>.

function strToLowerCase(str) {
  return str.toLowerCase();
};

function findProductIndex(product) {
  const prodName = strToLowerCase(product); // 'flour'
  product.name = prodName;
  if (inventory.length != 0) {
    for (let i = 0; i < inventory.length; i++) {
      if (inventory[i].name === prodName) { //?
        return i;//?
      }
    }
  }
  return -1;//?
};

// function named <addProduct> that takes the product <name> and <quantity> as its arguments. If the product already <exists> in the inventory, the function should <increase> the <quantity> of that product by the given quantity. If the product <does not exist>, the function should <add> a new product object to the inventory array with the given name and quantity. The function should <return> the <updated> inventory array.

function addProduct(product) {
  if (typeof product.quantity !== 'number' || product.quantity <= 0 || !Number.isInteger(product.quantity)) {
    return 'Quantity must be a positive integer.';
  }
  product.name = strToLowerCase(product.name); //?
  let index = findProductIndex(product.name); //?
  if (index !== -1) { 
    inventory[index].quantity += product.quantity; //?
  }
  if (index === -1) {
    const newProduct = { name: product.name, quantity: product.quantity }; //?
    inventory.push(newProduct);
  } 
  return inventory; //?
};

// function named <removeProduct> that takes the product <name> and <quantity> as its arguments. If the product exists in the inventory, the function should <decrease> the quantity of that product by the given quantity and log Remaining ${product} pieces: ?? to the console. If the resulting quantity is <less than zero: Not enough ${product} available, remaining pieces: ??, or equal to zero: remove product from inventory>, the function should <remove> the product object from the inventory array. If the product <does not exist>, the function should return a message indicating that the product was <not found>. The function should <return> the updated <inventory array>.

function removeProduct(name, quantity) {
  name = strToLowerCase(name); //?
  const index = findProductIndex(name);
  if (index === -1) {
    return `${name} "not found"`;
  }
  if (inventory[index].quantity - quantity <= 0) {
    inventory = inventory.splice(inventory[index], 1);
    console.log(inventory);
    return 
  }
  console.log(index);

  return inventory;
};

// console.log(inventory.length);
// inventory = [{name: 'flour', quantity: 1}];
// console.log(inventory.length);
// findProductIndex("flour");
addProduct({name: "FLOUR", quantity: 5});
// console.log(inventory);
console.log(inventory.length);
addProduct({name: "FLour", quantity: 5});
// console.log(inventory);
// console.log(inventory.length);
addProduct({name: "SugAr", quantity: 5});
console.log(inventory);
addProduct({name: "SUgar", quantity: 10});
console.log(inventory);



// console.log(inventory.length);
// inventory = [{name: 'flour', quantity: 1}];
// console.log(inventory.length);
// findProductIndex("flour");
addProduct({name: "FLOUR", quantity: 5});
// console.log(inventory);
console.log(inventory.length);
addProduct({name: "FLour", quantity: 5});
// console.log(inventory);
// console.log(inventory.length);
addProduct({name: "SugAr", quantity: 5});
console.log(inventory);
addProduct({name: "SUgar", quantity: 10});
console.log(inventory);
removeProduct("sugar", 30);








