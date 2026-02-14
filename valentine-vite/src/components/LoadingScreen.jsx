import { useEffect, useState } from 'react';

function LoadingScreen({ onComplete }) {
    const [hide, setHide] = useState(false);

    useEffect(() => {
        // Multiple failsafes
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
            className={`fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-romantic-red via-romantic-rose to-romantic-pink transition-opacity duration-800 ${hide ? 'opacity-0' : 'opacity-100'}`}
            style={{ display: hide ? 'none' : 'flex' }}
        >
            <div className="text-center">
                <div className="text-6xl mb-4 animate-pulse">❤️</div>
                <div className="text-white text-2xl font-dancing">Preparing something special for you ❤️</div>
                <div className="flex gap-4 mt-6 justify-center">
                    <span className="text-4xl animate-bounce delay-0">❤️</span>
                    <span className="text-4xl animate-bounce delay-150">💕</span>
                    <span className="text-4xl animate-bounce delay-300">💖</span>
                </div>
            </div>
        </div>
    );
}

export default LoadingScreen;
