import { useSelector } from 'react-redux';
import CartItem from '../components/CartItem';
import Header from '../components/Header';
import { Link } from 'react-router-dom';

function CartPage() {
    const items = useSelector(state => state.cart.items);
    const totalQuantity = useSelector(state => state.cart.totalQuantity);
    const totalAmount = useSelector(state => state.cart.totalAmount);

    return (
        <>
            <Header />
            <div style={{ padding: '2rem' }}>
                <h2>Your Cart</h2>
                <p>Total Items: {totalQuantity}</p>
                <p>Total Amount: ${totalAmount.toFixed(2)}</p>

                {items.length === 0 ? (
                    <p>Your cart is empty.</p>
                ) : (
                    items.map(item => (
                        <CartItem key={item.id} item={item} />
                    ))
                )}

                <div style={{ marginTop: '2rem' }}>
                    <button onClick={() => alert('Coming Soon!')}>Checkout</button>
                    <Link to="/products">
                        <button style={{ marginLeft: '1rem' }}>Continue Shopping</button>
                    </Link>
                </div>
            </div>
        </>
    );
}

export default CartPage;
