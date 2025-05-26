// fetch category 


const productlist = document.getElementById("category");

window.addEventListener("load", function() {
   
    fetch('./js/Category.json') 
        .then(response => {
            if (!response.ok) {
                throw new Error('Error fetching categories');
            }
            return response.json();
        })
        .then(data => {
            console.log("Data fetched:", data); 
            
            const devicelists = data.categories.map(category => {
                const devicelist = document.createElement("li"); 
                devicelist.innerHTML = `
                    <img src="${category.image}" alt="category image" />
                    <p>${category.name}</p>
                `;
                return devicelist; 
            });

            
            productlist.append(...devicelists);
        })
        .catch(error => {
            console.error("Error:", errpor
                
            ); 
        });
});




// Fetch products 


const productList = document.getElementById("product_container");

window.addEventListener("load", function () {

  fetch("./js/Products.json")
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
          <div class="product-card">
             <div class="product-icons">
                <img src="${product.image}" alt="${product.name}" />
                ${
                    product.new
                    ? '<span class="new-badge">NEW</span>'
                    : ""
                }
                <span class="icon-heart">
                    <img src="${product.heart}" alt="${product.heart}" 
                </span>
                <span class="icon-eye">
                    <img src="${product.eye}" alt="${product.eye}" 
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
                <img src="${product.colourchange}" alt="${product.colourchange}" 
            </span>
            
            
          </div>
        `;
        return productItem;
      });

      
      productList.append(...productItems);
    })
    .catch((error) => {
      console.error("Error:", error); 
    });
});



// Select elements


const searchIcon = document.getElementById('Component_2');
const searchBarInput = document.getElementById('search_bar');
const searchBarContainer = document.getElementById('search_bar_container');


searchIcon.addEventListener('click', function () {
    if (searchBarInput.style.display === 'none' || searchBarInput.style.display === '') {
       
        searchBarInput.style.display = 'block';
        searchBarInput.style.width = '200px'; 
        searchBarContainer.style.padding = '10px 15px'; 
        searchBarInput.focus();
    } else {
        
        searchBarInput.style.display = 'none';
        searchBarInput.style.width = '0'; 
        searchBarContainer.style.padding = '5px'; 
    }
});


// Select the menu button and the menu list
const menuButton = document.getElementById('menu_button');
        const menuList = document.getElementById('menu-list');

        menuButton.addEventListener('click', () => {
            if (menuList.style.display === 'none') {
                menuList.style.display = 'block'; // Show the menu
            } else {
                menuList.style.display = 'none'; // Hide the menu
            }
        });
