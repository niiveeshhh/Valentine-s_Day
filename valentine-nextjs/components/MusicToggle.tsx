'use client'

interface Props {
    isPlaying: boolean;
    onToggle: () => void;
}

export default function MusicToggle({ isPlaying, onToggle }: Props) {
    return (
        <button
            className="music-toggle bounce"
            onClick={onToggle}
            aria-label="Toggle music"
        >
            {isPlaying ? '🎵' : '🔇'}
        </button>
    );
}
