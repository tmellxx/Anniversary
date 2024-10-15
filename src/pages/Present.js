import React, { useState, useEffect } from 'react';
import Confetti from 'react-confetti';
import './Present.css';

const Present = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [confettiActive, setConfettiActive] = useState(false);

    const showPresent = () => {
        setIsVisible(false);
        setConfettiActive(true);
    };

    useEffect(() => {
        if (confettiActive) {
            setTimeout(() => {
                setConfettiActive(false);
            }, 99999999999); // Langer Timeout für Konfetti
        }
    }, [confettiActive]);

    return (
        <div>
            {confettiActive && <Confetti />}
            <h1 className={`gespannt ${!isVisible && 'invisible'}`}>Thrilled??</h1>
            <p className={`present ${!isVisible && 'invisible'}`}>🎁</p>
            <div className="centerItems">
                <button onClick={showPresent} className={`show-btn ${!isVisible && 'invisible'}`}>reveal Present</button>
            </div>
            {/* Bild wird nur nach Klick auf Button sichtbar */}
            {!isVisible && (
                <div className="image-container">
                    <img src="/Booking.png" alt="Booking" className="present-image" />
                </div>
            )}
        </div>
    );
}

export default Present;
