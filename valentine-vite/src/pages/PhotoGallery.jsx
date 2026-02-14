function PhotoGallery({ onBack }) {
    const photos = Array.from({ length: 26 }, (_, i) => i + 1);

    return (
        <div className="min-h-screen relative z-10 px-4 py-8">
            <button
                onClick={onBack}
                className="mb-6 px-6 py-3 bg-romantic-rose text-white rounded-full font-semibold hover:scale-105 transition-transform duration-300 shadow-lg"
            >
                ← Back to Gifts
            </button>

            <h2 className="text-4xl md:text-5xl font-playfair text-romantic-red text-center mb-10">
                Us Together 🥰😍
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                {photos.map(num => (
                    <div key={num} className="aspect-square rounded-2xl overflow-hidden shadow-xl hover:scale-105 transition-transform duration-300">
                        <img
                            src={`/photos/${num}.jpg`}
                            alt={`Memory ${num}`}
                            className="w-full h-full object-cover"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PhotoGallery;
