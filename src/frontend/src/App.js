import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

function App() {
    const [links, setLinks] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/api/links')
            .then(res => res.json())
            .then(data => setLinks(data));
    }, []);

    return (
        <div>
            <Header />
            <Navigation links={links} />
            <div className="container mt-4">
                <h2>Welcome to JAI SHREE MAHASHAKTHI VARAGIBHAIRAVAR TRUST</h2>
                <p>This is the official temple website.</p>
            </div>
            <Footer />
        </div>
    );
}

export default App;
