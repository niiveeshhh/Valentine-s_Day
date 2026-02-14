function MusicToggle({ isPlaying, onToggle }) {
    return (
        <button
            onClick={onToggle}
            className="fixed bottom-6 right-6 z-40 w-16 h-16 rounded-full bg-gradient-to-br from-romantic-rose to-romantic-red text-white text-3xl flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300 animate-bounce"
            aria-label="Toggle music"
        >
            {isPlaying ? '🎵' : '🔇'}
        </button>
    );
}

export default MusicToggle;
