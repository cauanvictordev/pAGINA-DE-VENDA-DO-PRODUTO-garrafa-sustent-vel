function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

async function placeOrder(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const address = document.getElementById('address').value;
    const quantity = document.getElementById('quantity').value;
    const totalPrice = quantity * 99.99;

    const response = await fetch('php/order.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, address, quantity, total_price: totalPrice })
    });

    if (response.ok) {
        alert("Pedido realizado com sucesso!");
    } else {
        alert("Erro ao realizar o pedido.");
    }
}
