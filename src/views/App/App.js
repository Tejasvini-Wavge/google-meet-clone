import React from 'react';
import './App.css';
import Header from '../../components/Header/Header';
import Main from '../Main/Main';
import Footer from '../../components/Footer/Footer';

function App() {
    return (
        <div className="App">
            <Header />
            <Main />
            <Footer />
        </div>
    );
}

export default App;