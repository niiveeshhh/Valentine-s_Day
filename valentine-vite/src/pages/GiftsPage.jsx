function GiftsPage({ giftsOpened, onOpenGift, onNext, onGiftPageNavigate }) {
    const gift4Unlocked = giftsOpened.size >= 3;
    const allGiftsOpened = giftsOpened.size >= 4;

    const handleGiftClick = (giftNum, targetPage) => {
        if (giftNum === '4' && !gift4Unlocked) return;

        onOpenGift(giftNum);
        onGiftPageNavigate(targetPage);
    };

    return (
        <div className="min-h-screen relative z-10 px-4 py-6 sm:py-8 md:py-12">
            <div className="w-full max-w-6xl mx-auto">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-playfair text-romantic-red text-center mb-3 sm:mb-4">
                    Choose Your Gifts 🎁
                </h2>
                <p className="text-center text-lg sm:text-xl text-gray-700 mb-6 sm:mb-10">
                    Click on each gift to see what's inside!
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-6 sm:mb-8">
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
                        onClick={() => gift4Unlocked && handleGiftClick('4', 5)}
                        className={`bg-white/90 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 text-center ${gift4Unlocked ? 'cursor-pointer hover:scale-105 active:scale-95' : 'opacity-50 cursor-not-allowed'} transition-transform duration-300 shadow-xl ${giftsOpened.has('4') ? 'ring-4 ring-romantic-rose' : ''}`}
                    >
                        {!gift4Unlocked && <div className="text-5xl sm:text-6xl mb-3 sm:mb-4">🔒</div>}
                        <div className="text-5xl sm:text-6xl mb-3 sm:mb-4">🤗</div>
                        <h3 className="text-xl sm:text-2xl font-semibold text-romantic-red mb-2">When you need a hug</h3>
                        <p className="text-sm sm:text-base text-gray-600">Something warm & comforting</p>
                    </div>
                </div>

                {allGiftsOpened && (
                    <div className="text-center pb-6">
                        <button
                            onClick={onNext}
                            className="px-8 sm:px-10 py-4 bg-gradient-to-r from-romantic-rose to-romantic-red text-white text-lg sm:text-xl rounded-full font-semibold hover:scale-105 active:scale-95 transition-transform duration-300 shadow-xl animate-pulse min-h-[56px] w-full max-w-sm"
                        >
                            Continue to surprise 💖
                        </button>
                    </div>
                )}

                <div className="absolute top-4 right-4 sm:right-8 text-3xl sm:text-4xl">💝</div>
            </div>
        </div>
    );
}

export default GiftsPage;
