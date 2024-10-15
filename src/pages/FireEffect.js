import React, { useEffect, useState } from 'react';
import './FireEffect.css';

const FireEffect = ({ number, duration }) => {
    const [flames, setFlames] = useState([]);

    useEffect(() => {
        const flamesArray = [];
        for (let i = 0; i < number; i++) {
            flamesArray.push({
                id: i,
                left: Math.random() * window.innerWidth,
                animationDuration: Math.random() * (duration / 2) + duration / 2 + 's',
                animationDelay: Math.random() * duration + 's'
            });
        }
        setFlames(flamesArray);
    }, [number, duration]);

    return (
        <div className="fire-container">
            {flames.map(flame => (
                <div
                    key={flame.id}
                    className="flame"
                    style={{
                        left: flame.left,
                        animationDuration: flame.animationDuration,
                        animationDelay: flame.animationDelay
                    }}
                >
                    🔥
                </div>
            ))}
        </div>
    );
};

export default FireEffect;
