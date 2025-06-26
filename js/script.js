


// product script
fetch('http://127.0.0.1:5500/JS/product.json')
    .then(response => response.json())
    .then(data => {
        const bottomDiv = document.querySelector("#bottom");

        data.products.forEach(product => {
            const item = document.createElement("div");
            item.classList.add("item");

            // Add "New" label only if product.new is not null
            let newLabel = "";
            if (product.new !== null) {
                newLabel = `
                    <div class="left">
                        <p>${product.new}</p>
                    </div>`;
            }

            item.innerHTML = `
                <div class="image">
                    ${newLabel}  <!-- "New" label appears inside .image -->
                    <div class="center">
                        <img src="${product.image}" alt="${product.name}"/>
                    </div>
                    <div class="right">
                        <a href="#"><img src="${product.rimage}" alt="View"></a>
                        <a href="#"><img src="${product.himage}" alt="Like"></a>
                    </div>
                    <div class="cart-btn">
                        <button>Add to Cart</button>
                    </div>
                </div>
                
                <div class="container">
                    <h5>${product.name}</h5>
                    <ul>
                        <li><p class="price">${product.price}</p></li>
                        <li><img class="rating" src="${product.rating}" alt="Rating"></li>
                        <li><p class="rate">(${product.reviews})</p></li>
                    </ul>
                </div>
            `;

            bottomDiv.appendChild(item);
        });
    })
    .catch(error => console.error("Error fetching JSON:", error));



//menu button
function toggleMenu() {
    const menu = document.getElementById('menu');

    if (menu.style.display === 'block') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
    }
}







document.getElementById('searchInput').addEventListener('input', function() {
    let searchQuery = this.value.toLowerCase();
    let items = document.querySelectorAll('#bottom .item');
    
    items.forEach(item => {
        let itemText = item.textContent.toLowerCase();
        
        if (itemText.includes(searchQuery)) {
            item.style.display = 'block';  // Show the item if it matches the search
        } else {
            item.style.display = 'none';   // Hide the item if it doesn't match the search
        }
    });
});





