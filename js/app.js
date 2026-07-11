let currentCurrency = 'IDR';
let currentLanguage = 'id';
let currentUser = null;
let salesChartInstance = null;

window.onload = function() {
    renderProducts();
    updateDashboardStats();
};

function checkAuth() {
    if (!currentUser) {
        alert(currentLanguage === 'en' ? "Please login first to enjoy our shopping features!" : "Silakan masuk (login) terlebih dahulu untuk menikmati fitur belanja kami!");
        openLoginModal();
        return false;
    }
    return true;
}

function handleSocialClick(url) {
    if (checkAuth()) {
        window.open(url, '_blank');
    }
}

function renderProducts() {
    const priaContainer = document.getElementById('products-pria-container');
    const wanitaContainer = document.getElementById('products-wanita-container');
    
    priaContainer.innerHTML = '';
    wanitaContainer.innerHTML = '';

    let hasPria = false;
    let hasWanita = false;

    products.forEach(p => {
        let formattedPrice = formatCurrencyValue(p[`price${currentCurrency}`]);
        let stars = '⭐'.repeat(p.rating);
        let isWishlistActive = wishlist.some(item => item.id === p.id) ? 'active' : '';
        let productName = p.name;
        let btnText = currentLanguage === 'en' ? '🛒 Add to Cart' : '🛒 Tambah Keranjang';
        
        let cardHTML = `
            <div class="product-card">
                <button class="wishlist-btn ${isWishlistActive}" onclick="addToWishlist(${p.id}, this)">❤️</button>
                <img src="${p.img}" alt="${productName}" onclick="openDetailModal(${p.id})">
                <div class="product-info">
                    <span class="category-tag">${p.category.toUpperCase()}</span>
                    <h3 onclick="openDetailModal(${p.id})">${productName}</h3>
                    <div class="rating">${stars}</div>
                    <div class="price">${formattedPrice}</div>
                    <button class="btn-add-cart" onclick="addToCart(${p.id})">${btnText}</button>
                    <a href="https://wa.me/6281234567890?text=Halo%20Veloce,%20saya%20tertarik%20dengan%20${encodeURIComponent(productName)}" class="btn-whatsapp-chat" target="_blank">
                        <i class="fab fa-whatsapp"></i> Chat WhatsApp
                    </a>
                </div>
            </div>
        `;

        if (p.gender === 'pria') {
            priaContainer.innerHTML += cardHTML;
            hasPria = true;
        } else if (p.gender === 'wanita') {
            wanitaContainer.innerHTML += cardHTML;
            hasWanita = true;
        }
    });

    document.getElementById('section-pria-wrapper').style.display = hasPria ? 'block' : 'none';
    document.getElementById('section-wanita-wrapper').style.display = hasWanita ? 'block' : 'none';
    
    let emptyText = currentLanguage === 'en' ? 'Product not found.' : 'Produk tidak ditemukan.';
    document.getElementById('search-empty-fallback').innerText = emptyText;
    document.getElementById('search-empty-fallback').style.display = (!hasPria && !hasWanita) ? 'block' : 'none';
}

