import { useState, useEffect } from 'react';

function LoveLetterPage({ onNext }) {
    const [displayText, setDisplayText] = useState('');
    const [isTyping, setIsTyping] = useState(true);

    const letterText = `My Beautiful Jaan,

As I sit here thinking about you, my heart fills with so much love that words seem inadequate to express what I truly feel. You are not just my partner, you are my soulmate, my best friend, and the love of my life.

From the moment you came into my life, everything changed. You brought light into my darkest days, hope when I felt lost, and joy in every single moment we share together. Your smile has the power to make my entire world brighter, and your laughter is the sweetest melody I've ever heard.

I love the way you care for me, the way you understand me even when I don't say a word. I love your kindness, your strength, and the beautiful soul that you are. Every day with you is a blessing, and I thank the universe for bringing you into my life.

I promise to love you endlessly, to support you in every dream, to hold your hand through every challenge, and to cherish every moment we have together. You are my forever, my always, and my everything.

Happy Valentine's Day, my love. Thank you for being mine.`;

    useEffect(() => {
        let index = 0;
        const typingInterval = setInterval(() => {
            if (index < letterText.length) {
                setDisplayText(letterText.substring(0, index + 1));
                index++;
            } else {
                clearInterval(typingInterval);
                setIsTyping(false);
            }
        }, 20);

        return () => clearInterval(typingInterval);
    }, []);

    return (
        <div className="min-h-screen flex items-center justify-center relative z-10 px-4 py-8">
            <div className="max-w-3xl w-full bg-white/95 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl">
                <h2 className="text-3xl md:text-4xl font-playfair text-romantic-red text-center mb-8">
                    To My Dearest Love,
                </h2>
                <div className="text-lg md:text-xl text-gray-700 leading-relaxed whitespace-pre-wrap mb-8">
                    {displayText}
                    {!isTyping && (
                        <>
                            {'\n\n'}
                            <p className="text-right italic text-romantic-red mt-6">
                                Forever yours,<br />Your Love ❤️
                            </p>
                        </>
                    )}
                </div>
                {!isTyping && (
                    <button
                        onClick={onNext}
                        className="mx-auto block px-10 py-4 bg-gradient-to-r from-romantic-rose to-romantic-red text-white text-xl rounded-full font-semibold hover:scale-105 transition-transform duration-300 shadow-xl animate-pulse"
                    >
                        Continue 💕
                    </button>
                )}
            </div>
        </div>
    );
}

export default LoveLetterPage;
