'use client'

import { useState } from 'react';

export default function FinalPage() {
    const [showHeartFill, setShowHeartFill] = useState(false);

    const handleHugClick = () => {
        setShowHeartFill(true);
        // Create massive heart animation
        for (let i = 0; i < 50; i++) {
            setTimeout(() => {
                const heart = document.createElement('div');
                heart.className = 'final-heart';
                heart.textContent = '❤️';
                heart.style.cssText = `
          position: fixed;
          left: ${Math.random() * 100}%;
          top: ${Math.random() * 100}%;
          font-size: ${Math.random() * 100 + 50}px;
          animation: fadeInScale 3s ease-in-out forwards;
          pointer-events: none;
          z-index: 9999;
        `;
                document.body.appendChild(heart);
                setTimeout(() => heart.remove(), 4000);
            }, i * 100);
        }
    };

    return (
        <section className="page active" id="page9">
            <div className="final-container">
                <h1 className="final-title">You Made It! 🎉</h1>
                <div className="final-message">
                    <p>Thank you for being my Valentine 💝</p>
                    <p>You mean the world to me, and I'm so blessed to have you in my life.</p>
                    <p>Here's to many more beautiful moments together! 💕</p>
                    <p>I love you more than words can express! ❤️</p>
                </div>

                <button className="hug-btn romantic-btn pulse" onClick={handleHugClick}>
                    Hug me ❤️
                </button>

                {showHeartFill && (
                    <div className="heart-screen-fill">
                        <div className="heart-message">
                            <h2>💖 Virtual Hug! 💖</h2>
                            <p>Sending you all my love!</p>
                        </div>
                    </div>
                )}

                <div className="final-footer">
                    <p className="signature-text">Happy Valentine's Day, My Love! 💝</p>
                </div>
            </div>
        </section>
    );
}
