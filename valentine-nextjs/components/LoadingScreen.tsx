'use client'

import { useEffect, useState } from 'react';

interface Props {
    onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: Props) {
    const [hide, setHide] = useState(false);

    useEffect(() => {
        // Multiple failsafes to ensure loading screen disappears
        const timer1 = setTimeout(() => {
            setHide(true);
            setTimeout(onComplete, 800);
        }, 2500);

        const timer2 = setTimeout(() => {
            setHide(true);
            setTimeout(onComplete, 800);
        }, 4000);

        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
        };
    }, [onComplete]);

    return (
        <div
            id="loadingScreen"
            className="loading-screen"
            style={{
                opacity: hide ? 0 : 1,
                transition: 'opacity 0.8s ease',
                display: hide ? 'none' : 'flex'
            }}
        >
            <div className="loading-content">
                <div className="loading-heart">❤️</div>
                <div className="loading-text">Loading your surprise...</div>
            </div>
        </div>
    );
}
