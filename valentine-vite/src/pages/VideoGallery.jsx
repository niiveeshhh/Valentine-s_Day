function VideoGallery({ onBack }) {
    const videos = Array.from({ length: 4 }, (_, i) => i + 1);

    return (
        <div className="min-h-screen relative z-10 px-4 py-8">
            <button
                onClick={onBack}
                className="mb-6 px-6 py-3 bg-romantic-rose text-white rounded-full font-semibold hover:scale-105 transition-transform duration-300 shadow-lg"
            >
                ← Back to Gifts
            </button>

            <h2 className="text-4xl md:text-5xl font-playfair text-romantic-red text-center mb-10">
                Our Special Moments 🎥
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {videos.map(num => (
                    <div key={num} className="rounded-2xl overflow-hidden shadow-xl">
                        <video
                            controls
                            className="w-full h-auto"
                        >
                            <source src={`/videos/${num}.mp4`} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default VideoGallery;
