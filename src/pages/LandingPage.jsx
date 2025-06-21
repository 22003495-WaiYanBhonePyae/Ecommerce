function LandingPage() {
    return (
        <div style={{ textAlign: 'center', padding: '2rem' }}>
            <h1>🌱 Green Haven - Houseplants for Everyone 🌱</h1>
            <p>Your one-stop shop for beautiful houseplants.</p>
            <button onClick={() => window.location.href = '/products'}>Get Started</button>
        </div>
    );
}

export default LandingPage;