function switchLanguage(lang) {
    currentLanguage = lang;
    
    if(lang === 'en') {
        document.getElementById('txt-hero-title').innerText = "Luxury Timepieces in Your Hands";
        document.getElementById('txt-hero-desc').innerText = "Exclusive original premium watch collections from worldwide world-class brands.";
        document.getElementById('txt-hero-btn').innerText = "Explore Products";
        document.getElementById('txt-catalog-pria-title').innerHTML = "Men's <span>Featured Catalog</span>";
        document.getElementById('txt-catalog-wanita-title').innerHTML = "Women's <span>Featured Catalog</span>";
        document.getElementById('search-input').placeholder = "Search your dream watch...";
        document.getElementById('gender-filter').options[0].text = "All Genders";
        document.getElementById('gender-filter').options[1].text = "Men";
        document.getElementById('gender-filter').options[2].text = "Women";
        document.getElementById('category-filter').options[0].text = "All Styles";
        document.getElementById('wishlist-toggle-btn').innerHTML = `❤️ Wishlist (<span id="wishlist-count">${wishlist.length}</span>)`;
        document.getElementById('cart-toggle-btn').innerHTML = `🛒 Cart (<span id="cart-count">${cart.length}</span>)`;
        document.getElementById('txt-cart-sidebar-title').innerText = "Shopping Cart";
        document.getElementById('txt-wishlist-sidebar-title').innerText = "Wishlist";
        document.getElementById('txt-cart-total-label').innerText = "Total:";
        document.getElementById('txt-checkout-btn').innerText = "Proceed to Checkout";
        document.getElementById('txt-static-review-title').innerText = "What They Say?";
        document.getElementById('txt-checkout-form-title').innerText = "Payment Form";
        document.getElementById('txt-label-name').innerText = "Full Name";
        document.getElementById('txt-label-email').innerText = "Email Address";
        document.getElementById('txt-label-payment').innerText = "Payment Method";
        document.getElementById('txt-confirm-order-btn').innerText = "Confirm Order";
        document.getElementById('txt-processing-payment').innerText = "Processing your transaction...";
        document.getElementById('txt-payment-success-title').innerText = "Transaction Success!";
        document.getElementById('txt-qrcode-instruction').innerText = "SCAN THE QR CODE BELOW TO PAY";
        document.getElementById('txt-success-done-btn').innerText = "Done";
        document.getElementById('txt-footer-about').innerText = "The ultimate destination for premium curated original watches to elevate your prestige and exclusive appearance.";
        document.getElementById('txt-footer-hubungi').innerText = "Contact Us";
        document.getElementById('txt-footer-kategori').innerText = "Popular Categories";
    } else {
        document.getElementById('txt-hero-title').innerText = "Kemewahan Waktu dalam Genggaman";
        document.getElementById('txt-hero-desc').innerText = "Koleksi jam tangan premium original dari brand ternama dunia dengan pelayanan eksklusif.";
        document.getElementById('txt-hero-btn').innerText = "Jelajahi Produk";
        document.getElementById('txt-catalog-pria-title').innerHTML = "Katalog Unggulan <span>Pria</span>";
        document.getElementById('txt-catalog-wanita-title').innerHTML = "Katalog Unggulan <span>Wanita</span>";
        document.getElementById('search-input').placeholder = "Cari jam tangan impian Anda...";
        document.getElementById('gender-filter').options[0].text = "Semua Gender";
        document.getElementById('gender-filter').options[1].text = "Pria";
        document.getElementById('gender-filter').options[2].text = "Wanita";
        document.getElementById('category-filter').options[0].text = "Semua Gaya";
        document.getElementById('wishlist-toggle-btn').innerHTML = `❤️ Wishlist (<span id="wishlist-count">${wishlist.length}</span>)`;
        document.getElementById('cart-toggle-btn').innerHTML = `🛒 Keranjang (<span id="cart-count">${cart.length}</span>)`;
        document.getElementById('txt-cart-sidebar-title').innerText = "Keranjang Belanja";
        document.getElementById('txt-wishlist-sidebar-title').innerText = "Daftar Keinginan (Wishlist)";
        document.getElementById('txt-cart-total-label').innerText = "Total:";
        document.getElementById('txt-checkout-btn').innerText = "Proses Pembayaran";
        document.getElementById('txt-static-review-title').innerText = "Apa Kata Mereka?";
        document.getElementById('txt-checkout-form-title').innerText = "Formulir Pembayaran";
        document.getElementById('txt-label-name').innerText = "Nama Lengkap";
        document.getElementById('txt-label-email').innerText = "Alamat Email";
        document.getElementById('txt-label-payment').innerText = "Metode Pembayaran";
        document.getElementById('txt-confirm-order-btn').innerText = "Konfirmasi Pemesanan";
        document.getElementById('txt-processing-payment').innerText = "Memproses transaksi Anda...";
        document.getElementById('txt-payment-success-title').innerText = "Transaksi Sukses!";
        document.getElementById('txt-qrcode-instruction').innerText = "PINDAI KODE QR DI BAWAH UNTUK MEMBAYAR";
        document.getElementById('txt-success-done-btn').innerText = "Selesai";
        document.getElementById('txt-footer-about').innerText = "Destinasi kurasi jam tangan premium original terbaik untuk menunjang wibawa dan penampilan eksklusif Anda.";
        document.getElementById('txt-footer-hubungi').innerText = "Hubungi Kami";
        document.getElementById('txt-footer-kategori').innerText = "Kategori Populer";
    }
    
    renderProducts();
    updateCartUI();
}

