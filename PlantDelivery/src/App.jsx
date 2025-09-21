import React from 'react';
import Navbar from './components/Navbar';
import './components/style.css';

const App = () => {
    return (
        <div>
            <Navbar />
            <h1>Welcome to the Plant Delivery Application</h1>
            {/* Additional content can be added here */}
        </div>
    );
}

export default App;