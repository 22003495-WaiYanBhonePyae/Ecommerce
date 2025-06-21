import { useDispatch } from 'react-redux';
import { incrementItem, decrementItem, deleteItem } from '../redux/cartReducer';

function CartItem({ item }) {
    const dispatch = useDispatch();

    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottom: '1px solid #ccc',
            padding: '1rem 0'
        }}>
            <img src={item.image} alt={item.name} style={{ width: '80px', height: '80px', objectFit: 'cover' }} />
            <div style={{ flex: 1, marginLeft: '1rem' }}>
                <h4>{item.name}</h4>
                <p>${item.price.toFixed(2)}</p>
                <p>Quantity: {item.quantity}</p>
                <div>
                    <button onClick={() => dispatch(incrementItem(item.id))}>+</button>
                    <button onClick={() => dispatch(decrementItem(item.id))} style={{ marginLeft: '0.5rem' }}>-</button>
                    <button onClick={() => dispatch(deleteItem(item.id))} style={{ marginLeft: '0.5rem' }}>Delete</button>
                </div>
            </div>
        </div>
    );
}

export default CartItem;
