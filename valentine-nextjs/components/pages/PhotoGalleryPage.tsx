'use client'

interface Props {
    onBack: () => void;
}

export default function PhotoGalleryPage({ onBack }: Props) {
    // Array of photos from 1 to 26
    const photos = Array.from({ length: 26 }, (_, i) => i + 1);

    return (
        <section className="page active" id="page5">
            <div className="gallery-container">
                <button className="back-btn" onClick={onBack}>
                    ← Back to Gifts
                </button>
                <h2 className="gallery-title">Us Together 🥰😍</h2>

                <div className="gallery-grid">
                    {photos.map(num => (
                        <div key={num} className="photo-item gallery-item">
                            <img src={`/photos/${num}.jpg`} alt={`Memory ${num}`} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
