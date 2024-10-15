import React from 'react';
import { Link } from 'react-router-dom';
import logoUrl from './Knuffi.svg';
import './HomePage.css';

function App() {
    return (
        <section id='hero'>
            <h1 className='h1-hero'>Hi my love</h1>
            <hr />
            <p className='p-hero'>Happy 3. Anniversary</p>
            <div className="center">
                <img className='knuffi' src={logoUrl} alt="Logo" />
            </div>
            <div className="center-items">
                {/* <Link to="/snapstreak">
                    <button className="snapstr-btn">Snapstreak<span role="img" aria-label='none'>🔥</span></button>
                </Link> */}

                <Link to="/present">
                    <button className="present-btn">Present<span role="img" aria-label='none'>🎁</span></button>
                </Link>
            </div>
            <p className='p-hero'>created with <span role="img" aria-label=''>❤️ </span>in react</p>
        </section>
    );
}

export default App;
