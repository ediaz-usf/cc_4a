// Create product array

let products = [
    {prodName: "apple", category: "fruit", price: 1, inventory: 50},
    {prodName: "banana", category: "fruit", price: 0.5, inventory: 100},
    {prodName: "carrot", category: "vegetable", price: 0.75, inventory: 80},
    {prodName: "shampoo", category: "personal care", price: 1.25, inventory: 60},
    {prodName: "chicken", category: "meat", price: 5, inventory: 30}
];

// apply category discounts
for (let product of products) {
    
    switch (product.category) {
        case "fruit":
            product.price = product.price * 0.8; // Apply 20% discount
            break;
        case "vegetable":
            product.price = product.price * 0.85; // Apply 15% discount
            break;
        case "meat" || "personal care":
            product.price = product.price * 0.9; // Apply 10% discount
            break;
        default:
            // No discount
            break;
    }

}

// create customer array
let customers = [
    {custName: "Alice", customerType: "regular", cart: [ "apple", "banana" ]},
    {custName: "Kevin", customerType: "student", cart: [ "carrot" ]},
    {custName: "Maria", customerType: "senior", cart: [ "shampoo", "chicken" ]}
];

// create customer discounts
for (let customer of customers) {

    if (customer.customerType === "student") {
        customerDiscount = 0.05; // Apply additional 5% discount
    } else if (customer.customerType === "senior") {
        customerDiscount = 0.07; // Apply additional 7% discount
    } else {
        // No additional discount
    }

}

// process each customer's cart
for (let customer in customers) {

    let subtotal = 0;

// calculate subtotal
    for (let item of customers[customer].cart) {
        let product = products.find(p => p.prodName === item);
        if (product) {
            subtotal = subtotal + product.price;
        }
    }

// update inventory after purchase
    for (let inventory of products) {
        if (customers[customer].cart.includes(inventory.prodName)) {
            inventory.inventory = inventory.inventory - 1; // Reduce inventory by 1 for each purchased item
        }
    }

// calculate total after customer discount
    total = subtotal * (1 - customerDiscount);

// show subtotal and total
    console.log(`Subtotal for ${customers[customer].custName}: $${subtotal.toFixed(2)}`);
    console.log(`Total for ${customers[customer].custName} after discount: $${total.toFixed(2)}`);

// show updated inventory
   products.forEach(product => {
       console.log(`Updated Inventory for ${product.prodName}: ${product.inventory}`);
   });

}