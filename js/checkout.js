function openCheckoutModal() {
    if(cart.length === 0) return alert(currentLanguage === 'en' ? "Your cart is empty." : "Keranjang Anda kosong.");
    document.getElementById('cart-sidebar').classList.remove('active');
    document.getElementById('checkout-modal').classList.add('active');
}

function handleCheckoutSubmit(e) {
    e.preventDefault();
    document.getElementById('checkout-modal').classList.remove('active');
    
    document.getElementById('loading-overlay').classList.add('active');
    document.getElementById('payment-loading-screen').style.display = 'block';
    document.getElementById('payment-success-screen').style.display = 'none';

    setTimeout(() => {
        document.getElementById('payment-loading-screen').style.display = 'none';
        document.getElementById('payment-success-screen').style.display = 'block';
        
        const name = document.getElementById('customer-name').value;
        const method = document.getElementById('payment-method').value;
        
        let msg = currentLanguage === 'en' ? `Thank you ${name}, your order has been successfully processed.` : `Terima kasih ${name}, pesanan Anda telah berhasil tercatat.`;
        document.getElementById('success-message-text').innerText = msg;

        if(method === 'qris') {
            document.getElementById('qrcode-area').style.display = 'block';
            document.getElementById('qrcode-container').innerHTML = "";
            new QRCode(document.getElementById("qrcode-container"), {
                text: "https://velocechrono.co/invoice/pay-secure-gate",
                width: 150,
                height: 150
            });
        } else {
            document.getElementById('qrcode-area').style.display = 'none';
        }
    }, 2000);
}

function closeSuccessScreen() {
    cart = [];
    updateCartUI();
    document.getElementById('loading-overlay').classList.remove('active');
}