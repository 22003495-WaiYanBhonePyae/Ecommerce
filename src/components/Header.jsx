import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Header() {
    const totalQuantity = useSelector(state => state.cart.totalQuantity);

    return (
        <header style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '1rem 2rem',
            background: '#cdeac0'
        }}>
            <nav>
                <Link to="/products" style={{ marginRight: '1rem' }}>Products</Link>
                <Link to="/cart">Cart 🛒 ({totalQuantity})</Link>
            </nav>
        </header>
    );
}

export default Header;