function filterProducts() {
    const query = document.getElementById('search-input').value.toLowerCase();
    const gender = document.getElementById('gender-filter').value;
    const category = document.getElementById('category-filter').value;

    const originalProducts = [...products];
    
    products = originalProducts.filter(p => {
        const productName = p.name.toLowerCase();
        const matchQuery = productName.includes(query);
        const matchGender = (gender === 'all' || p.gender === gender);
        const matchCategory = (category === 'all' || p.category === category);
        return matchQuery && matchGender && matchCategory;
    });

    renderProducts();
    products = originalProducts; 
}

function formatCurrencyValue(val) {
    if (currentCurrency === 'IDR') return 'Rp ' + val.toLocaleString('id-ID');
    if (currentCurrency === 'USD') return '$' + val.toLocaleString('en-US');
    if (currentCurrency === 'EUR') return '€' + val.toLocaleString('de-DE');
    return val;
}

function switchCurrency(type) {
    currentCurrency = type;
    renderProducts();
    updateCartUI();
}

function openLoginModal() { document.getElementById('login-modal').classList.add('active'); }
// Fungsi penutup login dan modal universal
function closeLoginModal() { document.getElementById('login-modal').classList.remove('active'); }
function closeModal(id) { document.getElementById(id).classList.remove('active'); }

function toggleSidebar(id) { 
    if (checkAuth()) {
        document.getElementById(id).classList.toggle('active'); 
    }
}

function handleLogin(e) {
    e.preventDefault();
    const role = document.getElementById('login-role').value;
    const user = document.getElementById('login-username').value;
    
    currentUser = { username: user, role: role };
    closeLoginModal();

    document.getElementById('login-nav-btn').style.display = 'none';
    const statusNode = document.getElementById('user-info-status');
    statusNode.style.display = 'block';
    statusNode.innerText = `Halo, ${user} (${role.toUpperCase()})`;

    if (role === 'seller') {
        showSection('seller');
        initChart();
    } else {
        showSection('buyer');
    }
}

function logout() {
    currentUser = null;
    cart = [];
    wishlist = [];
    updateCartUI();
    updateWishlistUI();
    document.getElementById('login-nav-btn').style.display = 'block';
    document.getElementById('user-info-status').style.display = 'none';
    showSection('buyer');
}

function showSection(section) {
    if (section === 'seller') {
        document.getElementById('buyer-section').style.display = 'none';
        document.getElementById('seller-dashboard-section').style.display = 'block';
        renderAdminTable();
    } else {
        document.getElementById('buyer-section').style.display = 'block';
        document.getElementById('seller-dashboard-section').style.display = 'none';
        renderProducts();
    }
}

