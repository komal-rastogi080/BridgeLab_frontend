/**
 * Q6 – E-Commerce Dashboard: Product Card Fetcher
 * Fetches product data from Fake Store API and logs/displays it.
 */

const API_URL = "https://fakestoreapi.com/products?limit=5"; // Limiting to 5 for cleaner console output

/**
 * Fetches product data using async/await and displays details.
 */
async function fetchAndDisplayProducts() {
    console.log("--- Fetching Product Data ---");
    try {
        const response = await fetch(API_URL);
        
        // Check for HTTP errors (e.g., 404, 500)
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        
        const products = await response.json();
        const outputContainer = document.getElementById('product-container');

        console.log("\n✅ Products Loaded Successfully:");

        products.forEach(product => {
            // Log details to console
            console.log(`-----------------------------------`);
            console.log(`Product: ${product.title}`);
            console.log(`Price: $${product.price.toFixed(2)}`);
            console.log(`Image: ${product.image}`);
            
            // Optional Bonus: Create HTML product cards
            if (outputContainer) {
                const card = document.createElement('div');
                card.className = 'product-card';
                card.innerHTML = `
                    <img src="${product.image}" alt="${product.title}" style="width: 100px; height: 100px; object-fit: contain;">
                    <h4>${product.title}</h4>
                    <p><strong>$${product.price.toFixed(2)}</strong></p>
                `;
                outputContainer.appendChild(card);
            }
        });

    } catch (error) {
        // Handle fetch errors (network, JSON parsing, HTTP status errors)
        console.error("❌ Fetch Error:", error);
        
        if (document.body) {
            const errorMessage = document.createElement('p');
            errorMessage.textContent = "Failed to load products. Please try again.";
            errorMessage.style.color = 'red';
            document.body.appendChild(errorMessage);
        }
    }
}

// Note: To test the HTML part, you must run this in a browser environment with the following HTML:
/*
// q6_index.html
<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><title>Product Fetcher</title>
<style>.product-card { border: 1px solid #ccc; padding: 10px; margin: 10px; display: inline-block; width: 200px; text-align: center;}</style>
</head>
<body>
    <h2>E-Commerce Dashboard</h2>
    <div id="product-container"></div>
    <script src="q6_product_fetcher.js"></script>
</body>
</html>
*/

// Execute the function
fetchAndDisplayProducts();