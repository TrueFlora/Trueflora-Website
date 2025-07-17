
// Sample cart logic with placeholder for payment integration and editable email
let cart = [];

function addToCart(product) {
  cart.push(product);
  displayCart();
}

function displayCart() {
  const cartSection = document.getElementById("cart");
  cartSection.innerHTML = `
    <h2>Your Cart</h2>
    <ul>
      ${cart.map(item => `<li>${item.name} - Rs. ${item.price}</li>`).join('')}
    </ul>
    <form onsubmit="submitOrder(event)">
      <input type="text" placeholder="Name" name="name" required />
      <input type="email" placeholder="Email" name="email" required />
      <input type="text" placeholder="Phone Number" name="phone" required />
      <input type="text" placeholder="Address" name="address" required />
      <select name="payment">
        <option value="cod">Cash on Delivery</option>
        <option value="online">Pay Online (Coming Soon)</option>
      </select>
      <button type="submit">Place Order</button>
    </form>
  `;
}

function submitOrder(e) {
  e.preventDefault();
  const formData = new FormData(e.target);
  const orderDetails = {
    name: formData.get('name'),
    email: formData.get('email'),
    phone: formData.get('phone'),
    address: formData.get('address'),
    payment: formData.get('payment'),
    items: cart
  };

  const recipientEmail = "khokhar505tha@gmail.com"; // You can change this manually

  console.log("Order submitted:", orderDetails);
  alert("Order placed! Confirmation will be sent to " + orderDetails.email);
  cart = [];
  document.getElementById("cart").innerHTML = "<p>Thank you for your order!</p>";
}
