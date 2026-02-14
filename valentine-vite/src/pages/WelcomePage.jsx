import { useState, useEffect } from 'react';

function WelcomePage({ onNext, onStartMusic }) {
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const [displayText, setDisplayText] = useState('');
    const [showChoice, setShowChoice] = useState(false);
    const [noButtonStyle, setNoButtonStyle] = useState({});
    const [niceTry, setNiceTry] = useState(false);

    const messages = [
        "Hi my love ❤️",
        "Happy Valentine's Day! 💝",
        "I have something special for you...",
        "Will you be my Valentine? 💕"
    ];

    useEffect(() => {
        if (currentTextIndex >= messages.length) {
            setShowChoice(true);
            return;
        }

        const text = messages[currentTextIndex];
        let charIndex = 0;

        const typeInterval = setInterval(() => {
            if (charIndex <= text.length) {
                setDisplayText(text.substring(0, charIndex));
                charIndex++;
            } else {
                clearInterval(typeInterval);
                setTimeout(() => {
                    setCurrentTextIndex(prev => prev + 1);
                    setDisplayText('');
                }, 1500);
            }
        }, 50);

        return () => clearInterval(typeInterval);
    }, [currentTextIndex]);

    const handleYesClick = () => {
        // Create heart explosion
        for (let i = 0; i < 30; i++) {
            const heart = document.createElement('div');
            heart.className = 'fixed text-4xl pointer-events-none z-50';
            heart.textContent = '❤️';
            heart.style.cssText = `
        left: 50%;
        top: 50%;
        font-size: ${Math.random() * 30 + 20}px;
        animation: explode ${Math.random() * 2 + 1}s ease-out forwards;
        --angle: ${Math.random() * 360}deg;
        --distance: ${Math.random() * 300 + 100}px;
      `;
            document.body.appendChild(heart);
            setTimeout(() => heart.remove(), 3000);
        }
        onStartMusic();
        setTimeout(() => onNext(), 1000);
    };

    const handleNoHover = () => {
        const x = Math.random() * 80;
        const y = Math.random() * 80;
        setNoButtonStyle({
            position: 'absolute',
            left: `${x}%`,
            top: `${y}%`,
        });
        setNiceTry(true);
        setTimeout(() => setNiceTry(false), 2000);
    };

    return (
        <div className="min-h-screen flex items-center justify-center relative z-10 px-4">
            <div className="text-center max-w-2xl">
                <h1 className="text-5xl md:text-7xl font-dancing text-romantic-red mb-12 min-h-[120px] typing-cursor">
                    {displayText || messages[currentTextIndex]}
                </h1>

                {showChoice && (
                    <div className="flex flex-col md:flex-row gap-6 items-center justify-center relative min-h-[200px]">
                        <button
                            onClick={handleYesClick}
                            className="px-12 py-4 bg-gradient-to-r from-romantic-rose to-romantic-red text-white text-2xl rounded-full font-semibold hover:scale-110 transition-transform duration-300 shadow-2xl animate-pulse"
                        >
                            YES! 💖
                        </button>
                        <button
                            style={noButtonStyle}
                            onMouseEnter={handleNoHover}
                            onFocus={handleNoHover}
                            className="px-12 py-4 bg-gray-400 text-white text-2xl rounded-full font-semibold hover:scale-110 transition-transform duration-300 shadow-lg"
                        >
                            No 💔
                        </button>
                    </div>
                )}

                {niceTry && (
                    <p className="fixed top-1/4 left-1/2 transform -translate-x-1/2 bg-romantic-rose text-white px-8 py-4 rounded-2xl text-xl animate-pulse z-50">
                        Nice try! 😊
                    </p>
                )}
            </div>
        </div>
    );
}

export default WelcomePage;
