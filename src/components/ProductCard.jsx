import { useDispatch } from 'react-redux';
import { addItem } from '../redux/cartReducer';

function ProductCard({ plant }) {
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        dispatch(addItem(plant));
    };

    return (
        <div style={{
            border: '1px solid #ccc',
            borderRadius: '8px',
            padding: '1rem',
            textAlign: 'center',
            margin: '1rem',
            width: '200px'
        }}>
            <img src={plant.image} alt={plant.name} style={{ width: '100%', height: '150px', objectFit: 'cover' }} />
            <h3>{plant.name}</h3>
            <p>${plant.price.toFixed(2)}</p>
            <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
    );
}

export default ProductCard;
