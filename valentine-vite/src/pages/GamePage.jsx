import { useState, useEffect } from 'react';

function GamePage({ score, setScore, onNext }) {
    const [hearts, setHearts] = useState([]);
    const [timeLeft, setTimeLeft] = useState(30);
    const [gameStarted, setGameStarted] = useState(false);
    const [gameEnded, setGameEnded] = useState(false);

    const targetScore = 10;

    useEffect(() => {
        if (!gameStarted || gameEnded) return;

        const timer = setInterval(() => {
            setTimeLeft(prev => {
                if (prev <= 1) {
                    setGameEnded(true);
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, [gameStarted, gameEnded]);

    useEffect(() => {
        if (!gameStarted || gameEnded) return;

        const spawnInterval = setInterval(() => {
            const isGolden = Math.random() < 0.1;
            const newHeart = {
                id: Date.now().toString() + Math.random(),
                x: Math.random() * 80 + 5,
                y: Math.random() * 70 + 10,
                emoji: isGolden ? '💛' : ['❤️', '💕', '💖'][Math.floor(Math.random() * 3)],
                isGolden
            };
            setHearts(prev => [...prev, newHeart]);
        }, 800);

        return () => clearInterval(spawnInterval);
    }, [gameStarted, gameEnded]);

    const popHeart = (heartId, isGolden) => {
        setHearts(prev => prev.filter(h => h.id !== heartId));
        setScore(score + (isGolden ? 3 : 1));
    };

    const startGame = () => {
        setGameStarted(true);
        setScore(0);
        setTimeLeft(30);
        setGameEnded(false);
    };

    const skipGame = () => {
        setScore(targetScore);
        onNext();
    };

    return (
        <div className="min-h-screen flex items-center justify-center relative z-10 px-4 py-8">
            <div className="w-full max-w-4xl bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl">
                <h2 className="text-4xl md:text-5xl font-playfair text-romantic-red text-center mb-4">
                    Pop the Hearts! 💕
                </h2>
                <p className="text-center text-xl text-gray-700 mb-6">
                    Pop {targetScore} hearts to continue!
                </p>

                {!gameStarted ? (
                    <div className="flex flex-col gap-4 items-center">
                        <button
                            onClick={startGame}
                            className="px-10 py-4 bg-gradient-to-r from-romantic-rose to-romantic-red text-white text-xl rounded-full font-semibold hover:scale-105 transition-transform duration-300 shadow-xl"
                        >
                            Start Game 🎮
                        </button>
                        <button
                            onClick={skipGame}
                            className="px-8 py-3 bg-gray-400 text-white text-lg rounded-full font-semibold hover:scale-105 transition-transform duration-300"
                        >
                            Skip Game ⏭️
                        </button>
                    </div>
                ) : (
                    <>
                        <div className="flex justify-between items-center mb-6 text-xl font-semibold">
                            <div className="text-romantic-red">Score: {score}</div>
                            <div className="text-romantic-rose">Time: {timeLeft}s</div>
                        </div>

                        <div
                            className="relative w-full h-96 md:h-[500px] rounded-2xl bg-cover bg-center overflow-hidden shadow-inner"
                            style={{ backgroundImage: 'url(/rose.jpg)' }}
                        >
                            {hearts.map(heart => (
                                <div
                                    key={heart.id}
                                    className="absolute cursor-pointer text-5xl hover:scale-125 transition-transform"
                                    style={{
                                        left: `${heart.x}%`,
                                        top: `${heart.y}%`,
                                    }}
                                    onClick={() => popHeart(heart.id, heart.isGolden)}
                                >
                                    {heart.emoji}
                                </div>
                            ))}
                        </div>

                        {(score >= targetScore || gameEnded) && (
                            <button
                                onClick={onNext}
                                className="mt-6 mx-auto block px-10 py-4 bg-gradient-to-r from-romantic-rose to-romantic-red text-white text-xl rounded-full font-semibold hover:scale-105 transition-transform duration-300 shadow-xl animate-pulse"
                            >
                                Continue 💖
                            </button>
                        )}
                    </>
                )}
            </div>
        </div>
    );
}

export default GamePage;
