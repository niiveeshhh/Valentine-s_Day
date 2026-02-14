function VideoGallery2({ onBack }) {
    return (
        <div className="min-h-screen relative z-10 px-4 py-8 flex flex-col items-center justify-center">
            <button
                onClick={onBack}
                className="mb-6 px-6 py-3 bg-romantic-rose text-white rounded-full font-semibold hover:scale-105 transition-transform duration-300 shadow-lg"
            >
                ← Back to Gifts
            </button>

            <div className="text-center max-w-2xl">
                <h2 className="text-4xl md:text-5xl font-playfair text-romantic-red mb-6">
                    All Videos in First Gallery! 💕
                </h2>
                <p className="text-xl text-gray-700 mb-8">
                    All our special moments are in the first video gallery.
                    Go back and check them out! 🎥✨
                </p>
                <div className="text-6xl mb-4">💖</div>
            </div>
        </div>
    );
}

export default VideoGallery2;
