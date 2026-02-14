import { useState, useEffect } from 'react';

function PuzzlePage({ onNext }) {
    const [tiles, setTiles] = useState([]);
    const [emptyIndex, setEmptyIndex] = useState(8);
    const [isSolved, setIsSolved] = useState(false);
    const [moves, setMoves] = useState(0);
    const [showMessage, setShowMessage] = useState(false);

    // Initialize puzzle
    useEffect(() => {
        const initialTiles = [0, 1, 2, 3, 4, 5, 6, 7, 8];
        // Shuffle the tiles
        const shuffled = shufflePuzzle(initialTiles);
        setTiles(shuffled);
        setEmptyIndex(shuffled.indexOf(8));
    }, []);

    const shufflePuzzle = (array) => {
        const arr = [...array];
        // Fisher-Yates shuffle
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
    };

    const canMove = (index) => {
        const row = Math.floor(index / 3);
        const col = index % 3;
        const emptyRow = Math.floor(emptyIndex / 3);
        const emptyCol = emptyIndex % 3;

        return (
            (row === emptyRow && Math.abs(col - emptyCol) === 1) ||
            (col === emptyCol && Math.abs(row - emptyRow) === 1)
        );
    };

    const moveTile = (index) => {
        if (!canMove(index) || isSolved) return;

        const newTiles = [...tiles];
        [newTiles[index], newTiles[emptyIndex]] = [newTiles[emptyIndex], newTiles[index]];
        setTiles(newTiles);
        setEmptyIndex(index);
        setMoves(moves + 1);

        // Check if solved
        const solved = newTiles.every((tile, idx) => tile === idx);
        if (solved) {
            setIsSolved(true);
            setTimeout(() => setShowMessage(true), 500);
        }
    };

    const getTilePosition = (tileNumber) => {
        const row = Math.floor(tileNumber / 3);
        const col = tileNumber % 3;
        return {
            backgroundPosition: `-${col * 33.33}% -${row * 33.33}%`,
        };
    };

    return (
        <div className="min-h-screen relative z-10 px-4 py-6 sm:py-8 flex items-center justify-center">
            <div className="w-full max-w-2xl">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-playfair text-romantic-red text-center mb-4 sm:mb-6">
                    Solve the Puzzle 🧩
                </h2>

                <p className="text-center text-lg sm:text-xl text-gray-700 mb-6 sm:mb-8">
                    Put the pieces together to reveal a special memory...
                </p>

                <div className="flex justify-center mb-4">
                    <div className="bg-white/90 backdrop-blur-sm rounded-xl px-6 py-3 shadow-lg">
                        <p className="text-romantic-rose font-semibold text-lg">
                            Moves: {moves}
                        </p>
                    </div>
                </div>

                <div className="relative mx-auto max-w-md aspect-square bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-2xl">
                    <div className="grid grid-cols-3 gap-2 w-full h-full">
                        {tiles.map((tile, index) => (
                            <div
                                key={index}
                                onClick={() => moveTile(index)}
                                className={`relative rounded-lg overflow-hidden transition-all duration-300 ${tile === 8
                                        ? 'bg-romantic-light/50'
                                        : canMove(index) && !isSolved
                                            ? 'cursor-pointer hover:scale-105 hover:shadow-xl active:scale-95'
                                            : 'cursor-default'
                                    } ${isSolved ? 'shadow-lg' : ''}`}
                                style={{
                                    backgroundImage: tile !== 8 ? `url(/photos/Puzzle.jpg)` : 'none',
                                    backgroundSize: '300%',
                                    ...getTilePosition(tile),
                                }}
                            >
                                {tile === 8 && !isSolved && (
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <span className="text-4xl opacity-30">💕</span>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {isSolved && showMessage && (
                    <div className="mt-8 text-center animate-fadeIn">
                        <div className="bg-gradient-to-r from-romantic-rose to-romantic-red text-white rounded-2xl p-8 shadow-2xl mb-6">
                            <h3 className="text-3xl sm:text-4xl font-dancing mb-4">
                                ✨ Our First Meet ✨
                            </h3>
                            <p className="text-lg sm:text-xl leading-relaxed">
                                This moment... when our eyes first met, when our hearts recognized each other.
                                The beginning of our beautiful journey together. 💕
                            </p>
                            <p className="text-lg sm:text-xl mt-4 italic">
                                Thank you for being the missing piece in my life's puzzle! ❤️
                            </p>
                        </div>

                        <button
                            onClick={onNext}
                            className="px-8 sm:px-10 py-4 bg-gradient-to-r from-romantic-rose to-romantic-red text-white text-lg sm:text-xl rounded-full font-semibold hover:scale-105 active:scale-95 transition-transform duration-300 shadow-xl animate-pulse min-h-[56px]"
                        >
                            Continue to Letter 💌
                        </button>
                    </div>
                )}

                {!isSolved && (
                    <p className="text-center mt-6 text-gray-600 italic">
                        Tap the tiles next to the empty space to move them
                    </p>
                )}
            </div>
        </div>
    );
}

export default PuzzlePage;
