'use client'

interface Props {
    onBack: () => void;
}

export default function VideoGalleryPage({ onBack }: Props) {
    const videos = Array.from({ length: 7 }, (_, i) => i + 1);

    return (
        <section className="page active" id="page6">
            <div className="gallery-container">
                <button className="back-btn" onClick={onBack}>
                    ← Back to Gifts
                </button>
                <h2 className="gallery-title">Our Special Moments 🎥</h2>

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
