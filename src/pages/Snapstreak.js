import React, { useEffect, useState } from 'react';
import FireEffect from './FireEffect';
import './FireEffect.css'; // Importiere die FireEffect CSS-Datei
import './Snapstreak.css';

const Snapstreak = () => {
    const [streak, setStreak] = useState(1040);
    const [lastOpened, setLastOpened] = useState(new Date().toLocaleDateString());
    const [flamesActive, setFlamesActive] = useState(true);

    useEffect(() => {
        // Lade Snapstreak und letztes Öffnungsdatum aus dem localStorage
        const savedStreak = parseInt(localStorage.getItem('snapstreak')) || 1040;
        const lastOpenedDate = localStorage.getItem('lastOpened') || new Date().toLocaleDateString();

        setStreak(savedStreak);
        setLastOpened(lastOpenedDate);

        // Funktion, um die Differenz in Tagen zu berechnen
        const calculateDaysDifference = (date1, date2) => {
            const oneDay = 24 * 60 * 60 * 1000; // Millisekunden in einem Tag
            const firstDate = new Date(date1);
            const secondDate = new Date(date2);

            return Math.floor(Math.abs((secondDate - firstDate) / oneDay));
        };

        // Aktuelles Datum
        const today = new Date().toLocaleDateString();

        // Überprüfen, ob ein neuer Tag seit dem letzten Öffnen vergangen ist
        if (today !== lastOpenedDate) {
            const daysDifference = calculateDaysDifference(lastOpenedDate, today);
            const updatedStreak = savedStreak + daysDifference;

            setStreak(updatedStreak);

            // Aktualisiere Snapstreak und letztes Öffnungsdatum im localStorage
            localStorage.setItem('snapstreak', updatedStreak.toString());
            localStorage.setItem('lastOpened', today);
        }
    }, [lastOpened]); // Füge lastOpened zu den Abhängigkeiten hinzu

    return (
        <div>
            <div className="conatainer">
                {flamesActive && <FireEffect number={100} duration={5} />} {/* Unendlich Flammen */}
            </div>
            <div className="content">
                <h1><span className='snapstr'>Snapstreak</span></h1>
                <p className='streak'>{streak} <span role="img" aria-label="fire">🔥</span></p>

            </div>
            <div className='container2'>
            </div>
        </div>
    );
}

export default Snapstreak;
