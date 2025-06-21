import Header from '../components/Header';
import ProductCard from '../components/ProductCard';

const products = [
    { id: 1, name: 'Aloe Vera', price: 12.99, image: '/assets/plant1.jpg' },
    { id: 2, name: 'Snake Plant', price: 15.50, image: '/assets/plant2.jpg' },
    { id: 3, name: 'Peace Lily', price: 18.75, image: '/assets/plant3.jpg' },
    { id: 4, name: 'Spider Plant', price: 9.99, image: '/assets/plant4.jpg' },
    { id: 5, name: 'Fiddle Leaf Fig', price: 24.00, image: '/assets/plant5.jpg' },
    { id: 6, name: 'ZZ Plant', price: 22.50, image: '/assets/plant6.jpg' },
];

function ProductPage() {
    return (
        <>
            <Header />
            <div style={{ padding: '2rem' }}>
                <h2>Our Plants</h2>
                <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center'
                }}>
                    {products.map(plant => (
                        <ProductCard key={plant.id} plant={plant} />
                    ))}
                </div>
            </div>
        </>
    );
}

export default ProductPage;
