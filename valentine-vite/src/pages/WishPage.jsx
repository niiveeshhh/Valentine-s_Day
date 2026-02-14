function WishPage({ onNext }) {
    return (
        <div className="min-h-screen flex items-center justify-center relative z-10 px-4">
            <div className="text-center max-w-3xl bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-2xl">
                <h2 className="text-4xl md:text-5xl font-playfair text-romantic-red mb-8">
                    On this special day...
                </h2>
                <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-10">
                    I wish you all the happiness in the world. You mean everything to me,
                    and I'm so grateful to have you in my life. Let's make this Valentine's
                    Day unforgettable! 💕
                </p>
                <button
                    onClick={onNext}
                    className="px-10 py-4 bg-gradient-to-r from-romantic-rose to-romantic-red text-white text-xl rounded-full font-semibold hover:scale-105 transition-transform duration-300 shadow-xl animate-pulse"
                >
                    Continue 💖
                </button>
            </div>
        </div>
    );
}

export default WishPage;
