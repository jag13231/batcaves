<div className="cart-section">
    <h2>Your Cart</h2>
    <ul className="cart-items">
        <li className="cart-item">
            <img src="https://via.placeholder.com/60" alt="Product" />
            <span className="item-name">Product Name</span>
            <span className="item-qty">Qty: 1</span>
            <span className="item-price">$19.99</span>
            <button className="remove-btn">Remove</button>
        </li>
        {/* ...repeat for more items... */}
    </ul>
    <div className="cart-summary">
        <span>Total:</span>
        <span className="cart-total">$19.99</span>
        <button className="checkout-btn">Checkout</button>
    </div>
</div>