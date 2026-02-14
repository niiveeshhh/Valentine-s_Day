'use client'

import { useState, useEffect } from 'react';

interface Props {
    onNext: () => void;
    onStartMusic: () => void;
}

export default function WelcomePage({ onNext, onStartMusic }: Props) {
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
        createHeartExplosion();
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

    const createHeartExplosion = () => {
        for (let i = 0; i < 30; i++) {
            const heart = document.createElement('div');
            heart.className = 'explosion-heart';
            heart.textContent = '❤️';
            heart.style.cssText = `
        position: fixed;
        left: 50%;
        top: 50%;
        font-size: ${Math.random() * 30 + 20}px;
        pointer-events: none;
        animation: explode ${Math.random() * 2 + 1}s ease-out forwards;
        --angle: ${Math.random() * 360}deg;
        --distance: ${Math.random() * 300 + 100}px;
      `;
            document.body.appendChild(heart);
            setTimeout(() => heart.remove(), 3000);
        }
    };

    return (
        <section className="page active" id="page1">
            <div className="content-center">
                <h1 className="typing-text">{displayText || messages[currentTextIndex]}</h1>

                {showChoice && (
                    <div className="choice-container">
                        <button className="choice-btn yes-btn" onClick={handleYesClick}>
                            YES! 💖
                        </button>
                        <button
                            className="choice-btn no-btn"
                            style={noButtonStyle}
                            onMouseEnter={handleNoHover}
                            onFocus={handleNoHover}
                        >
                            No 💔
                        </button>
                    </div>
                )}

                {niceTry && <p className="nice-try">Nice try! 😊</p>}
            </div>
        </section>
    );
}
