'use client'

import { useState, useEffect } from 'react';

interface Props {
    score: number;
    setScore: (score: number) => void;
    onNext: () => void;
}

interface Heart {
    id: string;
    x: number;
    y: number;
    emoji: string;
    isGolden: boolean;
}

export default function GamePage({ score, setScore, onNext }: Props) {
    const [hearts, setHearts] = useState<Heart[]>([]);
    const [timeLeft, setTimeLeft] = useState(30);
    const [gameStarted, setGameStarted] = useState(false);
    const [gameEnded, setGameEnded] = useState(false);
    const [showBonus, setShowBonus] = useState(false);

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
            const newHeart: Heart = {
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

    const popHeart = (heartId: string, isGolden: boolean) => {
        setHearts(prev => prev.filter(h => h.id !== heartId));
        setScore(score + (isGolden ? 3 : 1));

        if (score + (isGolden ? 3 : 1) >= targetScore && !showBonus) {
            setShowBonus(true);
        }
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
        <section className="page active" id="page3">
            <div className="game-container">
                <h2 className="game-title">Pop the Hearts! 💕</h2>
                <p>Pop {targetScore} hearts to continue!</p>

                {!gameStarted ? (
                    <div className="game-start">
                        <button className="romantic-btn" onClick={startGame}>
                            Start Game 🎮
                        </button>
                        <button className="romantic-btn skip-btn" onClick={skipGame}>
                            Skip Game ⏭️
                        </button>
                    </div>
                ) : (
                    <>
                        <div className="game-info">
                            <div className="score">Score: {score}</div>
                            <div className="timer">Time: {timeLeft}s</div>
                        </div>

                        <div id="gameArea" className="game-area">
                            {hearts.map(heart => (
                                <div
                                    key={heart.id}
                                    className="game-heart"
                                    style={{
                                        left: `${heart.x}%`,
                                        top: `${heart.y}%`,
                                        position: 'absolute',
                                        cursor: 'pointer',
                                        fontSize: '50px'
                                    }}
                                    onClick={() => popHeart(heart.id, heart.isGolden)}
                                >
                                    {heart.emoji}
                                </div>
                            ))}
                        </div>

                        {(score >= targetScore || gameEnded) && (
                            <button className="romantic-btn" onClick={onNext}>
                                Continue 💖
                            </button>
                        )}
                    </>
                )}

                {showBonus && (
                    <div className="bonus-popup">
                        <div className="popup-content">
                            <h3>🎉 Amazing! 🎉</h3>
                            <p>You popped enough hearts!</p>
                            <button className="romantic-btn" onClick={() => setShowBonus(false)}>
                                Close
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}
