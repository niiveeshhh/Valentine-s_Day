function HugPage({ onBack }) {
    const hugImages = ['hug1.jpg', 'hug2.jpg'];

    return (
        <div className="min-h-screen relative z-10 px-4 py-6 sm:py-8">
            <button
                onClick={onBack}
                className="mb-4 sm:mb-6 px-5 sm:px-6 py-3 bg-romantic-rose text-white rounded-full font-semibold hover:scale-105 active:scale-95 transition-transform duration-300 shadow-lg text-sm sm:text-base"
            >
                ← Back to Gifts
            </button>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-playfair text-romantic-red text-center mb-4 sm:mb-6">
                Sending You a Big Hug! 🤗
            </h2>

            <p className="text-center text-lg sm:text-xl text-gray-700 mb-6 sm:mb-10 max-w-2xl mx-auto px-4">
                Whenever you need comfort, warmth, or just a reminder that you're loved...
                here's a virtual hug just for you! 💕
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto pb-8">
                {hugImages.map((img, index) => (
                    <div
                        key={index}
                        className="rounded-xl sm:rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300"
                    >
                        <img
                            src={`/photos/${img}`}
                            alt={`Hug ${index + 1}`}
                            className="w-full h-auto object-cover"
                            loading="lazy"
                        />
                    </div>
                ))}
            </div>

            <div className="text-center mt-6 sm:mt-10">
                <p className="text-2xl sm:text-3xl font-dancing text-romantic-rose">
                    You're amazing! Never forget that! ❤️
                </p>
            </div>
        </div>
    );
}

export default HugPage;
