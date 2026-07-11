let cart = [];

function addToCart(id) {
    if (!checkAuth()) return;
    const item = products.find(p => p.id === id);
    cart.push(item);
    updateCartUI();
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartUI();
}

function updateCartUI() {
    document.getElementById('cart-count').innerText = cart.length;
    const container = document.getElementById('cart-items-container');
    container.innerHTML = '';
    
    let total = 0;
    cart.forEach((item, index) => {
        total += item[`price${currentCurrency}`];
        let productName = item.name;
        container.innerHTML += `
            <div class="cart-item">
                <img src="${item.img}">
                <div class="cart-item-info">
                    <h4>${productName}</h4>
                    <p>${formatCurrencyValue(item[`price${currentCurrency}`])}</p>
                </div>
                <button class="btn-remove-item" onclick="removeFromCart(${index})">✕</button>
            </div>
        `;
    });
    document.getElementById('cart-total-price').innerText = formatCurrencyValue(total);
}