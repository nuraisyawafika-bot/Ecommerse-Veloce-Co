let wishlist = [];

function addToWishlist(id, element) {
    if (!checkAuth()) return;
    const item = products.find(p => p.id === id);
    const itemIndex = wishlist.findIndex(p => p.id === id);

    if (itemIndex > -1) {
        wishlist.splice(itemIndex, 1);
        if (element) element.classList.remove('active');
    } else {
        wishlist.push(item);
        if (element) element.classList.add('active');
    }
    updateWishlistUI();
}

function updateWishlistUI() {
    document.getElementById('wishlist-count').innerText = wishlist.length;
    const container = document.getElementById('wishlist-items-container');
    container.innerHTML = '';
    wishlist.forEach(item => {
        let productName = item.name;
        container.innerHTML += `
            <div class="cart-item">
                <img src="${item.img}">
                <div class="cart-item-info">
                    <h4>${productName}</h4>
                </div>
            </div>
        `;
    });
}