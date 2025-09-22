// Create porduct array

let products = [
    {prodName: "apple", category: "fruit", price: 1, inventory: 50},
    {prodName: "banana", category: "fruit", price: 0.5, inventory: 100},
    {prodName: "carrot", category: "vegetable", price: 0.75, inventory: 80},
    {prodName: "shampoo", category: "personal care", price: 1.25, inventory: 60},
    {prodName: "chicken", category: "meat", price: 5, inventory: 30}
];

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

let customers = [
    {custName: "Alice", customerType: "regular", cart: [ "apple", "banana" ]},
    {custName: "Kevin", customerType: "student", cart: [ "carrot" ]},
    {custName: "Maria", customerType: "senior", cart: [ "shampoo", "chicken" ]}
];

for (let customer of customers) {

    if (customer.customerType === "student") {
        customerDiscount = 0.05; // Apply additional 5% discount
    } else if (customer.customerType === "senior") {
        customerDiscount = 0.07; // Apply additional 7% discount
    } else {
        // No additional discount
    }

}