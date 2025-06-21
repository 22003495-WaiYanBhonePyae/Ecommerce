function LandingPage() {
    return (
        <div
            style={{
                backgroundImage: 'url("/assets/plant1.jpg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '100vh',
                color: 'white',
                textAlign: 'center',
                padding: '5rem'
            }}
        >
            <h1>🌱 Green Haven - Houseplants for Everyone 🌱</h1>
            <p>Your one-stop shop for beautiful houseplants.</p>
            <button onClick={() => window.location.href = '/products'}>
                Get Started
            </button>
        </div>
    );
}

export default LandingPage;
