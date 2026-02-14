'use client'

interface Props {
    onBack: () => void;
}

export default function VideoGallery2Page({ onBack }: Props) {
    const videos = Array.from({ length: 6 }, (_, i) => i + 8); // Videos 8-13

    return (
        <section className="page active" id="page7">
            <div className="gallery-container">
                <button className="back-btn" onClick={onBack}>
                    ← Back to Gifts
                </button>
                <h2 className="gallery-title">More Beautiful Moments 💫</h2>

                <div className="video-grid">
                    {videos.map(num => (
                        <div key={num} className="video-item">
                            <video controls>
                                <source src={`/videos/${num}.mp4`} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
