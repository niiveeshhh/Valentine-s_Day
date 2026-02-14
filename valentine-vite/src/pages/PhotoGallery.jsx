function PhotoGallery({ onBack }) {
    const photos = Array.from({ length: 26 }, (_, i) => i + 1);

    return (
        <div className="min-h-screen relative z-10 px-4 py-6 sm:py-8">
            <button
                onClick={onBack}
                className="mb-4 sm:mb-6 px-5 sm:px-6 py-3 bg-romantic-rose text-white rounded-full font-semibold hover:scale-105 active:scale-95 transition-transform duration-300 shadow-lg text-sm sm:text-base"
            >
                ← Back to Gifts
            </button>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-playfair text-romantic-red text-center mb-6 sm:mb-10">
                Us Together 🥰😍
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-6 max-w-7xl mx-auto pb-8">
                {photos.map(num => (
                    <div key={num} className="aspect-square rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300">
                        <img
                            src={`/photos/${num}.jpg`}
                            alt={`Memory ${num}`}
                            className="w-full h-full object-cover"
                            loading="lazy"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PhotoGallery;
