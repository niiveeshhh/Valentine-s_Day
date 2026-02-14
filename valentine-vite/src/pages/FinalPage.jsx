import { useState } from 'react';

function FinalPage() {
    const [showHeartFill, setShowHeartFill] = useState(false);

    const handleHugClick = () => {
        setShowHeartFill(true);
        // Create massive heart animation
        for (let i = 0; i < 50; i++) {
            setTimeout(() => {
                const heart = document.createElement('div');
                heart.className = 'fixed pointer-events-none z-50';
                heart.textContent = '❤️';
                heart.style.cssText = `
          left: ${Math.random() * 100}%;
          top: ${Math.random() * 100}%;
          font-size: ${Math.random() * 100 + 50}px;
          animation: fadeInScale 3s ease-in-out forwards;
        `;
                document.body.appendChild(heart);
                setTimeout(() => heart.remove(), 4000);
            }, i * 100);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center relative z-10 px-4">
            <div className="max-w-3xl w-full text-center">
                <h1 className="text-5xl md:text-7xl font-playfair text-romantic-red mb-8">
                    You Made It! 🎉
                </h1>
                <div className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-10 space-y-4">
                    <p>Thank you for being my Valentine 💝</p>
                    <p>You mean the world to me, and I'm so blessed to have you in my life.</p>
                    <p>Here's to many more beautiful moments together! 💕</p>
                    <p className="text-romantic-red font-semibold">I love you more than words can express! ❤️</p>
                </div>

                <button
                    onClick={handleHugClick}
                    className="px-12 py-5 bg-gradient-to-r from-romantic-rose to-romantic-red text-white text-2xl rounded-full font-semibold hover:scale-110 transition-transform duration-300 shadow-2xl animate-pulse"
                >
                    Hug me ❤️
                </button>

                {showHeartFill && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-romantic-red via-romantic-rose to-romantic-pink">
                        <div className="text-center text-white">
                            <h2 className="text-6xl font-playfair mb-6">💖 Virtual Hug! 💖</h2>
                            <p className="text-3xl">Sending you all my love!</p>
                        </div>
                    </div>
                )}

                <div className="mt-12">
                    <p className="text-2xl font-dancing text-romantic-rose">Happy Valentine's Day, My Love! 💝</p>
                </div>
            </div>
        </div>
    );
}

export default FinalPage;
