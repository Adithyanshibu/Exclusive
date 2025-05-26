// Fetch all products and initilize search 

const productList = document.getElementById("product_container");
const searchInput = document.getElementById("search_bar");

window.addEventListener("load", function () {
  fetch("./js/all.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Error fetching products");
      }
      console.log("Fetched successfully:", response);
      return response.json();
    })
    .then((data) => {
      console.log("Data fetched:", data);

     
      const productItems = data.map((product) => {
        const productItem = document.createElement("li");
        productItem.classList.add("product-item");
        productItem.innerHTML = `
          <div class="product-card" id="product-card">
            <div class="product-icons">
              <img src="${product.image}" alt="${product.name}" />
              ${product.new ? '<span class="new-badge">NEW</span>' : ""}
              ${product.offer ? `<span class="offer-badge">${product.offer}</span>` : ""}
              <span class="icon-heart">
                <img src="${product.heart}" alt="${product.heart}" />
              </span>
              <span class="icon-eye">
                <img src="${product.eye}" alt="${product.eye}" />
              </span>
            </div>

            <div class="add-to-cart">
              <button class="cart">Add to Cart</button>
            </div>

            <h3 class="product-name">${product.name}</h3>

            <div class="rating">
              <p class="price">$${product.price}</p>
              <img src="${product.star}" alt="star" />
              <p class="review">(${product.reviews})</p>
            </div>

            <span class="colourchange">
              <img src="${product.colourchange}" alt="${product.colourchange}" />
            </span>
          </div>
        `;
        return productItem;
      });

  
      productList.append(...productItems);

      
      initializeSearch();
    })
    .catch((error) => {
      console.error("Error:", error);
    });
});


function initializeSearch() {
  if (searchInput && productList) {
    searchInput.addEventListener("input", () => {
      const filter = searchInput.value.toLowerCase();  // Get the search input value in lowercase

      // Loop through all product items and filter them based on the product name
      const productItems = productList.querySelectorAll(".product-item");

      productItems.forEach((product) => {
        const productName = product.querySelector(".product-name");

        if (productName) {
          const productText = productName.textContent.toLowerCase(); // Get product name text in lowercase

          if (productText.includes(filter)) {
            product.style.display = ""; // Show matching product
          } else {
            product.style.display = "none"; // Hide non-matching product
          }
        }
      });
    });
  }
}