function openDetailModal(id) {
    if (!checkAuth()) return;
    const p = products.find(prod => prod.id === id);
    const modalBody = document.getElementById('detail-product-body');
    let reviewList = p.reviews.map(r => `<div class="review-item"><p>${r}</p></div>`).join('');
    
    let productName = p.name;
    let productDesc = p.desc;
    let categoryLabel = currentLanguage === 'en' ? 'Category' : 'Kategori';
    let stockLabel = currentLanguage === 'en' ? 'Available Stock' : 'Stok Tersedia';
    let btnText = currentLanguage === 'en' ? '🛒 Buy this product' : '🛒 Beli Produk Ini';
    let reviewTitle = currentLanguage === 'en' ? `User Reviews (${p.reviews.length})` : `Ulasan Pengguna (${p.reviews.length})`;
    let noReview = currentLanguage === 'en' ? 'No reviews yet.' : 'Belum ada ulasan.';

    modalBody.innerHTML = `
        <div style="display:flex; gap:2rem; flex-wrap:wrap;">
            <img src="${p.img}" style="max-width:280px; width:100%; border-radius:8px; object-fit:cover; background:#e2e8f0;">
            <div style="flex:1;">
                <h2>${productName}</h2>
                <p style="color:var(--accent-color); font-weight:600; margin-top:0.5rem;">${categoryLabel}: ${p.category.toUpperCase()}</p>
                <h3 style="margin: 1rem 0;">${formatCurrencyValue(p[`price${currentCurrency}`])}</h3>
                <p style="font-size:0.9rem; color:#475569; line-height:1.6; margin-bottom:1.5rem;">${productDesc}</p>
                <p>${stockLabel}: <strong>${p.stock} Pcs</strong></p>
                <button class="btn-add-cart" style="margin-top:1.5rem;" onclick="addToCart(${p.id}); closeModal('detail-modal');">${btnText}</button>
            </div>
        </div>
        <div class="review-box">
            <h4>${reviewTitle}</h4>
            <div style="margin-top:1rem;">${reviewList || `<p style="color:gray; font-size:0.85rem;">${noReview}</p>`}</div>
        </div>
    `;
    document.getElementById('detail-modal').classList.add('active');
}

function renderAdminTable() {
    const tbody = document.getElementById('admin-product-rows');
    tbody.innerHTML = '';
    products.forEach(p => {
        tbody.innerHTML += `
            <tr>
                <td style="font-weight:600;">${p.name}</td>
                <td><input type="number" value="${p.priceIDR}" onchange="updateAdminPrice(${p.id}, 'priceIDR', this.value)" style="width:90px; padding:0.2rem;"></td>
                <td><input type="number" value="${p.priceUSD}" onchange="updateAdminPrice(${p.id}, 'priceUSD', this.value)" style="width:70px; padding:0.2rem;"></td>
                <td><input type="number" value="${p.priceEUR}" onchange="updateAdminPrice(${p.id}, 'priceEUR', this.value)" style="width:70px; padding:0.2rem;"></td>
                <td><input type="number" value="${p.stock}" onchange="updateAdminPrice(${p.id}, 'stock', this.value)" style="width:50px; padding:0.2rem;"></td>
                <td><button class="btn-remove-item" onclick="deleteAdminProduct(${p.id})" style="font-size:0.75rem;">Hapus</button></td>
            </tr>
        `;
    });
}

function updateAdminPrice(id, field, value) {
    const p = products.find(prod => prod.id === id);
    p[field] = parseInt(value);
    updateDashboardStats();
}

function deleteAdminProduct(id) {
    products = products.filter(p => p.id !== id);
    renderAdminTable();
    renderProducts();
}

function updateDashboardStats() {
    document.getElementById('admin-total-revenue').innerText = "Rp 125.500.000";
    document.getElementById('admin-total-profit').innerText = "Rp 42.150.000";
    document.getElementById('admin-total-sold').innerText = "24 Pcs";
}

function initChart() {
    const ctx = document.getElementById('salesChart').getContext('2d');
    if (salesChartInstance) salesChartInstance.destroy();
    
    salesChartInstance = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun'],
            datasets: [{
                label: 'Omset Bulanan (Juta Rp)',
                data: [12, 19, 28, 22, 34, 45],
                borderColor: '#b45309',
                backgroundColor: 'rgba(180, 83, 9, 0.1)',
                borderWidth: 3,
                fill: true
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    });
}