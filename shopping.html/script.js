// JavaScript to handle clicks on categories
const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
  card.addEventListener("click", () => {
    alert(`You clicked on ${card.querySelector(".overlay").textContent}!`);
    // Add navigation or other actions here
  });
});

// Function to display products
function displayProducts(filteredProducts) {
  const productList = document.getElementById("product-list");
  productList.innerHTML = ""; // Clear existing products
  filteredProducts.forEach((product) => {
    const productItem = `<div class="product-item">
                          <h4>${product.name}</h4>
                          <p>Category: ${product.category}</p>
                          <p>Price: $${product.price}</p>
                          <p>Rating: ${product.rating} stars</p>
                        </div>`;
    productList.innerHTML += productItem;
  });
}

// Function to apply price filter
function applyPriceFilter() {
  const minPrice = parseFloat(document.getElementById("min-price").value) || 0;
  const maxPrice =
    parseFloat(document.getElementById("max-price").value) || Infinity;

  if (minPrice > maxPrice) {
    alert("Min price cannot be greater than Max price.");
    return;
  }

  const filteredProducts = products.filter((product) => {
    return product.price >= minPrice && product.price <= maxPrice;
  });

  console.log("Filtered Products: ", filteredProducts); // Check if filtering is correct
  displayProducts(filteredProducts); // Update the UI with filtered products

  // Initial display of all products
  displayProducts(products);

  // Add event listener to the "Apply Filter" button
  document
    .getElementById("apply-price-filter")
    .addEventListener("click", applyPriceFilter);
}
