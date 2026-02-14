import { useEffect, useRef } from 'react';

function GiftsPage({ giftsOpened, onOpenGift, onNext, onGiftPageNavigate }) {
    const gift4Unlocked = giftsOpened.size >= 3;
    const allGiftsOpened = giftsOpened.size >= 4;
    const buttonRef = useRef(null);

    // Scroll to button when all gifts are opened
    useEffect(() => {
        if (allGiftsOpened && buttonRef.current) {
            setTimeout(() => {
                buttonRef.current.scrollIntoView({
                    behavior: 'smooth',
                    block: 'end'
                });
            }, 300);
        }
    }, [allGiftsOpened]);

    const handleGiftClick = (giftNum, targetPage) => {
        if (giftNum === '4' && !gift4Unlocked) return;

        onOpenGift(giftNum);
        onGiftPageNavigate(targetPage);
    };

    return (
        <div className="w-full min-h-screen relative z-10">
            <div className="w-full px-4 py-6 sm:py-8 md:py-12 pb-32">
                <div className="w-full max-w-6xl mx-auto">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-playfair text-romantic-red text-center mb-3 sm:mb-4">
                        Choose Your Gifts 🎁
                    </h2>
                    <p className="text-center text-lg sm:text-xl text-gray-700 mb-6 sm:mb-10">
                        Click on each gift to see what's inside!
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12">
                        {/* Gift 1 - Photos */}
                        <div
                            onClick={() => handleGiftClick('1', 5)}
                            className={`bg-white/90 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 text-center cursor-pointer hover:scale-105 active:scale-95 transition-transform duration-300 shadow-xl ${giftsOpened.has('1') ? 'ring-4 ring-romantic-rose' : ''}`}
                        >
                            <div className="text-5xl sm:text-6xl mb-3 sm:mb-4">📸</div>
                            <h3 className="text-xl sm:text-2xl font-semibold text-romantic-red mb-2">Our Memories</h3>
                            <p className="text-sm sm:text-base text-gray-600">Beautiful moments together</p>
                        </div>

                        {/* Gift 2 - Videos */}
                        <div
                            onClick={() => handleGiftClick('2', 6)}
                            className={`bg-white/90 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 text-center cursor-pointer hover:scale-105 active:scale-95 transition-transform duration-300 shadow-xl ${giftsOpened.has('2') ? 'ring-4 ring-romantic-rose' : ''}`}
                        >
                            <div className="text-5xl sm:text-6xl mb-3 sm:mb-4">🎥</div>
                            <h3 className="text-xl sm:text-2xl font-semibold text-romantic-red mb-2">Special Moments</h3>
                            <p className="text-sm sm:text-base text-gray-600">Captured in motion</p>
                        </div>

                        {/* Gift 3 - More Videos */}
                        <div
                            onClick={() => handleGiftClick('3', 7)}
                            className={`bg-white/90 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 text-center cursor-pointer hover:scale-105 active:scale-95 transition-transform duration-300 shadow-xl ${giftsOpened.has('3') ? 'ring-4 ring-romantic-rose' : ''}`}
                        >
                            <div className="text-5xl sm:text-6xl mb-3 sm:mb-4">💫</div>
                            <h3 className="text-xl sm:text-2xl font-semibold text-romantic-red mb-2">More Surprises</h3>
                            <p className="text-sm sm:text-base text-gray-600">Our journey together</p>
                        </div>

                        {/* Gift 4 - Locked */}
                        <div
                            onClick={() => gift4Unlocked && handleGiftClick('4', 8)}
                            className={`bg-white/90 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 text-center ${gift4Unlocked ? 'cursor-pointer hover:scale-105 active:scale-95' : 'opacity-50 cursor-not-allowed'} transition-transform duration-300 shadow-xl ${giftsOpened.has('4') ? 'ring-4 ring-romantic-rose' : ''}`}
                        >
                            {!gift4Unlocked && <div className="text-5xl sm:text-6xl mb-3 sm:mb-4">🔒</div>}
                            <div className="text-5xl sm:text-6xl mb-3 sm:mb-4">🤗</div>
                            <h3 className="text-xl sm:text-2xl font-semibold text-romantic-red mb-2">When you need a hug</h3>
                            <p className="text-sm sm:text-base text-gray-600">Something warm & comforting</p>
                        </div>
                    </div>

                    {allGiftsOpened && (
                        <div ref={buttonRef} className="w-full text-center mt-12 sm:mt-16 mb-16">
                            <div className="mb-8 space-y-3">
                                <p className="text-3xl sm:text-4xl font-dancing text-romantic-rose animate-pulse">
                                    🎉 All gifts opened! 🎉
                                </p>
                                <p className="text-xl sm:text-2xl text-gray-700 font-semibold">
                                    Ready for your next surprise?
                                </p>
                                <p className="text-lg sm:text-xl text-gray-600">
                                    Scroll down and click the button below! ⬇️
                                </p>
                            </div>
                            <button
                                onClick={onNext}
                                className="px-10 sm:px-12 py-5 bg-gradient-to-r from-romantic-rose to-romantic-red text-white text-xl sm:text-2xl rounded-full font-bold hover:scale-110 active:scale-95 transition-all duration-300 shadow-2xl animate-bounce min-h-[64px] w-full max-w-md mx-auto block"
                            >
                                ✨ Continue to Puzzle ✨
                            </button>
                        </div>
                    )}
                </div>

                <div className="fixed top-4 right-4 sm:right-8 text-3xl sm:text-4xl pointer-events-none">💝</div>
            </div>
        </div>
    );
}

export default GiftsPage;
